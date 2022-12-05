import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import s from '../styles/sponsors.module.css'
import urlFor from '../lib/sanity'

export default function SecondarySponsors() {
	const [data, setData] = useState([])
	const URL = 'https://8rpris03.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22medlem%22%20%26%26%20SecondarySponsor%3D%3Dtrue%5D'
	const getMainSponsors = () => {
		axios.get(URL).then((res) => {
			return setData(res.data.result)
		})
	}
	useEffect(() => {
		getMainSponsors()
	}, [])

	return (
		<>
			{data.map((item) => {
				return (
					<div
						className={s.card}
						key={item._id}>
						<img
							className={s.logo}
							src={urlFor(item.logo.asset._ref)}
							alt=''
						/>
						<div className={s.tagContainer}>
							{item.tagList?.map((tag) => {
								return <p className={s.tags}>{tag}</p>
							})}
						</div>
					</div>
				)
			})}
		</>
	)
}
