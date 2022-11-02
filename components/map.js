import Script from 'next/script'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import s from '../styles/map.module.css'
import { useEffect } from 'react'

export function Map() {
	return (
		<div id='map'>
			<Script src='https://unpkg.com/leaflet@1.9.2/dist/leaflet.css' />
			<Script src='https://unpkg.com/leaflet@1.9.2/dist/leaflet.js' />
			<MapContainer
				center={[51.505, -0.09]}
				zoom={13}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={[51.505, -0.09]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}

function render() {
	return <div suppressHydrationWarning={true}>{typeof window && <Map />}</div>
}

export default render
