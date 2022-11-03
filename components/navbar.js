import Image from 'next/image'
import Link from 'next/link'
import s from '../styles/Navbar.module.css'
import Logo from '../assets/logo.svg'
import menuIcon from '../assets/menu-icon.png'
import DropDownMenu from './DropDownMenu'
import { useState } from 'react'

export default function Navbar() {
	const [open, setOpen] = useState(false)
	const toggle = () => {
		{
			setOpen(!open)
		}
		console.log(open)
	}
	return (
		<>
			<div className={s.navbar}>
				<div className={s.logo}>
					<Image
						src={Logo}
						width={1600}
						height={1041}
						alt=''
					/>
				</div>

				<div className={s.menu}>
					<Image
						src={menuIcon}
						width={30}
						height={25}
						onClick={toggle}
					/>
				</div>
				<div className={s.links}>
					<Link href='/'>Hjem</Link>
					<Link href='/profile'>About</Link>
					<Link href='/prosjektet'>Prosjektet</Link>
				</div>
			</div>
			{open ? <DropDownMenu className={s.dropDownMenu} /> : null}
		</>
	)
}
