import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/Navbar.module.css'
import Logo from '../asssets/logo.png'

export default function Navbar() {
	return (
		<div className={style.navbar}>
			<Image src={Logo} width={70} height={100} />

			<div className={style.links}>
				<Link href='/'>Hjem</Link>
				<Link href='/about'>About</Link>
				<Link href='/prosjektet'>Prosjektet</Link>
			</div>
		</div>
	)
}
