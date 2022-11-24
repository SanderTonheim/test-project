import s from '../../styles/slug.module.css'
import Link from 'next/link'
import CompanyMap from '../../components/map'
import { getClient } from '../../lib/sanity.server'
import groq from 'groq'
import { urlFor } from '../../lib/sanity'


export default function ProfilePage({ post }) {
	console.log(post)
	return (
		<div className={s.container}>
			<h1>{post.name}</h1>
			<p className={s.text}>
				Om oss <br />
				<br />
				{post.text}
			</p>
			<div className={s.tags}>
				{post.tags < 1 ? (
					''
				) : (
					<img
						src={urlFor(post.tags[0].tag_Pic.asset._ref)}
						alt=''
					/>
				)}
				{/* <img
					src={urlFor(post.tags[0].tag_Pic.asset._ref)}
					alt=''
				/> */}
			</div>
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
	const { slug = '' } = context.params
	const post = await getClient().fetch(
		groq`
	  *[_type == "medlem" && slug.current == $slug][0]{
			name,
			address,
			text,
			website,
			contactPerson,
			 location,
			 logo,
			zip,
			tags[]->
		}`,
		{ slug }
	)

	return {
		props: {
			post,
		},
	}
}


