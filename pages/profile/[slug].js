import s from '../../styles/slug.module.css'
import Link from 'next/link'
import Search from '../../components/search'
import { getClient } from '../../lib/sanity.server'
import groq from 'groq'
import { urlFor } from '../../lib/sanity'
import CompanyMap from '../../components/map'

/* ------------------------------------ Render items on page ----------------------------------- */
export default function ProfilePage({ post }) {
	console.log(post.tags)
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
					<div>
						<p>{post.tags[0].tag_Name}</p>

						<img
							src={urlFor(post.tags[0].tag_Pic.asset._ref)}
							alt=''></img>
					</div>
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
			<CompanyMap
				lat={post.location.lat}
				lng={post.location.lng}
			/>
		</div>
	)
}

/* ------------------------------------ Make pages based on number of  slugs ----------------------------------- */

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

/* ------------------------------------ Get props for slug page ----------------------------------- */
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
