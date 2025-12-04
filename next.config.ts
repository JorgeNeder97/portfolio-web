import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
    /* config options here */
    eslint: {
        ignoreDuringBuilds: true,
    },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl();
