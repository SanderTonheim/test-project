import Image from 'next/image'
import Link from 'next/link'
import s from '../styles/Navbar.module.css'
import Logo from '../assets/logo.svg'
import menuIcon from '../assets/menu-icon.png'
import DropDownMenu from './DropDownMenu'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
	/* ------------------------------- toggle menu ------------------------------ */

	const [open, setOpen] = useState()
	const toggle = () => {
		{
			setOpen(!open)
		}
	}
	/* -------------------------------------------------------------------------- */

	/* ----------------------- close when clicked out side ---------------------- */
	const menuRef = useRef()

	useEffect(() => {
		const listener = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setOpen(false)
				console.log(menuRef)
			}
		}
		// addEventListener('mousedown', listener)
		removeEventListener('mousedown', listener)
	})

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
			<div ref={menuRef}>
				{open ? <DropDownMenu className={s.dropDownMenu} /> : null}
			</div>
		</>
	)
}
