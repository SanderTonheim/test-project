import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
import s from '../styles/search.module.css'

export default function Search() {
	const searchClient = algoliasearch(
		'BC0Z4HS7B1',
		'efb4c3162db4848f35d83092db403111'
	)
	const Hit = ({ hit }) => <p>{hit.name}</p>

	return (
		<div className={s.container}>
			<InstantSearch
				indexName={'Medlem søk'}
				searchClient={searchClient}
			>
				<div className={s.search_hits}>
					<SearchBox className={s.test} />
					<Hits
						hitComponent={Hit}
						className={s.hits}
					/>
				</div>
			</InstantSearch>
		</div>
	)
}
