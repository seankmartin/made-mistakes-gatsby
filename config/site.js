module.exports = {
  // pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  // TODO setup the staticman API and the urls correctly
  title: 'Sean K. Martin', // Navigation and site title
  titleAlt: 'Sean K. Martin', // Title for schema.org JSONLD
  description: 'Personal website',
  url: 'https://seankmartin.netlify.app', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  image: {
    // Used for SEO, relative to /static/ folder
    src: '/images/logo.png',
    width: 384,
    height: 384,
  },
  ogLanguage: 'en_US', // Facebook Language
  pingbackUrl: 'https://webmention.io/github.com_seankmartin/xmlrpc',
  webmentionUrl: 'https://webmention.io/github.com_seankmartin/webmention',
  micropubUrl: 'https://mm-micropub-to-github.herokuapp.com/micropub/main',
  coilUrl: '$coil.xrptipbot.com/AbwB-yidQNanSI2lYyTJJw',
  googleAnalyticsID: '',
  staticmanApi:
    'https://staticman-bot-skm.herokuapp.com/v2/entry/seankmartin/made-mistakes-gatsby/master/comments',

  // JSONLD / Manifest
  favicon: '/images/logo.png', // Used for manifest favicon generation
  shortName: 'SKM Logo', // shortname for manifest. MUST be shorter than 12 characters
  author: {
    // Author for schema.org JSONLD
    name: 'Seán Kieran Martin',
    url: 'https://seankmartin.netlify.app/',
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
    siteKey: '6LddYfwUAAAAACierywRw3fCtQI5wVqlhUNShf1Q',
    secret:
      'uV1iDhUH+4Whncasr18jhwpkKCPZM2szm+MCKf500STRhnZNcQbiikDtvuFzyaqKd9oubA6D4+6VjQHtE1vWRHxPXPjiGQFZTMbRvvPwkJvd7uoisqjn6m26VV2GRg46yzC6idGFf2pOO4gMWibUNUeg7jCFmCo5yl8gizADrSarFD7epaNNErQwptbXHBArAAUyrRrLzDt14Qk29Mlxxs/AEZBv7JjNnQmXcZ2A5KJ4T1omQlj42Z5AMOteHIBb0yzjmiA5Y+wd0Z1o/0XNknnqTGqMNHxjP5HEaR6RlF/geW4onSYlOkmXnV2keQGh5V4QTrsPSzkkOUGn9PUUou/X1H3sPXwUqFGHkN3UeWEWQctNSMcU0gD+hicx6C+BBJoy4bSfJ30jOWVyUW/BD8x6rL58Eu9VMGcnzZqgAfE9MbDouiTpxfF7AUZ+p7RBOA3ckEo06YrF3msZwZZ1rTGccaOuRKJh3RdbQ1DfaKDarY2nDLrmSAVGp8pm9aSoxNptVEvLxEPzn4TkAboBRRDkt6sSZ9O2ySKwwrMTHJA/SqD6TZnmPC+SuE5IOoyJuYQzSLjjrHJbsm5ia7QNxADhiGF/5wGliKF5ENZUVcfhd9djoMOIUxwcv4+SDPKTis/EGW1Bji1AM4/UQpvlyvBDw6IX0Blwd8wmZgooclk=',
  },
}
