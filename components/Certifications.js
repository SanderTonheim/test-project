import urlFor from '../lib/sanity'
import s from '../styles/TagList.module.css'
export default function Certifications({ list }) {
	return list.map((item) => {
		return (
			<div
				className={s.tag}
				key={item.name}>
				<h4>{item.name}</h4>
				<img
					src={urlFor(item.icon.asset._ref)}
					alt=''
				/>
			</div>
		)
	})
}
