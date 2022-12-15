import LeafletGeopointInput from 'sanity-plugin-leaflet-input'

export default {
	name: 'medlem',
	type: 'document',
	title: 'Medlems bedrift',

	fields: [
		/* ------------------------------ experimental ------------------------------ */
		{
			title: 'Tekst på sponsorkort',
			name: 'sponsorCardText',
			type: 'string',
		},

		{
			title: 'Tilknyttninger',
			name: 'connections',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'connections' },
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
			title: 'Hovedsamarbeidspartner?',
			name: 'MainSponsor',
			type: 'boolean',
		},
		{
			title: 'Samarbeidspartner?',
			name: 'SecondarySponsor',
			type: 'boolean',
		},
		{
			title: 'Tags',
			name: 'tag',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'tags' },
				},
			],
		},
		{
			title: 'Sertifiseringer',
			name: 'certifications',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'certifications' },
				},
			],
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
			of: [
				{
					type: 'contactPerson',
				},
			],
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
