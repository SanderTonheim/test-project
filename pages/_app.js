import Layout from '../components/Layout'
import '../styles/globals.css'
// Wrapper layout komponenten rundt slik at Navbar layouten kommer på hver side som vises.
function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
