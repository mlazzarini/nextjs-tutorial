import styles from '../styles/Footer.module.css'
import Link from 'next/Link'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p>Copyright &copy; DJ Events 2021</p>
            <p>
                <Link href='/about'>
                    <a>About this project</a>
                </Link>
            </p>
        </div>
    )
}