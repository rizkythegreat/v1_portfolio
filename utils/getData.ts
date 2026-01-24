import { promises as fs } from 'fs';
import path from 'path';

export interface SocialMedia {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export const getSocialMediaData = async (): Promise<SocialMedia[]> => {
  try {
    const filePath = path.join(process.cwd(), 'data', 'socialmedia.json');
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContents);
    return data.sort((a: SocialMedia, b: SocialMedia) => b.id - a.id);
  } catch (error) {
    console.error('Gagal mengambil data sosial media:', error);
    return [];
  }
};
