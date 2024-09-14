import { ClientPerspective } from 'next-sanity';
import { apiVersion, dataset } from '../env';

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_KEY as string,
  perspective: 'published' as ClientPerspective,
};

export default config;
