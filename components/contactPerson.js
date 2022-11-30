export default function ContactPerson({ list }) {
	return (
		<>
			{list.map((item) => {
				return (
					<div>
						<ul>
							<li>{item.department}</li>
							<li>{item.name}</li>
							<li>{item.mail}</li>
							<li>{item.phone}</li>
						</ul>
					</div>
				)
			})}
		</>
	)
}
