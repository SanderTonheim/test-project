import s from '../../styles/slug.module.css'
import Link from 'next/link'
import CompanyMap from '../../components/map'
import { getClient } from '../../lib/sanity.server'
import groq from 'groq'
import { urlFor } from '../../lib/sanity'

export async function getStaticPaths() {
	const respon = await getClient().fetch(groq`*[_type == 'medlem']`)

	const paths = respon.map((medlem) => {
		return {
			params: { slug: medlem.slug.current, data: '' },
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
	const post = await getClient().fetch(
		groq`
	  *[_type == "medlem" && slug.current == $slug][0]{name,address,text,website,contactPerson, location, logo,zip,tags[]-> }`,
		{ slug }
	)

	return {
		props: {
			post,
		},
	}
}

export default function ProfilePage({ post }) {
	// const id = post._id
	// const res = getClient()
	// 	.fetch(groq`*[_type == "medlem" `)
	// 	.then((result) => {
	// 		return result
	// 	})

	console.log(post)
	return (
		<div className={s.container}>
			<h1>{post.name}</h1>
			<p className={s.text}>
				Om oss <br />
				<br />
				{post.text}
			</p>
			{/* <div className={s.tags}>
				<img
					src={picture}
					alt=''
				/>
			</div> */}
			<ul className={s.contactInfo}>
				<li>Telefon: {post.phone}</li>
				<li>E-post: {post.email}</li>
				{/* <Link href={post.website}>Nettside</Link> */}
				<li>Addresse: {post.address}</li>
				<li>{post.zip}</li>
			</ul>
			{/* <SimpleMap lat={post.location.lat} lng={post.location.lng}/> */}
			{/* <CompanyMap
				lat={post.location.lat}
				lng={post.location.lng}
			/> */}
		</div>
	)
}
