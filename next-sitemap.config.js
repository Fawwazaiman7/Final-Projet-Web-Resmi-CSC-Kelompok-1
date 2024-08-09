/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://final-projet-web-resmi-csc-kelompok-1.vercel.app',
    generateRobotsTxt: true, // (optional)
    // optional
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/' }],
    },
  }
  
  module.exports = config;
  