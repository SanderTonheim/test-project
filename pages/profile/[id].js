import Image from 'next/image'
import owner from '../../assets/owner_placeholder.jpg'
import s from '../../styles/idPage.module.css'

export async function getStaticPaths() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()

	const paths = data.map((data) => ({
		params: { id: data.id.toString() },
	}))
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const id = params.id
	const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
	const data = await res.json()
	return {
		props: {
			data,
		},
	}
}

/* -------------------------------------------------------------------------- */
/*                                  rendering                                 */
/* -------------------------------------------------------------------------- */

function Page({ data }) {
	return (
		<>
			<div className={s.container}>
				<section className={s.content}>
					<header className={s.header}>
						<h1 className={s.company_name}>{data.company.name}</h1>
					</header>
					<section className={s.main}>
						<section className={s.owner_container}>
							<Image
								className={s.image}
								src={owner}
								quality={10}
								alt='owner'
							/>
							<div className={s.owner_name}>
								<p>
									Eier av selskapet:
									<b>{data.name}</b>
								</p>
							</div>
						</section>

						<div className={s.text_section}>
							<p className={s.text}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Perspiciatis, cum? Eum eius ut rerum repudiandae placeat
								deleniti at incidunt, quam dignissimos, illum aspernatur et
								tempora, expedita neque cupiditate facere nesciunt! Recusandae
								mollitia doloremque fuga magni, hic ipsa neque ullam modi
								maiores optio! Odio illo laudantium, provident veniam adipisci
								enim ipsum recusandae eos exercitationem vero harum obcaecati
								iusto asperiores ullam deleniti. Quia, cupiditate voluptas!
								Laboriosam ab praesentium laborum vero accusantium eius
								distinctio veniam sunt eaque tempora, aliquid eos ipsum quae
								nostrum. Aliquam id voluptatem officia quae dicta numquam ipsam
								velit libero. Possimus, at quasi? Ea a minus obcaecati sunt ab
								perferendis? Aliquid laborum impedit tenetur quos aliquam modi
								iusto commodi soluta saepe, voluptatem aspernatur reprehenderit
								esse amet qui perspiciatis corporis? Dicta! oris quia voluptate
								ratione aliquam odit debitis esse nesciunt molestiae vero
								dolore, exercitationem architecto possimus ab facilis numquam
								amet veniam distinctio nihil necessitatibus? Dolore, nostrum!
							</p>
						</div>
					</section>
					<section className={s.contact_info}>
						<ul>
							<li>
								Addresse: {data.address.street}, {data.address.city}
							</li>
							<li>Telefon: {data.address.zipcode}</li>
						</ul>
					</section>
					{/* <Map /> */}
					<div id='map'>
						<render />
					</div>
					<section className={s.map_container}>
						<p>Finn oss på Google maps.</p>
					</section>
				</section>
			</div>
		</>
	)
}
export default Page
