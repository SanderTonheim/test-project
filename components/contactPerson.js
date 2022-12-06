export default function ContactPerson({ list }) {
	return (
		<>
			{list.map((item) => {
				return (
					<ul key={item._key}>
						{item.department.length > 1 ? <li>{item.department}</li> : ''}
						{item.name > 0 ? <li>{item.name}</li> : ''}
						{item.mail.length > 0 ? <li>{item.mail}</li> : ''}
						{item.phone > 0 ? <li>{item.phone}</li> : ''}
					</ul>
				)
			})}
		</>
	)
}
