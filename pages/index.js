import s from '../styles/Home.module.css'
import Search from '../components/search'
import SecondarySponsors from '../components/secondarySponsors'
import MainSponsors from '../components/MainSponsors'

const Home = () => {
	return (
		<main className={s.mainContainer}>
			<section className={s.section_1}>
				<h1 className={s.header}>Næringsrådets Bedriftmedlemmer</h1>
				<div className={s.searchBG}>
					<Search />
				</div>
			</section>
			<section className={s.section_2}>
				<h2>nikolai er kul</h2>
				<div className={s.mainSponsors}>
					<MainSponsors />
				</div>
				<div className={s.secondarySponsors}>
					<SecondarySponsors />
				</div>
			</section>
		</main>
	)
}

// Våre sammarbeidspartenere
export default Home
