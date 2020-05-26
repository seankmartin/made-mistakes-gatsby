import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Entry from '../components/entry'

import style from '../styles/archive.module.css'

import site from '../../config/site'

const HomePage = ({ data }) => {
  const {
    site: {
      siteMetadata: { author: siteAuthor },
    },
    featuredPosts: { edges: featuredPosts },
    recentPosts: { edges: recentPosts },
  } = data
  return (
    <Layout>
      <SEO
        title={`${site.title} - ${site.description}`}
        path="/"
        description={site.description}
        metaImage={site.image}
      />
      <main id="main" className={style.main}>
        <div className={style.title}>
          <h1 className={style.heading}>
            <span>
              This is the personal site of{' '}
              <a href="/about/">Se&aacute;n&nbsp;Martin</a>.
            </span>
          </h1>
          <div className={style.intro}>
            <p>
              I'm a boring mathematician and computer scientist, and am currently a PhD student in Trinity College's Institute of Neuroscience. I enjoy fumbling through video games, roleplaying in dungeons and dragons, attempting piano, and messing about with all kinds of code - I mostly blog about the latter.
            </p>
            <p>
              This site is built with Gatsby and made possible by the GitHub source code very kindly shared by Michael Rose, go check out his website <a href="https://mademistakes.com">Made Mistakes</a>.
            </p>
          </div>
          <Img
            fluid={data.aboutImage.childImageSharp.fluid}
            className={style.cover}
            backgroundColor="var(--input-background-color)"
          />
        </div>
        <div className={style.content}>
          <h2 className={style.subHeading}>
            <span>Recent posts</span>
          </h2>
          <div className={style.list}>
            {recentPosts.map(({ node }) => {
              const {
                id,
                excerpt: autoExcerpt,
                timeToRead,
                frontmatter: { title, date, date_pretty, path, excerpt },
              } = node

              return (
                <Entry
                  key={id}
                  title={title}
                  date={date}
                  datePretty={date_pretty}
                  path={path}
                  timeToRead={timeToRead}
                  excerpt={excerpt || autoExcerpt}
                />
              )
            })}
          </div>
          <h2 className={style.subHeading}>
            <span>Featured articles</span>
          </h2>
          <div className={style.gridList}>
            {featuredPosts.map(({ node }) => {
              const {
                id,
                excerpt: autoExcerpt,
                timeToRead,
                frontmatter: {
                  title,
                  date,
                  date_pretty,
                  path,
                  author,
                  excerpt,
                  image,
                },
              } = node

              return (
                <Entry
                  key={id}
                  title={title}
                  date={date}
                  datePretty={date_pretty}
                  path={path}
                  author={author || siteAuthor}
                  timeToRead={timeToRead}
                  image={image}
                  excerpt={excerpt || autoExcerpt}
                />
              )
            })}
          </div>
          <h2 className={style.subHeading}>
            <span>Explore more on this site</span>
          </h2>
          <div>
            <ul className={`${style.gridListExpanded} ${style.navList}`}>
              <li key="articles">
                <Entry
                  key="articles-home-link"
                  title="Articles"
                  path="/articles/"
                  excerpt="<p>Long form writing mostly about design and web development.</p>"
                />
              </li>
              <li key="notes">
                <Entry
                  key="notes-home-link"
                  title="Notes"
                  path="/notes/"
                  excerpt="<p>Thoughts, inspiration, mistakes, and other minutia you&rsquo;d find in a blog.</p>"
                />
              </li>
              <li key="works">
                <Entry
                  key="works-home-link"
                  title="Works"
                  path="/work/"
                  excerpt="<p>Hand-picked selection of things I've designed, illustrated,
                  and developed.</p>"
                />
              </li>
              <li key="contact">
                <Entry
                  key="contact-home-link"
                  title="Contact"
                  path="/contact/"
                  excerpt="<p>Preferred methods of sending questions, messages, and
                  love letters to me.</p>"
                />
              </li>
              <li key="faqs">
                <Entry
                  key="faqs-home-link"
                  title="Frequently asked questions"
                  path="/faqs/"
                  excerpt="<p>There&rsquo;s no such thing as a dumb question&hellip;</p>"
                />
              </li>
              <li key="topics">
                <Entry
                  key="topics-home-link"
                  title="All topics"
                  path="/tag/"
                  excerpt="<p>Archive of all posts organized by topic.</p>"
                />
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        author {
          name
          url
        }
      }
    }
    featuredPosts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        fields: { sourceName: { ne: "comments" } }
        frontmatter: {
          featured: { eq: true }
          published: { ne: false }
          output: { ne: false }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt(format: HTML)
          timeToRead
          frontmatter {
            title
            date
            date_pretty: date(formatString: "MMMM Do, YYYY")
            path
            excerpt
            featured
            categories
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 75) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
    recentPosts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        fields: { sourceName: { ne: "comments" } }
        frontmatter: {
          featured: { ne: true }
          published: { ne: false }
          output: { ne: false }
          categories: { nin: "work" }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt(format: HTML)
          timeToRead
          frontmatter {
            title
            date
            date_pretty: date(formatString: "MMMM Do, YYYY")
            path
            excerpt
          }
        }
      }
    }
    aboutImage: file(relativePath: { eq: "profile_small.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 720, maxHeight: 480, quality: 75) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default HomePage
