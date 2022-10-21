import Link from 'next/link'
import styles from '../styles/Footer.module.css'
export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.text}>
				<p>Test prosjekt </p>
				<p>2022</p>
				<p>Sander Tonheim</p>
			</div>

			<div className={styles.links}>
				<Link href={'/'}>Hjem</Link>
				<Link href={'/about'}>about</Link>
				<Link href={'/prosjektet'}>prosjektet</Link>
			</div>
		</div>
	)
}
