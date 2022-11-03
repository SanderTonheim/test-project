import Footer from './footer'
import Navbar from './navbar'
import styles from '../styles/Layout.module.css'
// templet komponent som man wrapper rundt andre komponenter slik. Kan brukes flere ganger
export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Prøve prosjekt</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</Head>
			<Navbar />
			<div className={styles.content}>{children}</div>
			<Footer />
		</>
	)
}
