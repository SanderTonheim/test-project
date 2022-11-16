import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
import s from '../styles/search.module.css'
import { useRef, useEffect, useState } from 'react'
import React from 'react'

export default function Search() {
	const searchClient = algoliasearch(
		'BC0Z4HS7B1',
		'efb4c3162db4848f35d83092db403111'
	)
	const Hit = ({ hit }) => <p>{hit.name}</p>

	const refOne = React.forwardRef(false)
	const handleClickOutSide = (e) => {
		if (!e.target.value === null) {
			setOpen(false)
		} else {
			setOpen(!open)
		}
	}

	console.log(refOne)
	useEffect(() => {
		document.addEventListener('keypress', handleClickOutSide)
	}, [])
	const [open, setOpen] = useState(false)

	return (
		<div className={s.container}>
			<InstantSearch
				indexName={'Medlem søk'}
				searchClient={searchClient}
			>
				<div className={s.search_hits}>
					<SearchBox
						ref={refOne}
						className={s.input}
					/>
					<div className={s.hitContainer}>
						{open && <Hits hitComponent={Hit} />}
					</div>
				</div>
			</InstantSearch>
		</div>
	)
}
