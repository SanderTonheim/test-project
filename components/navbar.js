import Image from 'next/image'
import Link from 'next/link'
import s from '../styles/Navbar.module.css'
import Logo from '../assets/logo.svg'
import menuIcon from '../assets/menu-icon.png'
import DropDownMenu from './DropDownMenu'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
	/* ------------------------------- toggle menu ------------------------------ */
	const refOne = useRef()

	const handleClickOutSide = (e) => {
		if (refOne.current.contains(e.target)) {
		} else {
			setOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutSide)
	}, [])
	const [open, setOpen] = useState(false)

	const toggle = () => {
		{
			setOpen(!open)
		}
	}
	return (
		<>
			<div className={s.navbar}>
				<div className={s.logo}>
					<Image
						src={Logo}
						alt=''
						layout='responsive'
					/>
				</div>

				<div
					ref={refOne}
					className={s.menu}>
					<Image
						src={menuIcon}
						width={30}
						height={25}
						onClick={toggle}
						alt=''
					/>
				</div>
				<div className={s.links}>
					<Link href='/'>Hjem</Link>
					<Link href='/profile'>About</Link>
				</div>
			</div>
			<div className={s.ulContainer}>{open ? <DropDownMenu /> : ''}</div>
		</>
	)
}
