import { createClient } from 'next-sanity'
import { config } from './config'

export const sanityClient = createClient(config)

export const previewClient = createClient({
	...config,
	useCdn: false,
	token:
		'skqYew07RIpXh0ZSvIjVM3dYyuw7Yu1AKssD39sswaLEH62DcNSe3RU30w6GP9SB8LByM2oOhDtM119m50S9a3Uce2ESsIF4qEOfc5DF8g92eTqvNsZne71wgBHhB4H8hHCnCWwaUB5I5SlmlwBXiNawzNlesnvF5E9HwUymfS5wVXOfYBd3',
})

export const getClient = (usePreview) =>
	usePreview ? previewClient : sanityClient
