import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import style from '../styles/archive.module.css'

import site from '../../config/site'

const CVPage = () => {
  return (
    <Layout>
      <SEO
        title={`C.V. - ${site.title}`}
        path="/resume/"
        description="Sean K. Martin's Cirriculum Vitae."
        metaImage={site.image}
      />
      <main id="main" className={style.main}>
        <div className={style.content}>
          <html>
            <p style={{ fontSize: '1.25rem' }}>
              <em>Se&aacute;n K. Martin</em>
              <br></br>
              County Dublin, Ireland<br></br>
              <b>
                <a href="&#109;&#97;ilto&#58;%&#54;Da&#114;&#116;in&#115;7&#64;&#37;74c&#100;%2Eie">
                  martins&#55;&#64;tcd&#46;&#105;e
                </a>
              </b>
            </p>
            <p style={{ fontSize: '1.125rem' }}>
              I am a keen mathematician and computer scientist, and a PhD
              candidate in the Trinity College Institute of Neuroscience.
            </p>
          </html>
          <h2 className={style.subHeading}>
            <span>Experience</span>
          </h2>
          <div className={style.gridList}>
            <html>
              <p style={{ fontSize: '1.125rem' }}>
                <b>PhD Student</b> <em>(Sep 2020 - present)</em>
                <br></br>
                <small>TRINITY COLLEGE DUBLIN</small>
              </p>
              <p style={{ fontSize: '1rem' }}>
                PhD student position in the Department of Neuroscience to study
                neural data analysis, with a focus on inter-areal interactions
                in the brain.
              </p>
              <p style={{ fontSize: '1.125rem' }}>
                <b>Research Assistant</b> <em>(Sep 2018 - Sep 2020)</em>
                <br></br>
                <small>TRINITY COLLEGE DUBLIN</small>
              </p>
              <p style={{ fontSize: '1rem' }}>
                I performed human and animal perception and behaviour research
                with the neuroscience department and computer science
                department. This involved developing open-source data analysis
                tools, writing papers, and programming hardware for experiments.
                From this work I attended multiple global conferences, presented
                posters, published papers and chaired a session on rendering at
                the GRAPP 2019 conference.
              </p>
              <p style={{ fontSize: '1.125rem' }}>
                <b>Teaching Assistant</b> <em>(Jan 2016 - present)</em>
                <br></br>
                <small>TRINITY COLLEGE DUBLIN</small>
              </p>
              <p style={{ fontSize: '1rem' }}>
                From assisting in teaching multiple mathematics, science, and
                computer science courses I developed confidence in my work and
                improved my ability to explain topics in a clear and concise
                manner.
              </p>
              <p style={{ fontSize: '1.125rem' }}>
                <b>Analyst</b> <em>(Jun 2016 - Sep 2016)</em>
                <br></br>
                <small>DEUTSCHE BANK SERVICE CENTRE</small>
              </p>
              <p style={{ fontSize: '1rem' }}>
                My responsibilities included performing extract, transform, and
                load operations on data, creating visualisations in Python, and
                documenting Datalab processes. I handled large volumes of
                company data and learnt valuable data analysis techniques.
              </p>
              <p style={{ fontSize: '1.125rem' }}>
                <b>Shop Assistant</b> <em>(Jun 2015 - Aug 2015)</em>
                <br></br>
                <small>TEMPLE BAR TRADING COMPANY</small>
              </p>
              <p style={{ fontSize: '1rem' }}>
                I greatly improved my communication and teamworking skills by
                interacting with management and customers in this summer
                position.
              </p>
            </html>
          </div>
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
                      Bethany&nbsp;E Frost, Matheus Cafalchio,
                      <b>Se&aacute;n&nbsp;K Martin</b>, Md.&nbsp;Nurul Islam,
                      John&nbsp;P Aggleton, and Shane&nbsp;M O’Mara. Spatial
                      Coding in the Subiculum Requires Anterior Thalamic Inputs.{' '}
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
            <span>Education</span>
          </h2>
          <div className={style.gridList}>
            <html>
              <p style={{ fontSize: '1.125rem' }}>
                <b>Trinity College Dublin</b> <em>(Sep 2017 - Sep 2018)</em>
                <br></br>
                <small>MASTER OF SCIENCE - COMPUTER SCIENCE</small>
              </p>
              <p style={{ fontSize: '1rem' }}>
                First Class Honours in the Graphics and Vision Technologies
                strand.
              </p>
              <p style={{ fontSize: '1.125rem' }}>
                <b>Trinity College Dublin</b> <em>(Sep 2013 - Jun 2017)</em>
                <br></br>
                <small>BACHELOR OF ARTS (MOD.) - MATHEMATICS</small>
              </p>
              <p style={{ fontSize: '1rem' }}>First Class Honours.</p>
              <p style={{ fontSize: '1.125rem' }}>
                <b>Skerries Community College</b> <em>(Sep 2008 - Jun 2013)</em>
                <br></br>
                <small>LEAVING CERTIFICATE</small>
              </p>
              <p style={{ fontSize: '1rem' }}>
                Obtained 600 points with A1's in Maths, Applied Maths, Physics,
                and Technology, an A2 in History, and a B1 in English.
              </p>
            </html>
          </div>
          <h2 className={style.subHeading}>
            <span>Tool Profiencies</span>
          </h2>
          <div className={style.gridList}>
            <html>
              <p style={{ fontSize: '1rem' }}>
                <ul>
                  <li>Python</li>
                  <li>C++</li>
                  <li>OpenGL</li>
                  <li>Unreal Engine 4</li>
                  <li>Git</li>
                  <li>LaTeX</li>
                  <li>Bash</li>
                </ul>
              </p>
            </html>
          </div>
          <h2 className={style.subHeading}>
            <span>Awards</span>
          </h2>
          <div className={style.gridList}>
            <html>
              <p style={{ fontSize: '1rem' }}>
                <ul>
                  <li>Gold Medal - Trinity College Dublin 2017</li>
                  <li>
                    1<sup>st</sup> Llyod Exhibition - Trinity College Dublin
                    2016
                  </li>
                  <li>Hamilton prize - Royal Irish Academy 2016</li>
                  <li>Minchin prize - Trinity College Dublin 2016</li>
                  <li>
                    2<sup>nd</sup> Townsend Memorial Prize - Trinity College
                    Dublin 2014
                  </li>
                  <li>Entrance Exhibition - Trinity College Dublin 2013</li>
                </ul>
              </p>
            </html>
          </div>
          <h2 className={style.subHeading}>
            <span>Interests</span>
          </h2>
          <div className={style.gridList}>
            <html>
              <p style={{ fontSize: '1rem' }}>
                I enjoy playing video games, doing development in my free time,
                and running and playing dungeons and dragons games. I also
                dabble with the piano and like to go hiking.
              </p>
            </html>
          </div>
        </div>
      </main>
    </Layout>
  )
}

CVPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query CVQuery {
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
  }
`

export default CVPage
