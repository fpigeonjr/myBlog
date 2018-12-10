module.exports = {
  siteTitle: 'frankpigeon.com',
  siteDescription: "Frank Pigeon's Blog",
  authorName: 'Frank Pigeon Jr.',
  twitterUsername: 'fpigeonjr',
  authorAvatar: '/images/profile.jpg',
  multilangPosts: true, // enable/disable flags in post lists
  authorDescription: `
  Frank is a 👨‍💻web developer, 🇺🇸US Army veteran, 🎸bass player, father, husband, artisan, owner.
  `,
  siteUrl: 'https://frankpigeon.com',
  disqusSiteUrl: 'https://frankpigeon.com',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: '/images/bg-home.jpg',
  googleAnalyticsId: 'UA-53325305-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  postsPerPage: 6,
  disqusShortname: 'frankpigeon-com',
  headerLinks: [
    {
      label: '🏡',
      url: '/',
    },
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    },
    {
      label: 'Resume',
      url: '/resume',
    },
    {
      label: 'Uses',
      url: '/uses',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    [
      'Explore',
      {
        label: 'Blog',
        url: '/',
      },
      {
        label: 'About',
        url: '/about',
      },

      {
        label: 'Portfolio',
        url: '/portfolio',
      },
      {
        label: 'Resume',
        url: '/resume',
      },
      {
        label: 'Uses',
        url: '/uses',
      }
    ],
    [
      'Follow the author',
      {
        label: 'Github',
        url: 'https://github.com/fpigeonjr',
        iconClassName: 'fa fa-github',
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/fpigeonjr',
        iconClassName: 'fa fa-twitter',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/fpigeonjr/',
        iconClassName: 'fa fa-linkedin-in',
      },
    ],
  ],
}
