import s from '../styles/slug.module.css'
import urlFor from '../lib/sanity'
import Image from 'next/image'
export default function Connections({ list }) {
	return (
		<>
			{list?.map((item) => {
				return (
					<div
						className={s.groups}
						key={item.name}>
						<h4>Grupper</h4>
						<img src={item.icon} />
					</div>
				)
			})}
		</>
	)
}
