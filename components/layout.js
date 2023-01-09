import Footer from './footer'
import Navbar from './navbar'
import s from '../styles/layout.module.css'
import Head from 'next/head'
// templet komponent som man wrapper rundt andre komponenter slik. Kan brukes flere ganger
export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<div className={s.content}>{children}</div>
			<Footer />
		</>
	)
}
