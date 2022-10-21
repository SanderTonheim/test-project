import Image from 'next/image'
import pic1 from '../asssets/knut.jpg'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<main>
			<h1>Velkommen </h1>

			<section className={styles.flex_block_1}>
				<div className={styles.item_1}>
					<Image src={pic1} width={3217} height={3741} />
				</div>
				<div className={styles.item_2}>asasdasdad</div>
			</section>
		</main>
	)
}
