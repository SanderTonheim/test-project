import { getClient } from '../../lib/sanity.server'
import groq from 'groq'
import path from 'path'
export async function getStaticPaths() {
	const res = await getClient().fetch(groq`*[_type == 'medlem']`)
	const data = await res.json()
	const paths = data.map((slug) => ({ params: { slug: slug } }))
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const medlem = await getClient().fetch(
		'https://8rpris03.api.sanity.io/<path>{ slug: params.slug }'
	)

	return {
		props: {
			medlem,
		},
	}
}

export default function ProfilePage({ medlem }) {
	console.log(medlem)
	return <div>{medlem.name}</div>
}
