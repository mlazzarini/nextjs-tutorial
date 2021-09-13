import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '@/styles/Layout.module.css'
import Header from './Header'
import Showcase from './Showcase'
import Footer from './Footer'

export default function Layout({ title, keywords, description, children}) {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <Header />
            {router.pathname === '/' && <Showcase />}
            <div className={styles.container}>{children}</div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'DJ events',
    description: 'Description of Dj Events',
    keywords: 'dj, events, music'
}