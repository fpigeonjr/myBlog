[![Build Status](https://travis-ci.org/maxpou/gatsby-starter-morning-dew.svg?branch=master)](https://travis-ci.org/maxpou/gatsby-starter-morning-dew) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Maintainability](https://api.codeclimate.com/v1/badges/e09f1ac1a5cdb2987a6f/maintainability)](https://codeclimate.com/github/maxpou/gatsby-starter-morning-dew/maintainability) [![Greenkeeper badge](https://badges.greenkeeper.io/maxpou/gatsby-starter-morning-dew.svg)](https://greenkeeper.io/)


# Frank Pigeon's Blog

[My blog site](frankpigeon.com) redesigned with Gatsby starter kit [gatsby-starter-morning-dew](https://github.com/maxpou/gatsby-starter-morning-dew)!

![Imgur](https://i.imgur.com/99TL9Yq.jpg)

## Features

- [:purple_heart: Gatsby v2](https://www.gatsbyjs.org/) / React 16
- :mag: SEO optimized (robot.txt)
- :love_letter: Write posts/pages in Markdown
  - :art: Code syntax highlight
  - :books: Multilang support (blog post only)
- :iphone: Responsive design
- :sparkles: PWA ready
  - :airplane: Offline support
  - :page_with_curl: Manifest support
- [:wrench: Fully configurable (see data/siteConfig.js)](./data/siteConfig.js)
- :speech_balloon: Disqus support
- :nail_care: css-in-js (with [styled-components v4](https://www.styled-components.com))
- :bookmark: Groups post with tags
- :bar_chart: Google Analytics support
- :bird: post preview image generation (Twitter, Facebook)
- :gem: Developer tools:
  - eslint
  - prettier
- :construction_worker: Travis CI support


![Lighthouse scores (locally :bowtie:)](https://lighthouse.now.sh/?perf=97&pwa=96&a11y=92&bp=100&seo=100)


## Installation

* with Gatsby-cli: `gatsby new gatsby-blog https://github.com/maxpou/gatsby-starter-morning-dew`

* without Gatsby-cli

  ```sh
  git clone my-site git@github.com:maxpou/gatsby-starter-morning-dew.git
  cd my-site
  yarn install
  ```

## Commands

```sh
# working locally
yarn dev

# generate build
yarn build

# format code
yarn format

# lint code
yarn lint

# Generate generate post preview images (yarn dev need to run before)
yarn generatePostPreviewImages

# deploy to gh-pages
yarn deploy

```

**:warning: Add `--prefix-paths` if you are using path prefix!**

## Configure

```js
module.exports = {
  siteTitle: 'frankpigeon.com',
  siteDescription: "Frank Pigeon's Blog",
  authorName: 'Frank Pigeon Jr.',
  twitterUsername: 'fpigeonjr',
  authorAvatar: '/images/profile.jpg',
  multilangPosts: false, // enable/disable flags in post lists
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

```