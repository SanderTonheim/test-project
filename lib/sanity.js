import React from 'react'
import { config } from './config'
import imageUrlBuilder from '@sanity/image-url'
import { createPreviewSubscriptionHook, createCurrentUserHook } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const useCurrentUser = createCurrentUserHook(config)

const builder = imageUrlBuilder(config)

export function urlFor(source) {
	return builder.image(source)
}
