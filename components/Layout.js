import Footer from './footer'
import Navbar from './navbar'
import styles from '../styles/Layout.module.css'
// templet komponent som man wrapper rundt andre komponenter slik. Kan brukes flere ganger
export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<div className={styles.content}>{children}</div>
			<Footer />
		</>
	)
}
