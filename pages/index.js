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
        <p><h3><strong>SKILLS</strong></h3>
          <ul>
            <li><em><b>Languages</b></em>: Javascript(ES5+, TS), Python, GoLang, SQL, GraphQL, CSS/HTML</li>
          </ul>
          <ul>
            <li><em><b>Libraries</b></em>: Redux, Three.js/D3/Canvas, styled-components, Underscore, Mocha, Chai, Jest, supertest</li>
          </ul>
          <ul>
            <li><em><b>Front-End Frameworks</b></em>: React, Next.js</li>
          </ul>
          <ul>
            <li><em><b>Back-End Frameworks</b></em>: Node.js, Express, GoLang, AWS</li>
          </ul>
          <ul>
            <li><em><b>Databases</b></em>:mySQL, SQLite, PostgreSQL, MongoDb, CouchDb, Sequelize ORM, Mongoose ORM, AWS RDS, Redis</li>
          </ul>
          <ul>
            <li><em><b>Deployment/Tools/Task-Runners</b></em>: Docker, DataDog, K6, Loader.io, NGINX, Postman, GitKraken, Trello, pgAdmin, AWS: EC2, s3, Travis, CircleCI, Grunt, Gulp</li>
          </ul>
          <ul>
            <li><em><b>Other Software Proficiencies</b></em>: Photoshop, Illustrator, InDesign, Figma</li>
          </ul>
        </p>
        <p>
          <h3><strong>APPS</strong></h3>
            <ul>
              <li><a href="https://github.com/ArrrrWeBeAnneBonny/booking.git">AnneBonny</a></li>
              <li><a href="https://github.com/SDCmailto/SDC-CustomerReviews.git">mailto</a></li>
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