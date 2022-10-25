// Dette er en dynamisk route som vil si at contentet på siden vil varie utifra hvilke "username" som kommer etter profile feks "side.no/profile/Sander". Oppsettet på sidene vil være likt men inholde ("hei (noe)") vil endre seg i dette tilfellet.

// Importerer useRouter slik at vi får tilgang til siste delen på URL. Feks "side.no/profile/*Sander *" også kjent som parameter.
import Axios from 'axios'

export const getStaticPaths = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()

	const paths = data.map((profile) => {
		return {
			params: { id: profile.id.toString() },
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async (context) => {
	const id = context.params.id
	const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
	const data = await res.json()

	return {
		props: { profile: data },
	}
}

const Details = ({ profile }) => {
	// Dette gjør slik at vi får tilagang til alle funsjonene som ligger under useRouter()hooken.
	// Feks "router.query".Dette vil gi oss tilgang til et object hvor vi kan hente ut data
	// avhenging av query på URL.
	// const router = useRouter()

	return (
		<div >
			{/* viser hei! {URL query teksten} */}
			<h1> {profile.company.name} </h1>
			<p>The owner of this astablishment is {profile.name} </p>
		</div>
	)
}

export default Details
