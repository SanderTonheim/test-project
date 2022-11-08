import client from '../../client'
import groq from 'groq'
import s from '../../styles/slug.module.css'

export async function getStaticPaths() {
	const respon = await client.fetch(groq`*[_type == 'medlem']`)

	const paths = respon.map((medlem) => {
		return {
			params: { slug: medlem.slug.current },
		}
	})
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	// It's important to default the slug so that it doesn't return "undefined"
	const { slug = '' } = context.params
	const post = await client.fetch(
		`
    *[_type == "medlem" && slug.current == $slug][0]
  `,
		{ slug }
	)
	return {
		props: {
			post,
		},
	}
}
// export async function getStaticProps({ params, preview }) {
// 	const slug = { slug: params.slug }
// 	const medlem = await getClient(preview).fetch(
// 		'https://8rpris03.api.sanity.io/' + groq`*[_type == 'medlem']` + slug
// 	)
// 	const data = medlem.json()

// 	return {
// 		props: {
// 			data,
// 		},
// 	}
// }

export default function ProfilePage({ post }) {
	console.log(post)
	return (
		<div className={s.container}>
			<h1>{post.name}</h1>
		</div>
	)
}
