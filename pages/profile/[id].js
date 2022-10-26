// [] rundt navnet sier til next at dette er en side som er dynamisk. Layouten endrer seg ikke, men innholdet endrer seg utifra hvilke id funksjonen mottar.
// denne filer er en "templet" for hvordan "profile/[id]" siden skal se ut.
// Her skriver vi også hvilke sider som skal bli generert på serveren når siden skal bygget til produksjon.

// kjører når applikasjonen skal bli bygget for produskjon.
// getStatic paths er en funksjon som gennerer 1 rute og 1 html side for hver id. feks side.no/profile/1.
// Må være async funksjon slik at vi kan få tak i alle id verdiene og returnere de til next slik at next vet hvor mange sider og ruter den skal generere.
export const getStaticPaths = async () => {
	// hent samme data som i getStaticProps i index.js for å få tak i alle id.
	// må bruke fetch()
	// res = await = vent til API svarer
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	// converterer svarer fra API til JSON fil.
	// const data = await res.json = vent til filen er ferdig konvertert.
	const data = await res.json()
	// map funkjson med navn paths.

	const paths = data.map((profile) => {
		//for hvert element i objektet data, returner objekt med navn "params" som inneholder en variabel med navn "id".
		// id objektet har verdi profile.id.toString(). Dette henter id feltet for hvert objekt og konverterer det til en string.
		return {
			params: { id: profile.id.toString() },
		}
	})

	//returner variabel som next kan se på for å finne ut hvor mange sider og ruter den skal lage når applikasjonen blir bygget.
	return {
		// paths henter ut alle id for hvert objekt fra responsen fra API'en. slik at next genererer en side og rute for hver id i listen.
		paths,
		fallback: false,
	}
}

// kjører når applikasjonen skal bli bygget for produskjon.
// funksjon for å hente ut data om en spesifik profil.
// funksjonen vil kjøre for hver profil side som skal bli generert av next. Den referer til paths fra forige funksjon for å vite hvor mange ganger den skal kjøre.
// feks paths returnerer 10 id'er, denne funkjonen vil kjøre 10 ganger.

export const getStaticProps = async (context) => {
	// vi får tilgang til parameteret vi trenger via context objektet, som vi aksepterer som et argument.
	// hver id vi får tak i vil bli festet til context objektet. Feks context.params.id.
	// context referer til path som igjen referer til return fra map funkjsonen som er et objekt med navn params. Vi får en ny id hver gang fra context objektet.
	// paths = const path = data.map return params{ id: profile.id.toString() }
	const id = context.params.id

	// fetch request for hver enkelt id. url/ + id variabel.
	// await for å vente på svar fra API.
	const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)

	// vent til konverteringen av res til json format er ferdig.
	const data = await res.json()

	// returner et objekt med navn props fra denne funkjsonen. Slik at Details funkjsonen får tilgang til dataen som ble hentet fra fetch.
	// objekt inneholder profile variabel med verdien til dataen som ble returnet fra fetch.
	return {
		props: { profile: data },
	}
}

// Fuknker som en templet for hvordan alle side.no/profile/id sider skal se ut.
// Destrkturer props som ble returnert fra getStaticProps funksjonen. Setter profile som props i Details funksjonen for å få tilgang til dataen.
const Details = ({ profile }) => {
	// sier hva som skal returneres fra profile.
	return (
		// for hver enkelt id side vises en div
		<div>
			{/* Viser en <h1> med navnet til bedriften */}
			<h1> {profile.company.name} </h1>
			{/* viser tekst og navnet til bedriften */}
			<p>The owner of this astablishment is {profile.name} </p>
		</div>
	)
}

export default Details
