import Footer from './footer'
import Navbar from './navbar'
// templet komponent som man wrapper rundt andre komponenter slik. Kan brukes flere ganger
export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</>
	)
}
