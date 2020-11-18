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
              <em>Sean K. Martin</em>
              <br></br>
              County Dublin, Ireland<br></br>
              <b>
                <a href="&#109;&#97;ilto&#58;%&#54;Da&#114;&#116;in&#115;7&#64;&#37;74c&#100;%2Eie">
                  martins&#55;&#64;tcd&#46;&#105;e
                </a>
              </b>
            </p>
            <p style={{ fontSize: '1.125rem' }}>
              I am a keen mathematician and computer scientist, currently a
              research assistant in Trinity College Institute of Neuroscience
              and a PhD candidate.
            </p>
          </html>
          <h2 className={style.subHeading}>
            <span>Experience</span>
          </h2>
          <div className={style.gridList}>
            <html>
              <p style={{ fontSize: '1.125rem' }}>
                <b>Research Assistant</b> <em>(Sep 2018 - present)</em>
                <br></br>
                <small>TRINITY COLLEGE DUBLIN</small>
              </p>
              <p style={{ fontSize: '1rem' }}>
                Working with the neuroscience department, bringing my maths and
                computing skills to the team. This involves myriad
                responsibilities, including developing data analysis tools,
                creating a python application with a GUI for the analysis, and
                programming microcontrollers for experiments.<br></br>I have
                also developed an experiment in Unreal Engine 4 for the Science
                Gallery Dublin to investigate the relationship between humans
                and digital humans in a virtual reality setting. In addition, I
                have presented a paper on deep learning at the GRAPP 2019
                conference, and I chaired a session on rendering at the
                conference.
              </p>
              <p style={{ fontSize: '1.125rem' }}>
                <b>Teaching Assistant</b> <em>(Jan 2016 - present)</em>
                <br></br>
                <small>TRINITY COLLEGE DUBLIN</small>
              </p>
              <p style={{ fontSize: '1rem' }}>
                During my mathematics degree, I corrected assignments in a
                Fields, Rings, and Modules course and a Linear Algebra course. I
                also demonstrated for Real Time Animation after my master’s
                degree. The experience has helped me to develop confidence in my
                work and improved my ability to explain topics in a clear and
                concise manner.
              </p>
              <p style={{ fontSize: '1.125rem' }}>
                <b>Analyst</b> <em>(Jun 2015 - Sep 2016)</em>
                <br></br>
                <small>DEUTSCHE BANK SERVICE CENTRE</small>
              </p>
              <p style={{ fontSize: '1rem' }}>
                Summer internship at the DataLab in Dublin. I was handling large
                volumes of company data, and learnt multiple techniques for data
                loading, cleaning, and analysis. My duties included performing
                extract, transform, and load operations on data, creating
                visualisations with Python, and documenting Datalab processes.
              </p>
              <p style={{ fontSize: '1.125rem' }}>
                <b>Shop Assistant</b> <em>(Jun 2015 - Aug 2015)</em>
                <br></br>
                <small>TEMPLE BAR TRADING COMPANY</small>
              </p>
              <p style={{ fontSize: '1rem' }}>
                Improved my communication skills by interacting with management
                and customers during this summer position.
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
            <span>Skills</span>
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
                and running and playing dungeons and dragons games. I also dabble with the piano and like to go hiking.
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
