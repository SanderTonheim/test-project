import s from '../styles/TagList.module.css'
export default function Certifications({ list }) {
	return list.map((item) => {
		return (
			<div
				className={s.tag}
				key={item}>
				<h4>{item}</h4>
			</div>
		)
	})
}
