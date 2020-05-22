import 'lazysizes'

require('./src/styles/global.css')
require('./src/styles/typeface-inter.css')
require('typeface-dm-serif-display')
require('./src/styles/prism.css')
require("prismjs/plugins/command-line/prism-command-line.css")

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
  }
}
