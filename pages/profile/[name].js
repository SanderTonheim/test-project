import Image from 'next/image'
import styles from '../../styles/idPage.module.css'
import placeholder from '../../assets/owner_placeholder.svg'

export const getStaticPaths = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()
	const paths = data.map((profile) => {
		return {
			params: {
				name: profile.id.toString(),
			},
		}
	})
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async (context) => {
	const id = context.params.id.toString()
	const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
	const data = await res.json(data)
	console.log(data)
	return data
}

const Details = (getStaticProps, data) => {
	console.log(getStaticProps)
	console.log(data)
	return <div>{props.data}</div>
}

export default Details
