import client from '../../client'
import groq from 'groq'
import s from '../../styles/slug.module.css'
import Link from 'next/link'

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

export default function ProfilePage({ post }) {
	console.log(post)

	return (
		<div className={s.container}>
			<h1>{post.name}</h1>
			<p className={s.text}>
				Om oss <br />
				<br />
				{post.info}
			</p>
			<ul className={s.contactInfo}>
				<li>Telefon: {post.phone}</li>
				<li>E-post: {post.email}</li>
				<Link href={post.website}>Nettside</Link>
				<li>Addresse: {post.address}</li>
				<li>{post.zip}</li>
			</ul>
		</div>
	)
}
