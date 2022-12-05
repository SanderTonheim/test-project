import s from '../styles/slug.module.css'
import urlFor from '../lib/sanity'
import Image from 'next/image'
export default function Connections({ list }) {
	return (
		<>
			{list.map((item) => {
				console.log(item)
				return (
					<div
						className={s.groups}
						key={item.name}>
						<h4>Grupper</h4>
						<img src={urlFor(item.icon.asset._ref)} />
					</div>
				)
			})}
		</>
	)
}
