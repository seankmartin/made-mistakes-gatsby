import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Octicon, { MarkGithub } from '@githubprimer/octicons-react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Entry from '../components/entry'
import Repository from '../components/repository'

import style from '../styles/archive.module.css'

import site from '../../config/site'

const WorksPage = ({ data }) => {
  const {
    site: {
      siteMetadata: { author: siteAuthor },
    },
    allMarkdownRemark: { edges: posts },
    githubData: { data: github },
  } = data
  return (
    <Layout>
      <SEO
        title={`Works - ${site.title}`}
        path="/work/"
        description="A selection of things I've designed, illustrated, and developed."
        metaImage={site.image}
      />
      <main id="main" className={style.main}>
        <div className={style.title}>
          <h1 className={style.heading}>
            <span>Works</span>
          </h1>
        </div>
        <div className={style.content}>
          <div className={style.intro}>
            <p>
              A selection of things I&rsquo;ve designed, illustrated, and
              developed.
            </p>
          </div>
          <h2 className={style.subHeading}>
            <span>Featured work</span>
          </h2>
          <div className={style.gridList}>
            {posts.map(({ node }) => {
              const {
                id,
                excerpt: autoExcerpt,
                frontmatter: { title, path, author, image, excerpt },
              } = node

              return (
                <Entry
                  key={id}
                  title={title}
                  path={path}
                  author={author || siteAuthor}
                  image={image}
                  excerpt={excerpt || autoExcerpt}
                />
              )
            })}
          </div>
          <h2 className={style.subHeading}>
            <span>Research</span>
          </h2>
          <div className={style.gridList}>
            <html>
              <table>
                <tr valign="top">
                  <td align="right" class="bibtexnumber">
                    [<a name="zibrek2019photorealism">1</a>]
                  </td>
                  <td class="bibtexitem">
                    Katja Zibrek, Sean Martin, and Rachel McDonnell. Is
                    photorealism important for perception of expressive virtual
                    humans in virtual reality?
                    <em>ACM Transactions on Applied Perception (TAP)</em>,
                    16(3):1-19, 2019. [&nbsp;
                    <a href="skm_bib.html#zibrek2019photorealism">bib</a>&nbsp;]
                  </td>
                </tr>

                <tr valign="top">
                  <td align="right" class="bibtexnumber">
                    [<a name="martin2019using">2</a>]
                  </td>
                  <td class="bibtexitem">
                    Se&aacute;n Martin, Se&aacute;n Bruton, David Ganter, and
                    Michael Manzke. Using a depth heuristic for light field
                    volume rendering. In{' '}
                    <em>
                      14th International Conference on Computer Graphics Theory
                      and Applications
                    </em>
                    , pages 134-144, 2019. [&nbsp;
                    <a href="skm_bib.html#martin2019using">bib</a>&nbsp;]
                  </td>
                </tr>

                <tr valign="top">
                  <td align="right" class="bibtexnumber">
                    [<a name="islam2019neurochat">3</a>]
                  </td>
                  <td class="bibtexitem">
                    Md&nbsp;Nurul Islam, Se&aacute;n&nbsp;K Martin, John&nbsp;P
                    Aggleton, and Shane&nbsp;M O’Mara. Neurochat: A toolbox to
                    analyse the dynamics of neuronal encoding in freely-behaving
                    rodents in vivo.
                    <em>Wellcome Open Research</em>, 4(196):196, 2019. [&nbsp;
                    <a href="skm_bib.html#islam2019neurochat">bib</a>&nbsp;]
                  </td>
                </tr>
              </table>
            </html>
          </div>
          <h2 className={style.subHeading}>
            <span>
              <Octicon
                icon={MarkGithub}
                verticalAlgin="middle"
                className={style.icon}
              />{' '}
              Open source contributions
            </span>
          </h2>
          {github && (
            <div>
              {github.viewer.repositories.nodes
                .map((repo) => <Repository key={repo.name} repo={repo} />)
                .reverse()}
              <a href="https://github.com/mmistakes" className="btn">
                See more on GitHub
              </a>
            </div>
          )}
        </div>
      </main>
    </Layout>
  )
}

WorksPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query WorksQuery {
    site {
      siteMetadata {
        author {
          name
          url
        }
      }
    }
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        fields: { sourceName: { ne: "comments" } }
        frontmatter: { categories: { in: "work" }, published: { ne: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(format: HTML)
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            author
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
    githubData {
      data {
        viewer {
          repositories {
            nodes {
              name
              description
              homepageUrl
              resourcePath
              updatedAt(formatString: "YYYY-MM-DD")
              languages {
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
      }
    }
  }
`

export default WorksPage
