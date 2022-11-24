import styles from '../styles/Home.module.css'
import s2_1 from '../assets/pic_s2_1.jpg'
import image_s3 from '../assets/image_s3.jpg'
import Image from 'next/image'
import Search from '../components/search'

export default function Home() {
	return (
		<main className={styles.mainContainer}>
			<section className={styles.section_1}>
				<div className={styles.s1_content}>
					<h1 className={styles.s1_header}>Plant Land</h1>
					<div className={styles.s1_text}>
						<p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the universe.</p>
					</div>
				</div>
			</section>
			<section className={(styles.section, styles.section_2)}>
				<h2 className={styles.header}>The hidden secrets</h2>
				<div className={styles.content}>
					<div className={styles.s2_image}>
						<Image
							src={s2_1}
							alt='plant'
							layout='responsive'
						/>
					</div>

					<div className={styles.text}>
						<p>
							Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
							which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the
							Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
							combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,
							or non-characteristic words etc.
						</p>
					</div>
				</div>
			</section>

			<section className={(styles.section, styles.section_3)}>
				<h2 className={styles.header}>On the move</h2>
				<div className={styles.content}>
					<div className={styles.s3_image}>
						<Image
							src={image_s3}
							alt='pla'
							layout='responsive'
						/>
					</div>

					<div className={styles.text}>
						<p>
							But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual
							teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,o do not know how to pursue pleasure rationally
							encounter consequences because it is pleasure, but because those wh
						</p>
						<br />
					</div>
				</div>
			</section>
		</main>
	)
}
