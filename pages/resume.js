import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'

export default function FirstPost() {
  return (
    // <Layout>
    <>
      <Head>
        <title>Hannah Manfredi Resume</title>
      </Head>
      <Image
        priority
        src="/images/resume.jpg"
        // className={utilStyles.borderCircle}
        height={1600}
        width={1600}
        alt="resume"
      />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
    // </Layout>
  )
}