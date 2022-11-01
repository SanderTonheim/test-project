import Axios from 'axios'
import Link from 'next/link'
import s from '../../styles/profileIndex.module.css'

/* --------------------------- Get data from API --------------------------- */
export const getStaticProps = async () => {
	const data = await Axios.get('https://jsonplaceholder.typicode.com/users')

	return {
		props: {
			profiles: data.data,
		},
	}
}

/* ------------------------------------ Render items on page ----------------------------------- */

const ProfileList = ({ profiles }) => {
	return (
		<div className={s.container}>
			<h1 className={s.header}>Medlemsliste</h1>
			{profiles.map((profile) => {
				console.log(profile)

				return (
					<div className={s.modal_container}>
						<Link
							href={'/profile/' + profile.name}
							key={profile.id}
						>
							{profile.company.name}
						</Link>
					</div>
				)
			})}
		</div>
	)
}
export default ProfileList
