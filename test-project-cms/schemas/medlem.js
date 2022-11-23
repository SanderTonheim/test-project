import LeafletGeopointInput from 'sanity-plugin-leaflet-input'

export default {
	name: 'medlem',
	type: 'document',
	title: 'Medlems bedrift',

	fields: [
		/* ------------------------------ experimental ------------------------------ */
		{
			title: 'Tag liste',
			name: 'tags',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'tag' },
				},
			],
		},
		/* --------------------------------- stabil --------------------------------- */

		{
			title: 'Navn',
			name: 'name',
			type: 'string',
		},
		{
			title: 'Logo',
			name: 'logo',
			type: 'image',
		},
		{
			title: 'Adresse',
			name: 'address',
			type: 'string',
		},
		{
			title: 'Post sted',
			name: 'zip',
			type: 'string',
		},
		{
			title: 'Kart',
			name: 'location',
			type: 'geopoint',
			inputComponent: LeafletGeopointInput,
		},

		{
			title: 'Kontakt person',
			name: 'contactPerson',
			type: 'array',
			of: [{ type: 'contactPerson' }],
		},
		{
			name: 'website',
			title: 'Nettside',
			type: 'url',
		},

		{
			title: 'Text',
			name: 'text',
			type: 'string',
		},

		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name',
			},
		},
	],
}
