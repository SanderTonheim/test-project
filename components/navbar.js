import Link from 'next/link'
import style from '../styles/Navbar.module.css'

export default function Navbar() {
	return (
		<div className={style.navbar}>
			<div className={style.links}>
				<Link href='/'>Hjem</Link>
				<Link href='/about'>About</Link>
			</div>
		</div>
	)
}
