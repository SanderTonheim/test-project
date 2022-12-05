import urlFor from '../lib/sanity'
import s from '../styles/tags.module.css'

export default function Tags({ list }) {
	return list.map((tag) => {
		return (
			<div className={s.container}>
				{tag.Name}
				<img
					src={urlFor(tag.icon.asset._ref)}
					alt='tags'
				/>
			</div>
		)
	})
}
