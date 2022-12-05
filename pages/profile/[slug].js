import Link from 'next/link'
import Search from '../../components/search'
import { getClient } from '../../lib/sanity.server'
import groq from 'groq'
import urlFor from '../../lib/sanity'
import CompanyMap from '../../components/map'
import Certifications from '../../components/Certifications'
import Tags from '../../components/Tags'
import Contacts from '../../components/contactPerson'
import s from '../../styles/slug.module.css'
import Connections from '../../components/connections'

/* ------------------------------------ Render items on page ----------------------------------- */
export default function ProfilePage({ post }) {
	const logo = urlFor(post.logo.asset._ref)
	return (
		<>
			<div className={s.container}>
				<div className={s.section_1}>
					<h1>{post.name}</h1>

					<p className={s.text}>{post.text}</p>
					{post.tag < 1 ? ' ' : <Tags list={post.tag} />}
				</div>
				<div className={s.section_2}>
					<img
						className={s.logo}
						src={logo}
						alt='logo'
					/>
					{post.certifications < 1 ? '' : <Certifications list={post.certifications} />}

					{post.contactPerson && <Contacts list={post.contactPerson} />}
					{post.connections && <Connections list={post.connections} />}
				</div>
			</div>
			<div className={s.map}>
				<CompanyMap
					lat={post.location.lat}
					lng={post.location.lng}
				/>
			</div>
		</>
	)
}

/* ------------------------------------ Make pages based on number of  slugs ----------------------------------- */

export async function getStaticPaths() {
	const respon = await getClient().fetch(groq`*[_type == 'medlem']`)

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

/* ------------------------------------ Get props for slug page ----------------------------------- */
export async function getStaticProps(context) {
	const { slug = '' } = context.params
	const post = await getClient().fetch(
		groq`
	  *[_type == "medlem" && slug.current == $slug][0]{
  name, 
  _id,
  logo,
	location,
  certifications[]->,
	connections[]->,
	text,
	tag[]->,
}`,
		{ slug }
	)

	return {
		props: {
			post,
		},
	}
}
