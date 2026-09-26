import { DlpServiceClient } from '@google-cloud/dlp';

const dlp = new DlpServiceClient();
const projectId = process.env.GCP_PROJECT_ID!;

export async function redactSensitiveInfo(text: string): Promise<string> {
  const request = {
    parent: `projects/${projectId}/locations/global`,
    item: { value: text },
    deidentifyConfig: {
      infoTypeTransformations: {
        transformations: [
          {
            primitiveTransformation: { replaceWithInfoTypeConfig: {} }
          }
        ]
      }
    },
    inspectConfig: {
      infoTypes: [
        { name: 'EMAIL_ADDRESS' },
        { name: 'PHONE_NUMBER' },
        { name: 'US_SOCIAL_SECURITY_NUMBER' },
        { name: 'CREDIT_CARD_NUMBER' },
        { name: 'PERSON_NAME' }
      ],
      minLikelihood: 'LIKELY' as const,
    },
  };

  try {
    const [response] = await dlp.deidentifyContent(request);
    return response.item?.value || text;
  } catch (error) {
    console.error("DLP Redaction Failed, blocking text for security.", error);
    throw new Error("Security check failed. Document processing halted.");
  }
}
