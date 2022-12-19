import s from '../styles/Home.module.css'
import Search from '../components/search'
import MainSponsors from '../components/MainSponsors'
import arrow from '../assets/arrow.svg'
import Image from 'next/image'
import { Autocomplete } from '@react-google-maps/api'
import figure from '../assets/frontPageFigure.png'

const Home = () => {
	return (
		<main className={s.mainContainer}>
			<section className={s.section_1}>
				<h1 className={s.header}>Næringsrådets Bedriftmedlemmer</h1>
				<Search />
				<div className={s.figure}>
					<img
						src={figure.src}
						alt='figure'
					/>
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
