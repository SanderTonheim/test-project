import Axios from 'axios'
import PopUp from '../../components/popup'
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
			<div className={s.btn_list}>
				{profiles.map((profile) => {
					return (
						<PopUp
							key={profile.name}
							name={profile.name}
						/>
					)
				})}
			</div>
		</div>
	)
}
export default ProfileList

//  sett <h1> til å fungere som en link/klikkbar
// 						<Link
// 							path til hvor linken skal sende brukeren.
// 							send bruker til url/profile(mappe)/ + profile.id som kommer fra objektet.
// 							href={'/profile/' + profile.id}
// 							vi gir alle elementer i objekt arrayen sin egen identitet ved bruk at key={id til hver profil}
// 							objekt 1 får key={1}, objekt 2 får key={2} etc.
// 							Dette er for å hjelpe react å holde oversikt om ting endrer seg, blir lagt til eller slettet.
// 							key={profile.id}
// 						>
// 							tekst som skal vises mellom <h1> taggene
// 							{profile.company.name}
// 						</Link>
