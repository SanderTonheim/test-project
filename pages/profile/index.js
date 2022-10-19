// Dette vises når en bruker ikke har noen ekstra parametere.
// uten parameter = "www.side.no/brukere " ingen bruker parameter er satt inn.
// med parameter = "www.side.no/brukere/sander"
// sander er bruker parameter siden det kommer etter vi har gått inn i mappen "brukere"

export default function ProfileDefault() {
	return (
		<>
			<h1>
				Ai! Her var det ingen profiler! <br />
				Gå tilbake og prøv på nytt
			</h1>
		</>
	)
}
