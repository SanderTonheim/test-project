import urlFor from '../lib/sanity'
import s from '../styles/tags.module.css'

export default function Tags({ list }) {
	return list.map((tag) => {
		return (
			<div
				className={s.container}
				key={tag._id}>
				{tag.Name}
				<img
					key={tag.name}
					src={urlFor(tag.icon.asset._ref)}
					alt='tags'
				/>
			</div>
		)
	})
}
