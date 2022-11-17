import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
import s from '../styles/search.module.css'
import { useState } from 'react'

const searchClient = algoliasearch('BC0Z4HS7B1', 'efb4c3162db4848f35d83092db403111')
const Hit = ({ hit }) => <p>{hit.name}</p>

export default function Search() {
	const [value, setValue] = useState(null)
	const handleChange = (event) => {
		setValue(event.target.value)
	}
	return (
		<div className={s.container}>
			<InstantSearch
				indexName={'Medlem søk'}
				searchClient={searchClient}>
				<div className={s.searchComponent}>
					<SearchBox
						className={s.search}
						onChange={handleChange}
					/>
					{value > '' ? (
						<Hits
							hitComponent={Hit}
							className={s.hit}
						/>
					) : (
						''
					)}
				</div>
			</InstantSearch>
		</div>
	)
}
