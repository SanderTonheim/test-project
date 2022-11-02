import Link from 'next/link'
import s from '../../styles/profileIndex.module.css'

/* --------------------------- Get data from API --------------------------- */
export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()
	/* -------------------------------------------------------------------------- */
	/*                        return object with name props                       */
	/* -------------------------------------------------------------------------- */
	return {
		props: { companys: data },
	}
}

/* ------------------------------------ Render items on page ----------------------------------- */

const ProfileList = ({ companys }) => {
	return (
		<div className={s.container}>
			{<h1 className={s.header}>Medlemsliste</h1>}
			{/*
			 -------------------------------------------------------------------------- 
			 for each object in companys[] give this name 
			--------------------------------------------------------------------------
			*/}
			{companys.map((company) => {
				return (
					<div className={s.modal_container}>
						{/* address to page */}
						<Link key={company.id} href={'/profile/' + company.id}>{company.name}</Link>
					</div>
				)
			})}
		</div>
	)
}
export default ProfileList
