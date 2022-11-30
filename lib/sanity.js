import { config } from './config'
import imageUrlBuilder from '@sanity/image-url'
import { createPreviewSubscriptionHook, createCurrentUserHook } from 'next-sanity'

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const useCurrentUser = createCurrentUserHook(config)

const builder = imageUrlBuilder(config)

export default function urlFor(source) {
	return builder.image(source)
}
