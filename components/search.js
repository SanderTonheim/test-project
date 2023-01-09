import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
import s from '../styles/search.module.css'
import { useState } from 'react'
import Link from 'next/link'

export default function Search() {
	const searchClient = algoliasearch('BC0Z4HS7B1', 'efb4c3162db4848f35d83092db403111')
	const Hit = ({ hit }) => <Link href={'/profile/' + hit.name.toLowerCase()}>{hit.name}</Link>
	const [value, setValue] = useState(null)
	const handleChange = (e) => {
		setValue(e.target.value)
	}

	const cmsData = async () => {
		const fetching = fetch(
			"https://8rpris03.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22medlem%22%5D%20%7Bslug%2CsponsorCardText%2C%20name%2C%20%20%20_id%2C%20%20logo%2Ctext%2Ctag%5B%5D-%3E%7B%20'icon'%3Aicon.asset._ref%2C%20'name'%3A%20Name%7D%20%2C%20%20certifications%5B%5D-%3E%7B%20'icon'%3Aicon.asset._ref%2C%20'name'%3A%20name%7D%2Cconnections%7D%0A"
		).then((fetching) => fetching.json())
		const data = await fetching
		return data.result
	}
	cmsData()
	return (
		<InstantSearch
			className={s.container}
			indexName={'Members'}
			searchClient={searchClient}>
			<div
				className={s.search}
				onChange={handleChange}>
				<input
					type='text'
					placeholder='Søk'
				/>
				{/* <button id={s.searchBtn}>søk</button> */}

				{value > ' ' ? (
					<>
						<Hits
							hitComponent={Hit}
							className={s.hit}></Hits>
					</>
				) : (
					''
				)}
			</div>
		</InstantSearch>
	)
}
