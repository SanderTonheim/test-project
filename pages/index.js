import s from '../styles/Home.module.css'
import Search from '../components/search'
import SecondarySponsors from '../components/secondarySponsors'
import Sponsors from '../components/mainSponsors'

const Home = () => {
	return (
		<main className={s.mainContainer}>
			<section className={s.section_1}>
				<Search />
			</section>
			<div className={s.mainSponsors}>
				<Sponsors />
			</div>
			<div className={s.secondarySponsors}>
				<SecondarySponsors />
			</div>
		</main>
	)
}

export default Home
