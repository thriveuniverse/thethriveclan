// app/lib/googleStorage.ts
import { Storage } from '@google-cloud/storage';

// Parse JSON from env var (no file path needed)
const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS || '{}');

const storage = new Storage({ credentials });

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
console.log('*** DEBUG: Signed URL generated:', url, '***'); // Add this
  return url;
}