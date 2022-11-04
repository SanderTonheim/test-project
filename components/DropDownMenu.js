import Link from 'next/link'
import { useEffect, useRef } from 'react'
import s from '../styles/DropDownMenu.module.css'

const DropDownMenu = () => {
	const refOne = useRef()

	const handleClickOutSide = (e) => {
		if (refOne.current == e.target) {
			console.log('click inside')
			console.log(e.target)
		} else {
			console.log('click outside')
			console.log(e.target)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutSide)
	}, [])

	return (
		<ul
			ref={refOne}
			className={s.ulContainer}
		>
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
