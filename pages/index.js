import s from '../styles/Home.module.css'
import Search from '../components/search'
import MainSponsors from '../components/MainSponsors'
import arrow from '../assets/arraow.svg'
import Image from 'next/image'
import { Autocomplete } from '@react-google-maps/api'

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
				<div className={s.arrow}>
					<Image
						src={arrow}
						width={100}
					/>
				</div>
				<h2>Våre sammarbeidspartenere</h2>
				<MainSponsors />
			</section>
		</main>
	)
}

export default Home
