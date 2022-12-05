import urlFor from '../lib/sanity'
export default function Certifications({ list }) {
	return list.map((item) => {
		return (
			<div key={item.name}>
				<h4>{item.name}</h4>
				<img
					src={urlFor(item.icon.asset._ref)}
					alt=''
				/>
			</div>
		)
	})
}
