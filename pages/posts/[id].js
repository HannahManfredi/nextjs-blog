import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

// const Image = ({ alt, src }) => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   const styles = {
//     lqip: {
//       filter: "blur(10px)",
//     },
//   };

//   // Hide preview when image has loaded.
//   if (imageLoaded) {
//     styles.lqip.opacity = 0;
//   }

//   return (
//     <div className="relative">
//       <img
//         className="absolute top-0 left-0 z-10 w-full transition-opacity duration-500 ease-in opacity-100"
//         src={require(`../../content/assets/${src}?lqip`)}
//         alt={alt}
//         style={styles.lqip}
//       />

//       <img
//         className="w-full"
//         src={require(`../../content/assets/${src}`)}
//         alt={alt}
//         onLoad={() => setImageLoaded(true)}
//       />
//     </div>
//   );
// };

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

