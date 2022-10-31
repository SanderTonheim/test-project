import Axios from 'axios'
import Link from 'next/link'
import styles from '../../styles/profileIndex.module.css'

// Først hent data fra API.

// denne funksjonen getStaticProps skal hente data fra en API og returnere et objjekt som andre komponenter kan bruke.
// for at det skal fungere slik det er ment lager vi en funkjson med navnet getStaticProps som er async.
export const getStaticProps = async () => {
	// Henter data fra API'en
	// await = sett funkjsonen på pause frem til den får et svar, enten som "ok" eller en error.
	const data = await Axios.get('https://jsonplaceholder.typicode.com/users')

	// Vi sier at "getStaticProps" skal retunerer et objekt med navn "props", som inneholder et object med navn "profiles" som har verdien data.data som er responsen vi fikk fra API'en.
	return {
		props: {
			profiles: data.data,
		},
	}
}

// for å få tilgang til dataen som blir returnert av getStaticProps funksjonen setter vi "profiles" som argument i "ProfileList" funksjonen.
// verdien til profiles er array'en med profiler/data fra props objektet som ble returnert fra getStaticProps.

const ProfileList = ({ profiles }) => {
	return (
		// her sier vi hva vi skal returnere fra ProfileList funkjsonen.

		// returner en div som inneholder map funksjonen.
		<div className={styles.container}>
			{/* map funksjon:  vi setter inn et argument som vi kan kalle hva vi vil.*/}
			{/* Alle objekter som ligger inni "profiles" skal nå bli refert til som profile. eks data.data[0].name="sander" = profile.name="sander"  */}
			{/* Return fra map funkjsonen sier hva den skal vise for hvert obejekt. "For hver "profile" i listen skal det vise en h1 med tekst fra profile.name variabelen. */}
			{profiles.map((profile) => {
				return (
					// Lag <h1>
					<div className='test'>
						{/* sett <h1> til å fungere som en link/klikkbar  */}
						<Link
							// path til hvor linken skal sende brukeren.
							// send bruker til url/profile(mappe)/ + profile.id som kommer fra objektet.
							href={'/profile/' + profile.id}
							// vi gir alle elementer i objekt arrayen sin egen identitet ved bruk at key={id til hver profil}
							// objekt 1 får key={1}, objekt 2 får key={2} etc.
							// Dette er for å hjelpe react å holde oversikt om ting endrer seg, blir lagt til eller slettet.
							key={profile.id}
						>
							{/* tekst som skal vises mellom <h1> taggene  */}
							{profile.company.name}
						</Link>
					</div>
				)
			})}
		</div>
	)
}
// eksporter funksjonen ProfileList som en komponent.
export default ProfileList
