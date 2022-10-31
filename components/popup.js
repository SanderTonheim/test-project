import s from '../styles/popup.module.css'
export default function PopUp({ name }) {
	return <button className={s.OpenModalBtn}>{name}</button>
}
