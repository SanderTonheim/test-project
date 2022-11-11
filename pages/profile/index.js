import Link from 'next/link'
import s from '../../styles/profileIndex.module.css'
import Image from 'next/image'

/* --------------------------------- sanity --------------------------------- */
import { getClient } from '../../lib/sanity.server'
import groq from 'groq'
import { urlFor } from '../../lib/sanity'
/* ------------------------------ sanity fetch ------------------------------ */
export async function getStaticProps({ preview = false }) {
	const medlem = await getClient(preview).fetch(groq`*[_type == 'medlem']`)

	return {
		props: {
			medlem,
		},
	}
}

/* ------------------------------------ Render items on page ----------------------------------- */

const ProfileList = ({ medlem }) => {
	console.log(medlem)
	return (
		<div className={s.container}>
			<h1 className={s.header}>Medlemsliste</h1>

			{medlem.map((medlem) => {
				const picture = urlFor(medlem.logo.asset._ref)

				return (
					<div className={s.logo}>
						<Link
							className={s.link}
							key={medlem.slug.current}
							href={
								'/profile/' +
								medlem.slug.current
									// .toLowerCase()
									// .replace(/\s+/g, '-')
									.toString()
							}
						>
							<img src={picture}></img>
						</Link>
					</div>
				)
			})}
		</div>
	)
}
export default ProfileList
