import type { GatsbyConfig } from 'gatsby';

const siteMetadata = {
  title: 'Salesflow Coach',
  description: `Built by Martin Stellar`,
  siteUrl: `https://salesflowcoach.app`,
};

const config = {
  siteMetadata,
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-theme-portfolio-minimal',
      options: {
        siteUrl: siteMetadata.siteUrl, // Used for sitemap generation
        manifestSettings: {
          favicon: './content/images/favicon.png', // Path is relative to the root
          siteName: 'My Minimal Portfolio', // Used in manifest.json
          shortName: 'Portfolio', // Used in manifest.json
          startUrl: '/', // Used in manifest.json
          backgroundColor: '#FFFFFF', // Used in manifest.json
          themeColor: '#000000', // Used in manifest.json
          display: 'minimal-ui', // Used in manifest.json
        },
        contentDirectory: './content',
        blogSettings: {
          path: '/blog', // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
      },
    },
  ],
} satisfies GatsbyConfig;

export default config;
