import Link from 'next/link'
import s from '../styles/dropDownMenu.module.css'

const DropDownMenu = () => {
	return (
		<ul className={s.menu}>
			<li>
				<Link href='/'>Hjem</Link>
			</li>
		</ul>
	)
}

export default DropDownMenu
