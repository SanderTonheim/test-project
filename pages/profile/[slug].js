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
	console.log(post)
	return (
		<>
			<div className={s.container}>
				<h1>{post.name}</h1>
				<div className={s.section_1}>
					<p className={s.text}>{post.text}</p>
					<img
						className={s.logo}
						src={logo}
						alt='Logo'
					/>
				</div>
				<div className={s.section_2}>
					<div>
						{post.tag < 1 ? ' ' : <Tags list={post.tag} />}
						{post.certifications < 1 ? '' : <Certifications list={post.certifications} />}
					</div>
					<div className={s.contacts}>
						{post.contactPerson && (
							<Contacts
								list={post.contactPerson}
								website={post.website}
								address={post.address}
							/>
						)}
					</div>
				</div>
				{post.connections && <Connections list={post.connections} />}
			</div>
			{/* <div className={s.map}>
				<CompanyMap
					lat={post.location.lat}
					lng={post.location.lng}
				/>
			</div> */}
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
	contactPerson,
	website,
	address,
	zip
}`,
		{ slug }
	)

	return {
		props: {
			post,
		},
	}
}
