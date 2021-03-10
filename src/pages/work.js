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
              A selection of projects I have developed and research I have
              performed.
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
              <p style={{ fontSize: '1.125rem' }}>
                <table>
                  <tr valign="top">
                    <td align="right">[1]</td>
                    <td class="bibtexitem">
                      <b>Se&aacute;n&nbsp;K Martin</b>,
                      John&nbsp;P Aggleton, and Shane&nbsp;M O’Mara. Can we conjointly record direct interactions between neurons in vivo in anatomically-connected brain areas? Probabilistic analyses and further implications.{' '}
                      <em>Preprint on bioRxiv</em>, 2020. [&nbsp;
                      <a href="../research/bib/#can-we-conjointly-record-direct-interactions-between-neurons-in-vivo-in-anatomically-connected-brain-areas-probabilistic-analyses-and-further-implications">
                        bib
                      </a>{' '}
                      | <a href="../papers/ConjointRecordings.pdf">pdf</a> |{' '}
                      <a href="https://doi.org/10.1101/2020.12.07.415125">
                        doi
                      </a>
                      &nbsp;]
                    </td>
                  </tr>

                  <tr valign="top">
                    <td align="right">[2]</td>
                    <td class="bibtexitem">
                      Bethany&nbsp;E Frost, Matheus Cafalchio,
                      <b>Se&aacute;n&nbsp;K Martin</b>, Md.&nbsp;Nurul Islam,
                      John&nbsp;P Aggleton, and Shane&nbsp;M O’Mara. Spatial
                      Coding in the Subiculum Requires Anterior Thalamic Inputs.{' '}
                      <em>Preprint on bioRxiv</em>, 2020. [&nbsp;
                      <a href="../research/bib/#spatial-coding-in-the-subiculum-requires-anterior-thalamic-inputs">
                        bib
                      </a>{' '}
                      | <a href="../papers/SpatialCodingInSub.pdf">pdf</a> |{' '}
                      <a href="https://doi.org/10.1101/2020.01.31.928762">
                        doi
                      </a>
                      &nbsp;]
                    </td>
                  </tr>

                  <tr valign="top">
                    <td align="right">[3]</td>
                    <td class="bibtexitem">
                      Md&nbsp;Nurul Islam, <b>Se&aacute;n&nbsp;K Martin</b>,
                      John&nbsp;P Aggleton, and Shane&nbsp;M O’Mara. Neurochat:
                      A toolbox to analyse the dynamics of neuronal encoding in
                      freely-behaving rodents in vivo. In{' '}
                      <em>Wellcome Open Research</em>, 2019. [&nbsp;
                      <a href="../research/bib/#neurochat-a-toolbox-to-analyse-the-dynamics-of-neuronal-encoding-in-freely-behaving-rodents-in-vivo">
                        bib
                      </a>{' '}
                      | <a href="../papers/NeuroChaT.pdf">pdf</a> |{' '}
                      <a href="https://doi.org/10.12688/wellcomeopenres.15533.1">
                        doi
                      </a>
                      &nbsp;]
                    </td>
                  </tr>

                  <tr valign="top">
                    <td align="right">[4]</td>
                    <td class="bibtexitem">
                      <b>Se&aacute;n&nbsp;K Martin</b>, Se&aacute;n Bruton,
                      David Ganter, Michael Manzke. Synthesising Light Field
                      Volume Visualisations Using Image Warping in Real-Time. In{' '}
                      <em>
                        Computer Vision, Imaging and Computer Graphics Theory
                        and Applications
                      </em>
                      , 2020. [&nbsp;
                      <a href="../research/bib/#synthesising-light-field-volume-visualisations-using-image-warping-in-real-time">
                        bib
                      </a>{' '}
                      | <a href="../papers/SynthesisingLightFields.pdf">pdf</a>{' '}
                      |{' '}
                      <a href="https://doi.org/10.1007/978-3-030-41590-7_2">
                        doi
                      </a>
                      &nbsp;]
                    </td>
                  </tr>

                  <tr valign="top">
                    <td align="right">[5]</td>
                    <td class="bibtexitem">
                      Katja Zibrek, <b>Sean Martin</b>, and Rachel McDonnell. Is
                      photorealism important for perception of expressive
                      virtual humans in virtual reality? In{' '}
                      <em>ACM Transactions on Applied Perception (TAP)</em>,
                      2019. [&nbsp;
                      <a href="../research/bib/#is-photorealism-important-for-perception-of-expressive-virtual-humans-in-virtual-reality">
                        bib
                      </a>{' '}
                      | <a href="../papers/Photorealism.pdf">pdf</a> |{' '}
                      <a href="https://doi.org/10.1145/3349609">doi</a>
                      &nbsp;]
                    </td>
                  </tr>

                  <tr valign="top">
                    <td align="right">[6]</td>
                    <td class="bibtexitem">
                      <b>Se&aacute;n Martin</b>, Se&aacute;n Bruton, David
                      Ganter, and Michael Manzke. Using a depth heuristic for
                      light field volume rendering. In{' '}
                      <em>
                        14th International Conference on Computer Graphics
                        Theory and Applications
                      </em>
                      , 2019. [&nbsp;
                      <a href="../research/bib/#using-a-depth-heuristic-for-light-field-volume-rendering">
                        bib
                      </a>{' '}
                      | <a href="../papers/LFRendering.pdf">pdf</a> |{' '}
                      <a href="https://doi.org/10.5220/0007574501340144">doi</a>
                      &nbsp;]
                    </td>
                  </tr>

                  <tr valign="top">
                    <td align="right">[7]</td>
                    <td class="bibtexitem">
                      <b>Se&aacute;n&nbsp;K Martin</b>, Bethany&nbsp;E Frost,
                      John&nbsp;P Aggleton, and Shane&nbsp;M O’Mara. The Effect
                      of Anterior Thalamic Lesions on Bursting in the Subiculum.
                      In{' '}
                      <em>Bernstein Computational Neuroscience Conference</em>,
                      2019. [&nbsp;
                      <a href="../research/bib/#the-effect-of-anterior-thalamus-lesions-on-bursting-in-the-subiculum">
                        bib
                      </a>{' '}
                      | <a href="../papers/BernsteinPoster.pdf">pdf</a> |{' '}
                      <a href="http://doi.org/10.12751/nncn.bc2019.0204">doi</a>
                      &nbsp;]
                    </td>
                  </tr>
                </table>
              </p>
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
