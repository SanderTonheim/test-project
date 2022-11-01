import Link from 'next/link'
import s from '../../styles/profileIndex.module.css'

/* --------------------------- Get data from API --------------------------- */
export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()
	return {
		props: { profiles: data },
	}
}

/* ------------------------------------ Render items on page ----------------------------------- */

const ProfileList = ({ profiles }) => {
	return (
		<div className={s.container}>
			<h1 className={s.header}>Medlemsliste</h1>
			{profiles.map((profile) => {
				return (
					<div className={s.modal_container}>
						<Link
							href={'/profile/' + profile.name}
							key={profile.id}
						>
							{profile.name}
						</Link>
					</div>
				)
			})}
		</div>
	)
}
export default ProfileList
