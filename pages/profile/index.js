import Axios from 'axios'

// for å få tilgang til dataen som ble returnert av API setter vi "profiles" som argument i "ProfileList" funksjonen.
// verdien til profiles er array'en med profiler/data
const ProfileList = ({ profiles }) => {
	console.log(profiles)
	return (
		// her sier vi hva vi skal returnere fra komponenten.
		// returner en div
		<div>
			{/* inni div'en skal det som retuneres fra map funskjonen vises.  */}
			{/* map funksjon:  vi setter inn et argument som vi kan kalle hva vi vil.*/}
			{/* Alle objekter som ligger inni "profiles" skal nå bli refert til som profile. eks 0.name="sander" = profile.name="sander"  */}
			{/* Return fra map funkjsonen sier hva den skal vise for hvert obejkt. "For hver "profile" i listen skal du vise en h1 med tekst fra profile.name variabelen. */}
			{profiles.map((profile) => {
				return (
					<div>
						<h1>{profile.company.name} </h1>
					</div>
				)
			})}
		</div>
	)
}

// denne funksjonen getStaticProps skal hente data fra en API og returnere en variabel som andre komponenter kan bruke.
// for at det skal fungere slik det er ment lager vi en funkjson med navnet getStaticProps.
export const getStaticProps = async () => {
	// Henter data fra API'en
	// await = sett funkjsonen på pause frem til du får en verdi.
	const data = await Axios.get('https://jsonplaceholder.typicode.com/users')
	// retunerer et objekt med verdi "props", som inneholder et object med verdi "profiles" som representerer dataen vi fikk tilbake fra API'en.
	return {
		props: {
			profiles: data.data,
		},
	}
}

export default ProfileList
