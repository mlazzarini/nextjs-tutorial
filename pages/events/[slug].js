import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

export default function EventPage() {
    const router = useRouter()
    return (
        <Layout title='Event'>
            <h1>Event {router.query.slug}</h1>
        </Layout>
    )
} 