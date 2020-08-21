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
              A selection of projects I have developed and research I have performed.
            </p>
          </div>
          {/* <h2 className={style.subHeading}>
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
          </div> */}
          <h2 className={style.subHeading}>
            <span>Research</span>
          </h2>
          <div className={style.gridList}>
            <html>
              <table>

                <tr valign="top">
                  <td align="right">[3]</td>
                  <td class="bibtexitem">
                    Bethany&nbsp;E Frost, Matheus Cafalchio, Se&aacute;n&nbsp;K Martin, Md.&nbsp;Nurul Islam, John&nbsp;P Aggleton, and Shane&nbsp;M O’Mara. Spatial Coding in the Subiculum Requires Anterior Thalamic Inputs. <em>Preprint on bioRxiv</em> 2020. [&nbsp;
                    <a href="../research/bib/#spatial-coding-in-the-subiculum-requires-anterior-thalamic-inputs">
                      bib
                    </a>
                    &nbsp;]
                  </td>
                </tr>

                <tr valign="top">
                  <td align="right">[3]</td>
                  <td class="bibtexitem">
                    Se&aacute;n&nbsp;K Martin, Se&aacute;n Bruton, David Ganter, Michael Manzke. Synthesising Light Field Volume Visualisations Using Image Warping in Real-Time. In <em>Computer Vision, Imaging and Computer Graphics Theory and Applications</em> 2020. [&nbsp;
                    <a href="../research/bib/#synthesising-light-field-volume-visualisations-using-image-warping-in-real-time">
                      bib
                    </a>
                    &nbsp;]
                  </td>
                </tr>

                <tr valign="top">
                  <td align="right">[3]</td>
                  <td class="bibtexitem">
                    Md&nbsp;Nurul Islam, Se&aacute;n&nbsp;K Martin, John&nbsp;P
                    Aggleton, and Shane&nbsp;M O’Mara. Neurochat: A toolbox to
                    analyse the dynamics of neuronal encoding in freely-behaving
                    rodents in vivo. In <em>Wellcome Open Research</em>,
                    4(196):196, 2019. [&nbsp;
                    <a href="../research/bib/#neurochat-a-toolbox-to-analyse-the-dynamics-of-neuronal-encoding-in-freely-behaving-rodents-in-vivo">
                      bib
                    </a>
                    &nbsp;]
                  </td>
                </tr>

                <tr valign="top">
                  <td align="right">[1]</td>
                  <td class="bibtexitem">
                    Katja Zibrek, Sean Martin, and Rachel McDonnell. Is
                    photorealism important for perception of expressive virtual
                    humans in virtual reality? In{' '}
                    <em>ACM Transactions on Applied Perception (TAP)</em> 2019. [&nbsp;
                    <a href="../research/bib/#is-photorealism-important-for-perception-of-expressive-virtual-humans-in-virtual-reality">
                      bib
                    </a>, <a href="https://figshare.com/articles/poster/The_Effect_of_Anterior_Thalamus_Lesions_on_Bursting_in_The_Subiculum/11568105">poster</a>
                    &nbsp;]
                  </td>
                </tr>

                <tr valign="top">
                  <td align="right">[2]</td>
                  <td class="bibtexitem">
                    Se&aacute;n Martin, Se&aacute;n Bruton, David Ganter, and
                    Michael Manzke. Using a depth heuristic for light field
                    volume rendering. In{' '}
                    <em>
                      14th International Conference on Computer Graphics Theory
                      and Applications
                    </em> [&nbsp;
                    <a href="../research/bib/#using-a-depth-heuristic-for-light-field-volume-rendering">
                      bib
                    </a>, paper
                    &nbsp;]
                  </td>
                </tr>

                <tr valign="top">
                  <td align="right">[4]</td>
                  <td class="bibtexitem">
                    Se&aacute;n&nbsp;K Martin, Bethany&nbsp;E Frost, John&nbsp;P
                    Aggleton, and Shane&nbsp;M O’Mara. The Effect of Anterior Thalamic Lesions on Bursting in the Subiculum. In <em>Bernstein Computational Neuroscience Conference</em> 2019. [&nbsp;
                    <a href="../research/bib/#the-effect-of-anterior-thalamus-lesions-on-bursting-in-the-subiculum">
                      bib
                    </a>, <a href="https://figshare.com/articles/poster/The_Effect_of_Anterior_Thalamus_Lesions_on_Bursting_in_The_Subiculum/11568105">poster</a>
                    &nbsp;]
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
              <a href="https://github.com/seankmartin" className="btn">
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
