import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <head>
        <title className={utilStyles.heading2XL}>Hannah Manfredi</title>
      </head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Hannah. I'm a Software Engineer, Voice Interaction Designer and Farmer, and I love going down rabbit holes! You can contact me on <a href="https://twitter.com/HannahManfredi">Twitter.</a></p>
        <p><h3><strong>TECHNICAL SKILLS</strong></h3>
          <ul>
            <li><em><b>Front End</b></em>: JavaScript, React.js, Next.js, Gatsby, Ghost, HTML5, CSS3, jQuery</li>
          </ul>
          <ul>
            <li><em><b>Back End</b></em>: Node.js, Express, NPM, Sequelize, Neo4j, MySQL, PostgreSQL, MongoDb, CouchDb, Axios</li>
          </ul>
          <ul>
            <li><em><b>Tools</b></em>: New Relic, Redis, K6, Loader io, Gulp, TravisCI, GitKraken, pgAdmin, Trello,notion, NGINX, Webpack, Babel, Postman, Loader.io, Github</li>
          </ul>
          <ul>
            <li><em><b>Testing</b></em>: Mocha, Chai, Jest, supertest </li>
          </ul>
          <ul>
            <li><em><b>Deployment</b></em>: Docker, AWS: EC2, s3</li>
          </ul>
        </p>
        <p>
          <h3><strong>SOFTWARE APPLICATIONS:</strong></h3>
            <ul>
              <li><a href="https://github.com/ArrrrWeBeAnneBonny/booking.git">AnneBonny</a></li>
              <li><a href="https://github.com/SDCmailto/SDC-CustomerReviews.git">mailto</a></li>
            </ul>
          <h3><strong>PROJECTS:</strong></h3>
          <ul>
            <li><a href="https://github.com/HannahManfredi/mouth.git">mouth</a></li>
            <li><a>faulkenstein</a></li>
            <li><a href="https://www.rabbitrabbitplantnursery.com">Rabbit Rabbit Plant Nursery</a></li>
          </ul>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h3><strong>BLOG</strong></h3>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
      <h2>
        <Link href="/resume">
          <a>RESUME</a>
        </Link>
      </h2>
    </Layout>
  )
}