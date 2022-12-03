import urlFor from '../lib/sanity'

export default function Tags({ list }) {
	return list.map((tag) => {
		console.log()
		return (
			<ul>
				<li>{tag.tagList}</li>
				<div>{urlFor(tag.tagIcon.asset._ref)}</div>
			</ul>
		)
	})
}
