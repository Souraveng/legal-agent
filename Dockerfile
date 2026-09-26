# Stage 1: Install dependencies
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app
COPY package.json package-lock.json ./
# Install all dependencies including Prisma
RUN npm ci

# Stage 2: Build the application
FROM node:22-alpine AS builder
RUN apk add --no-cache openssl
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma Client (Required before building Next.js)
RUN npx prisma generate || true

# Build Next.js (Ensure next.config.js has output: 'standalone')
RUN npm run build

# Stage 3: Production Server
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# Set port to 8080 (Cloud Run default)
ENV PORT 8080 
ENV HOSTNAME "0.0.0.0"

# Install OpenSSL for Prisma in the final runtime
RUN apk add --no-cache openssl

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy Prisma schema and engine to runtime
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/@prisma/client ./node_modules/@prisma/client

# Copy Next.js public and standalone build output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 8080

CMD ["node", "server.js"]
