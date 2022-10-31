import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'
// Wrapper layout komponenten rundt slik at Navbar layouten kommer på hver side som vises.
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Prøve prosjekt</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
