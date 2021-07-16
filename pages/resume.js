import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'

export default function FirstPost() {
  return (
    <>
      <head>
        <title>Hannah Manfredi Resume</title>
      </head>
      <Image
        priority
        src="/hannah.manfredi.resume.jpg"
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
  )
}