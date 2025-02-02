import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2025-01-15',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN  || 'skKNP2Y7VCiVvj7BKpYgg7XslkMdS137Fhbl9RrQWVpnwLFu4eHDRd2165C8viu6qnGdTRT2624L850ht9web85uwfa06o0qrcfcdYdct372Wv1yQc1XZ4VMbPNIRRrmtwW1W54hj06lwDXxCcnzxqdo4KVXtGtopnEPOhl9bsycJW1BcRt3',
    ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);