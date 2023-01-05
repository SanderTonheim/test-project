import s from '../styles/ContactPerson.module.css'
import icon from '../assets/icons/index'
import Link from 'next/link'

export default function ContactPerson({ list, website, address }) {
	return (
		<>
			{list.map((contact) => {
				return (
					<ul
						key={contact._key}
						className={s.container}>
						{contact.department > 1 ? <h3>{contact.department}</h3> : ''}

						{contact?.name.length > 1 ? (
							<div className={s.name}>
								<img
									className={s.icon}
									src={icon.name.src}
									alt='nameIcon'
								/>
								{contact.name}
							</div>
						) : (
							''
						)}
						{contact.phone > 0 ? (
							<div className={s.phone}>
								<img
									className={s.icon}
									src={icon.phone.src}
									alt='phoneIcon'
								/>
								{contact.phone}
							</div>
						) : (
							''
						)}
						{contact.mail?.length > 0 ? (
							<div className={s.mail}>
								<img
									className={s.icon}
									src={icon.mail.src}
									alt='mailIcon'
								/>
								{contact.mail}
							</div>
						) : (
							''
						)}

						{address.length > 0 ? (
							<div className={s.name}>
								<img
									className={s.icon}
									src={icon.address.src}
									alt='addressIcon'
								/>
								{address}
							</div>
						) : (
							''
						)}
					</ul>
				)
			})}
			{website?.length > 0 ? (
				<div className={s.website}>
					<img
						className={s.icon}
						src={icon.website.src}
						alt='websiteIcon'
					/>
					<Link href={website}> {website}</Link>
				</div>
			) : (
				''
			)}
		</>
	)
}
