import Head from 'next/head';
import Layout from '../../components/layout';
import { getSortedPostsData } from '../../lib/posts';
import { GetStaticProps } from 'next'
import Link from 'next/link'
import utilStyles from '../../styles/lists.module.css'
import cards from '../../styles/cards.module.css'
import Date from '../../components/date'


export default function Posts({
    allPostsData
}: {
    allPostsData: {
        date: string
        title: string
        id: string
    }[]
}) {
    return (
        <Layout>
            <Head>
                <title>My Blog Posts</title>
            </Head>
            <h1>All the links are belong to us</h1>
            <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
                <li key={id} className={cards.card}>
                <a href={`/blog/${id}`}> 
                        <div>{title}</div>
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                        <br />
                </a>
                </li>
            ))}
            </ul>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }
