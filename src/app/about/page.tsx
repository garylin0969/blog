import type { Metadata } from 'next';
import AboutPage from '@/components/pages/about-page';
import aboutMetadataConfig from '@/configs/metadatas/about-metadata.config';

export const metadata = aboutMetadataConfig as Metadata;

export default AboutPage;
