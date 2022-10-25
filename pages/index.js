import styles from '../styles/Home.module.css'
import s2_1 from '../asssets/pic_s2_1.jpg'
import image_s3 from '../asssets/image_s3.jpg'
import Image from 'next/image'

export default function Home() {
	return (
		<main>
			<section className={styles.section_1}>
				<div className={styles.content}>
					<h1 className={styles.header}>Velkommen</h1>
					<div className={styles.item_1}>
						<p>
							What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
							printing and typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to make a
							type specimen book. It has survived not only.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.section_2}>
				<div className={styles.s2_content}>
					<div className={styles.s2_image}>
						<Image
							src={s2_1}
							alt='plant'
						/>
					</div>

					<div className={styles.s2_text}>
						<span className={styles.s2_header_text}>
							<h2>lskdfjksdf sdfsdsd</h2>
						</span>
						<p>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using 'Content here,
							content here', making it look like readable English. Many desktop
							publishing packages and web page editors now use Lorem Ipsum as
							their default model text, and a search for 'lorem ipsum' will
							uncover many web sites still in their infancy. Various versions
							have evolved over the years, sometimes by accident, sometimes on
							purpose (injected humour and the like).
						</p>
						<p>
							Where can I get some? There are many variations of passages of
							Lorem Ipsum available, but the majority have suffered alteration
							in some form, by injected humour, or randomised words which don't
							look even slightly believable. If you are going to use a passage
							of Lorem Ipsum, you need to be sure there isn't anything
							embarrassing hidden in the middle of text. All the Lorem Ipsum
							generators on the Internet tend to repeat predefined chunks as
							necessary, making this the first true generator on the Internet.
							It uses a dictionary of over 200 Latin words, combined with a
							handful of model sentence structures, to generate Lorem Ipsum
							which looks reasonable. The generated Lorem Ipsum is therefore
							always free from repetition, injected humour, or
							non-characteristic words etc.
						</p>
					</div>
				</div>
			</section>
			<div className={styles.s3_content}>
				<div className={styles.s3_image}>
					<Image
						src={image_s3}
						alt='plant'
					/>
				</div>

				<div className={styles.s3_text}>
					<span className={styles.s3_header_text}>
						<h2>lskdfjksdf sdfsdsd</h2>
					</span>
					<br />
					<p>
						But I must explain to you how all this mistaken idea of denouncing
						pleasure and praising pain was born and I will give you a complete
						account of the system, and expound the actual teachings of the great
						explorer of the truth, the master-builder of human happiness. No one
						rejects, dislikes, or avoids pleasure itself,o do not know how to
						pursue pleasure rationally encounter consequences because it is
						pleasure, but because those wh
					</p>
					<br />
				</div>
			</div>
		</main>
	)
}
