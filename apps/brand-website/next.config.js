/** @type {import('next').NextConfig} */
const cmsUrl = new URL(process.env.NEXT_PUBLIC_CMS_URL || process.env.CMS_URL || 'https://cms.olivetreehub.com');

const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: cmsUrl.protocol.replace(':', ''),
                hostname: cmsUrl.hostname,
                port: cmsUrl.port,
            },
        ],
    }
}

module.exports = nextConfig
