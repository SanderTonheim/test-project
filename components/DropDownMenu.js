import Link from 'next/link'
import { useEffect, useRef } from 'react'
import s from '../styles/DropDownMenu.module.css'

const DropDownMenu = () => {
	return (
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
	)
}

export default DropDownMenu
