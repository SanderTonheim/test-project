import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
import s from '../styles/search.module.css'
import { useState } from 'react'

const searchClient = algoliasearch(
	'BC0Z4HS7B1',
	'efb4c3162db4848f35d83092db403111'
)
const Hit = ({ hit }) => <p>{hit.name}</p>

const [value, setValue] = useState('')
 const handleChange = event => {
    setMessage(event.target.value);

export default function Search() {
	return (
		<div className={s.container}>
			<InstantSearch
				indexName={'Medlem søk'}
				searchClient={searchClient}
			>
				<div className={s.searchComponent}>
					<SearchBox className={s.search} />
					<Hits
						hitComponent={Hit}
						className={s.hit}
					/>
				</div>
			</InstantSearch>
		</div>
	)
}
