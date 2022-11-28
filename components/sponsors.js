import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import s from '../styles/sponsors.module.css'

export default function Sponsors() {
	const [data, setData] = useState([])
	const URL = 'https://8rpris03.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22medlem%22%20%26%26%20sponsor%20%5D'
	const getSponsors = () => {
		axios.get(URL).then((res) => {
			return setData(res.data.result)
		})
	}
	useEffect(() => {
		getSponsors()
	}, [])

	return (
		<div>
			{data.map((item) => {
				return (
					<div className={s.card}>
						{item.name}
						<br />
						<br />
						{item.text}
					</div>
				)
			})}
		</div>
	)
}
