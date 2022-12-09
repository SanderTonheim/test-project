import Link from 'next/link'
import s from '../../styles/profileIndex.module.css'
import Search from '../../components/search'
import icons from '../../assets/icons/index'
/* --------------------------------- sanity --------------------------------- */
import { getClient } from '../../lib/sanity.server'
import groq from 'groq'
/* ------------------------------------ Render items on page ----------------------------------- */
const ProfileList = ({ medlem }) => {
	const isMainSponsor = medlem.filter((mainSponsors) => {
		return mainSponsors
	})
	console.log(isMainSponsor)

	return (
		<div className={s.container}>
			<h1 className={s.header}>Medlemsliste</h1>
			<section className={s.search}>
				<Search />
			</section>
			{medlem.map((medlem) => {
				return (
					<div
						className={s.company}
						key={medlem._id}>
						<Link
							className={s.link}
							href={'/profile/' + medlem.slug.current.toString()}>
							{medlem.name}
						</Link>
						<img
							src={icons.member.src}
							alt=''
						/>
					</div>
				)
			})}
		</div>
	)
}
export default ProfileList

/* ------------------------------ sanity fetch ------------------------------ */
export async function getStaticProps({ preview = false }) {
	const medlem = await getClient(preview).fetch(groq`*[_type == 'medlem']`)

	return {
		props: {
			medlem,
		},
	}
}
