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
	const post = await getClient().fetch(
		groq`
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

export default function ProfilePage({ post }, data) {
	const tags = async function getTags() {
		const id = post._id
		const allTags = await getClient().fetch(groq`*[tags in path("${id}")]`)
		await console.log(allTags)
	}

	console.log(post.tags)
	const picture = post.tags.map((tag) => {
		return urlFor(tag._ref)
	})
	// const picture = urlFor(post.tags[0].asset._ref)
	// const showPic = picture.options.source
	return (
		<div className={s.container}>
			<h1>{post.name}</h1>
			<p className={s.text}>
				Om oss <br />
				<br />
				{post.text}
			</p>
			<img src={urlFor(picture).width(200).url()} />
			{/* <div className={s.tags}>
				<img
					src={picture}
					alt=''
				/>
			</div> */}
			<ul className={s.contactInfo}>
				<li>Telefon: {post.phone}</li>
				<li>E-post: {post.email}</li>
				<Link href={post.website}>Nettside</Link>
				<li>Addresse: {post.address}</li>
				<li>{post.zip}</li>
			</ul>
			{/* <SimpleMap lat={post.location.lat} lng={post.location.lng}/> */}
			<CompanyMap
				lat={post.location.lat}
				lng={post.location.lng}
			/>
		</div>
	)
}
