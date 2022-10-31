// import Image from 'next/image'
// import styles from '../../styles/idPage.module.css'
// import placeholder from '../../assets/owner_placeholder.svg'
// import Popup from '../../components/popup'

// // [] rundt navnet sier til next at dette er en side som er dynamisk. Layouten endrer seg ikke, men innholdet endrer seg utifra hvilke id funksjonen mottar.
// // denne filer er en "templet" for hvordan "profile/[id]" siden skal se ut.
// // Her skriver vi også hvilke sider som skal bli generert på serveren når siden skal bygget til produksjon.

// // kjører når applikasjonen skal bli bygget for produskjon.
// // getStatic paths er en funksjon som gennerer 1 rute og 1 html side for hver id. feks side.no/profile/1.
// // Må være async funksjon slik at vi kan få tak i alle id verdiene og returnere de til next slik at next vet hvor mange sider og ruter den skal generere.
// export const getStaticPaths = async () => {
// 	// hent samme data som i getStaticProps i index.js for å få tak i alle id.
// 	// må bruke fetch()
// 	// res = await = vent til API svarer
// 	const res = await fetch('https://jsonplaceholder.typicode.com/users')
// 	// converterer svarer fra API til JSON fil.
// 	// const data = await res.json = vent til filen er ferdig konvertert.
// 	const data = await res.json()
// 	// map funkjson med navn paths.

// 	const paths = data.map((profile) => {
// 		//for hvert element i objektet data, returner objekt med navn "params" som inneholder en variabel med navn "id".
// 		// id objektet har verdi profile.id.toString(). Dette henter id feltet for hvert objekt og konverterer det til en string.
// 		return {
// 			params: { id: profile.id.toString() },
// 		}
// 	})

// 	//returner variabel som next kan se på for å finne ut hvor mange sider og ruter den skal lage når applikasjonen blir bygget.
// 	return {
// 		// paths henter ut alle id for hvert objekt fra responsen fra API'en. slik at next genererer en side og rute for hver id i listen.
// 		paths,
// 		fallback: false,
// 	}
// }

// // kjører når applikasjonen skal bli bygget for produskjon.
// // funksjon for å hente ut data om en spesifik profil.
// // funksjonen vil kjøre for hver profil side som skal bli generert av next. Den referer til paths fra forige funksjon for å vite hvor mange ganger den skal kjøre.
// // feks paths returnerer 10 id'er, denne funkjonen vil kjøre 10 ganger.

// export const getStaticProps = async (context) => {
// 	// vi får tilgang til parameteret vi trenger via context objektet, som vi aksepterer som et argument.
// 	// hver id vi får tak i vil bli festet til context objektet. Feks context.params.id.
// 	// context referer til path som igjen referer til return fra map funkjsonen som er et objekt med navn params. Vi får en ny id hver gang fra context objektet.
// 	// paths = const path = data.map return params{ id: profile.id.toString() }
// 	const id = context.params.id

// 	// fetch request for hver enkelt id. url/ + id variabel.
// 	// await for å vente på svar fra API.
// 	const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)

// 	// vent til konverteringen av res til json format er ferdig.
// 	const data = await res.json()

// 	// returner et objekt med navn props fra denne funkjsonen. Slik at Details funkjsonen får tilgang til dataen som ble hentet fra fetch.
// 	// objekt inneholder profile variabel med verdien til dataen som ble returnet fra fetch.	console.log(params)
// 	return {
// 		props: { profile: data },
// 	}
// }
// // Fuknker som en templet for hvordan alle side.no/profile/id sider skal se ut.
// // Destrkturer props som ble returnert fra getStaticProps funksjonen. Setter profile som props i Details funksjonen for å få tilgang til dataen.
// const Details = ({ profile }) => {
// 	// sier hva som skal returneres fra profile.
// 	return (
// 		<section className={styles.section}>
// 			<div className={styles.companyname}>
// 				{/* Viser en <h1> med navnet til bedriften */}
// 				<h1> {profile.company.name} </h1>
// 				<h2>"{profile.company.catchPhrase}" </h2>
// 			</div>
// 			<main className={styles.content}>
// 				<div className={styles.picture}>
// 					<Image
// 						src={placeholder}
// 						width={200}
// 						height={200}
// 					/>
// 					<p>Owner {profile.name} </p>
// 				</div>

// 				<div className={styles.text}>
// 					<p>
// 						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// 						eiusmod tempor incididunt ut labore et dolore magna aliqua.
// 						Pellentesque adipiscing commodo elit at imperdiet dui accumsan.
// 						Purus non enim praesent elementum. Diam phasellus vestibulum lorem
// 						sed risus. Lectus magna fringilla urna porttitor rhoncus dolor purus
// 						non enim. Potenti nullam ac tortor vitae. Lacinia quis vel eros
// 						donec ac. Gravida neque convallis a cras semper auctor. Aliquam id
// 						diam maecenas ultricies mi eget mauris. At augue eget arcu dictum
// 						varius duis. Aenean sed adipiscing diam donec adipiscing tristique
// 						risus nec. Nullam non nisi est sit. <br />
// 						<br /> Pharetra magna ac placerat vestibulum lectus mauris ultrices
// 						eros in. Accumsan tortor posuere ac ut consequat semper viverra nam.
// 						Ultrices sagittis orci a scelerisque purus semper eget. Pellentesque
// 						elit ullamcorper dignissim cras tincidunt lobortis feugiat. Auctor
// 						augue mauris augue neque gravida in fermentum et. Ultrices eros in
// 						cursus turpis. Morbi tristique senectus et netus et malesuada fames
// 						ac. Neque ornare aenean euismod elementum nisi quis eleifend quam.
// 						Diam in arcu cursus euismod. Phasellus egestas tellus rutrum tellus.
// 						Lectus proin nibh nisl condimentum id venenatis a condimentum vitae.
// 						Vitae congue mauris rhoncus aenean vel elit scelerisque mauris
// 						pellentesque. Adipiscing bibendum est ultricies integer quis auctor
// 						elit sed vulputate. Diam maecenas ultricies mi eget mauris pharetra.
// 						Amet nisl suscipit adipiscing bibendum est ultricies integer quis.
// 						Viverra nam libero justo laoreet sit amet. Convallis posuere morbi
// 						leo urna molestie. Quisque id diam vel quam elementum. Porta lorem
// 						mollis aliquam ut porttitor leo a diam. Sed cras ornare arcu dui
// 						vivamus arcu felis bibendum ut. Malesuada fames ac turpis egestas
// 						maecenas pharetra convallis. Quisque id diam vel quam elementum
// 						pulvinar etiam non quam. Porttitor massa id neque aliquam vestibulum
// 						morbi. Tellus pellentesque eu tincidunt tortor aliquam. Nisl
// 						suscipit adipiscing bibendum est ultricies integer quis
// 					</p>
// 				</div>
// 				<div className={styles.contact}>
// 					<Popup test={profile} />
// 					<ul>
// 						<li>{profile.address.street}</li>
// 						<li>{profile.address.suite}</li>
// 						<li>{profile.address.city}</li>
// 						<li>{profile.address.zipcode}</li>
// 					</ul>
// 				</div>
// 			</main>
// 		</section>
// 	)
// }

// export default Details
