import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Hannah Manfredi'
export const siteTitle = 'Hannah Manfredi'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name='Hannah Manfredi'
          content='Hannah Manfredi Portfolio'
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/profile.jpg"
              className={utilStyles.borderCircle}
              height={400}
              width={300}
              alt="profile pic"
            />
            <h1 className={utilStyles.heading2Xl}>Hannah Manfredi</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={400}
                  width={300}
                  alt="profile pic"
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}