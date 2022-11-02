import Image from 'next/image'
import Link from 'next/link'
import s from '../styles/Navbar.module.css'
import Logo from '../assets/logo.svg'
import menuIcon from '../assets/menu-icon.png'

export default function Navbar() {
	return (
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
				/>
			</div>
			<div className={s.links}>
				<Link href='/'>Hjem</Link>
				<Link href='/profile'>About</Link>
				<Link href='/prosjektet'>Prosjektet</Link>
			</div>
		</div>
	)
}
