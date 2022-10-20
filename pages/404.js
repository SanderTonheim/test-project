import Link from 'next/link'
import styles from '../styles/404.module.css'

export default function PageNotFound() {
	return (
		<div className={styles.container}>
			<h1>Fant ingen side!</h1>
			<p>
				Klikk her for å gå hjem <Link href='/'> </Link>{' '}
			</p>
		</div>
	)
}
