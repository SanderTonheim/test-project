import s from '../../styles/idPage.module.css'
export async function getStaticPaths() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()

	const paths = data.map((data) => ({
		params: { id: data.id.toString() },
	}))
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const id = params.id
	const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
	const data = await res.json()
	return {
		props: {
			data,
		},
	}
}

function Page({ data }) {
	return (
		<div>
			<h1 className={s.company_name}>{data.name}</h1>
		</div>
	)
}
export default Page
