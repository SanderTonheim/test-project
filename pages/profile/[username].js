// Dette er en dynamisk route som vil si at contentet på siden vil varie utifra hvilke "username" som kommer etter profile feks "side.no/profile/Sander". Oppsettet på sidene vil være likt men inholde ("hei (noe)") vil endre seg i dette tilfellet.

// Importerer useRouter slik at vi får tilgang til siste delen på URL. Feks "side.no/profile/*Sander *" også kjent som parameter.
import { useRouter } from 'next/router'

export default function Profile() {

	// Dette gjør slik at vi får tilagang til alle funsjonene som ligger under useRouter()hooken.
	// Feks "router.query".Dette vil gi oss tilgang til et object hvor vi kan hente ut data
	// avhenging av query på URL.
	const router = useRouter()

	// Dekonstruerer objektet og tar ut username fra objektet.
	// slik at vi kan bare trener å bruke username og ikke username.username for å vise brukernavn / query tekst.
	const { username } = router.query
	// console logger ut objektet
	console.log({ username })
	// console logger ut veriden til username inni objektet   
	console.log(username)
	return (
		<>
			{/* viser hei! {URL query teksten} */}
			<h1>Hei {username}! </h1>
		</>
	)
}
