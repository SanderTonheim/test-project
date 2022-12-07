import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import s from '../styles/sponsors.module.css'
import urlFor from '../lib/sanity'

export default function MainSponsors() {
	const [data, setData] = useState([])
	const URL =
		"https://8rpris03.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22medlem%22%20%26%26%20%20MainSponsor%20%3D%3D%20true%5D%7B%20%20name%2C%20%20%20_id%2C%20%20logo%2Ctext%2Ctag%5B%5D-%3E%7B%20'icon'%3Aicon.asset._ref%2C%20'name'%3A%20Name%7D%20%2C%20%20certifications%5B%5D-%3E%2Cconnections%5B%5D-%3E%7BName%2C%20'icon'%3A%20icon.asset._ref%7D%7D"
	const GetMainSponsors = () => {
		axios.get(URL).then((res) => {
			return setData(res.data.result)
		})
	}
	useEffect(() => {
		GetMainSponsors()
	}, [])

	return (
		<>
			{data.map((item) => {
				console.log(item)
				return (
					<div
						className={s.card}
						key={item._id}>
						<img
							className={s.logo}
							src={urlFor(item.logo.asset._ref)}
							alt=''
						/>
						{item.text}
						<div className={s.bottomBox}>
							<div className={s.tagList}>
								{item.tag?.map((tag) => {
									return (
										<div className={s.tag}>
											{tag.name}
											<img
												src={urlFor(tag.icon)}
												alt=''
												key={tag.name}
											/>
										</div>
									)
								})}
							</div>
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
					</div>
				)
			})}
		</>
	)
}
