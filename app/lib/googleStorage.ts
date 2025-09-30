// app/lib/googleStorage.ts
import { Storage } from '@google-cloud/storage';

// Auto-uses GOOGLE_APPLICATION_CREDENTIALS JSON
const storage = new Storage();

export async function generateSignedUrl(filePath: string): Promise<string> {
  const bucketName = 'thriveclan-products-1'; // Your bucket

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