module.exports = {
  // pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  // TODO setup the staticman API and the urls correctly
  title: 'Sean K. Martin', // Navigation and site title
  titleAlt: 'Sean K. Martin', // Title for schema.org JSONLD
  description: 'Personal website',
  url: 'https://mademistakes.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  image: {
    // Used for SEO, relative to /static/ folder
    src: '/images/logo.png',
    width: 384,
    height: 384,
  },
  ogLanguage: 'en_US', // Facebook Language
  pingbackUrl: 'https://webmention.io/mademistakes.com/xmlrpc',
  webmentionUrl: 'https://webmention.io/mademistakes.com/webmention',
  micropubUrl: 'https://mm-micropub-to-github.herokuapp.com/micropub/main',
  coilUrl: '$coil.xrptipbot.com/AbwB-yidQNanSI2lYyTJJw',
  googleAnalyticsID: '',
  staticmanApi:
    'https://staticman-bot-skm.herokuapp.com/v3/entry/seankmartin/made-mistakes-gatsby/master/comments',

  // JSONLD / Manifest
  favicon: '/images/logo.png', // Used for manifest favicon generation
  shortName: 'SKM Logo', // shortname for manifest. MUST be shorter than 12 characters
  author: {
    // Author for schema.org JSONLD
    name: 'Seán Kieran Martin',
    url: 'https://mademistakes.com',
  },
  themeColor: '#ffffff',
  backgroundColor: '#111111',

  twitter: '@SeanKieranM', // Twitter username
  twitterUrl: 'https://twitter.com/seankieranm',
  facebook: 'Sean Martin', // Facebook site name
  githubUrl: 'https://github.com/seankmartin',
  instagramUrl: 'https://www.instagram.com/i_bench_cows/',
  feedUrl: '/atom.xml',
  githubApiToken: process.env.GITHUB_API_TOKEN,
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 4,
  },
  reCaptcha: {
    siteKey: '6LdZX_wUAAAAAP4HsmpzQJgwQbAyZFmAkeXn_FJ8',
    secret:
      'C98nn9QV8RXDsmvkkC81gaVvZn4W4Zd21wO6p4DvylYItoVj9ddbsAl3yD0/IP0PwOBNx1/zKSwgQvATE58i/7thBH+mVi634Xrr3toVy+NPpYGLDnwQJ3GRpB8Vqn21oE40URx2LAOGpVq1+B+1cVa26+KWC5Nf+r12gss7NGzhYwMG9NbqWSt8QJmP0H5pm3s8vGPvs9ttxuTmLW47U+5Z9teXFkKWa3y5wpA4spUU8V1TpQnOhjhheev9H5fNxtJ3FAKIicNC0EPCa/lkQ50ZOuBfUMybQ5Gid701Btrrvtnxj2wP0bo7gatVxNaIz3JaTBxWHWp/fEd0FYWr1EtTzujbuxzPKOCeWUBEso1+8tG7GJQG3dRfusrd4jcAyqTiXJC1geJLptUGLeKF7hYKPaldMKDPNoJgy1obHvRwgT11c4WrqZDihRTbI9zO3WzPZsCWCkXgf1sOfZU6gkG+Z8DbgI9CxrwPFEZSa48Q4/LJYTWTwE2/L88tt0FKH2KbL1fJ2QabXySRiFIyRHMiu+Qal98FCAE4i/idiFA+wMgH9yKYWgeKZxe/5tE2yZvSc1w4X8p9zZY9LLUzfJwcuBbF1R8pZ3A786qKP5Q3rxtrqLkrioQIwUTMTqrekyrACN2OzCXH7nkIUdjvy3tERG7WQvgEojwqeMMZGpQ=',
  },
}
