import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import s from '../styles/sponsors.module.css'
import urlFor from '../lib/sanity'

export default function mainSponsors() {
	const [data, setData] = useState([])
	const URL =
		'https://8rpris03.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22medlem%22%20%26%26%20%20MainSponsor%20%3D%3D%20true%5D%7Bname%2C%20_id%2C%20logo%2C%20certifications%5B%5D-%3E%7D'
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
				console.log(item)
				return (
					<div
						className={s.card}
						key={item.name}>
						<img
							className={s.logo}
							src={urlFor(item.logo.asset._ref)}
							alt=''
						/>

						<div className={s.certifications}>
							{item.certifications?.map((cert) => {
								return (
									<img
										src={urlFor(cert.icon)}
										alt=''
										key={cert.name}
									/>
								)
							})}
						</div>
					</div>
				)
			})}
		</>
	)
}
