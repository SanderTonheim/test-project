import Link from 'next/link'
import s from '../styles/DropDownMenu.module.css'

const DropDownMenu = () => {
	return (
		<div  className={s.container}>
			<ul>
				<li>
					<Link href='/'>Hjem</Link>
				</li>
				<li>
					<Link href='/profile'>profile</Link>
				</li>
				<li>
					<Link href='/prosjektet'>prosjektet</Link>
				</li>
			</ul>
		</div>
	)
}

export default DropDownMenu
