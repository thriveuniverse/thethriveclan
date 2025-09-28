import { Storage } from '@google-cloud/storage';

// This will use default application credentials as long as your ENV is set correctly (e.g., GOOGLE_APPLICATION_CREDENTIALS).
const storage = new Storage();

export async function generateSignedUrl(filePath: string): Promise<string> {
  const bucketName = 'thriveclan-products-1'; // Update with your real bucket

  const [url] = await storage
    .bucket(bucketName)
    .file(filePath)
    .getSignedUrl({
      version: 'v4',
      action: 'read',
      expires: Date.now() + 24 * 60 * 60 * 1000, // 24h
    });

  return url;
}
