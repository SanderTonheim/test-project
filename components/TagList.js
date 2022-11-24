import { urlFor } from '../lib/sanity'
import s from '../styles/TagList.module.css'
export default function Tags({ TagList }) {
	console.log(TagList)
	return TagList.map((tag) => {
		return (
			<div className={s.tag}>
				<h3>{tag.tag_Name}</h3>
				<img
					src={urlFor(tag.tag_Pic.asset._ref)}
					alt=''
				/>
			</div>
		)
	})
}
