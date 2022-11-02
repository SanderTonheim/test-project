import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Logo from '../assets/logo.svg'

export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<div className={styles.logo}>
				<Image
					src={Logo}
					width={1600}
					height={1041}
					alt=''
				/>
			</div>
			<div className={styles.links}>
				<Link href='/'>Hjem</Link>
				<Link href='/profile'>About</Link>
				<Link href='/prosjektet'>Prosjektet</Link>
			</div>
		</div>
	)
}
