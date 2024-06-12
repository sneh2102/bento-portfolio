/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'ucarecdn.com','github-readme-streak-stats.herokuapp.com', // For GitHub Streak Stats
      'github-readme-stats.vercel.app',            // For GitHub Stats
      'ghchart.rshah.org', // For GitHub Chart
      'avatars.githubusercontent.com', // For GitHub Avatars
    ],
  },
};

module.exports = withNextIntl(nextConfig);