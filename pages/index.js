import s from '../styles/Home.module.css'

import Sponsors from '../components/sponsors'

const Home = () => {
	return (
		<main className={s.mainContainer}>
			<section className={s.search}>{/* <Search /> */}</section>
			<div className={s.cardContainer}>
				<Sponsors />
			</div>
		</main>
	)
}

export default Home
