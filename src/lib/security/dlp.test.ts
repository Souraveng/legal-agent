import { describe, it, expect, vi } from 'vitest';
import { redactSensitiveInfo } from './dlp';

// Mock the Google Cloud DLP SDK
vi.mock('@google-cloud/dlp', () => {
  return {
    DlpServiceClient: class {
      deidentifyContent = vi.fn().mockResolvedValue([
        { item: { value: "My SSN is [US_SOCIAL_SECURITY_NUMBER]" } }
      ])
    }
  };
});

describe('Security Layer: DLP Redaction', () => {
  it('should replace sensitive PII with masked tags', async () => {
    // In our test, the mock will always return "[US_SOCIAL_SECURITY_NUMBER]" 
    // regardless of input, but this validates our function calls the SDK properly.
    const rawInput = "My SSN is 123-45-6789";
    const result = await redactSensitiveInfo(rawInput);
    
    expect(result).toContain('[US_SOCIAL_SECURITY_NUMBER]');
    expect(result).not.toContain('123-45-6789');
  });
});
