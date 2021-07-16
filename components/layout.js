import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Hannah Manfredi'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          content="Hannah Manfredi Portfolio"
        />
      </head>
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