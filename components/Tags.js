import s from '../styles/TagList.module.css'
export default function Certifications({ list }) {
	return list.map((item) => {
		console.log(item)
		return (
			<div
				className={s.tag}
				key={name}>
				<h4>{item}</h4>
			</div>
		)
	})
}
