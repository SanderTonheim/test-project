import LeafletGeopointInput from 'sanity-plugin-leaflet-input'

export default {
	name: 'medlem',
	type: 'document',
	title: 'Medlems bedrift',

	fields: [
		/* ------------------------------ experimental ------------------------------ */

		/* --------------------------------- stabil --------------------------------- */
		/* ---------------------------------- final --------------------------------- */
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
			title: 'Post nummer',
			name: 'zip',
			type: 'string',
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
		{
			title: 'Hovedsamarbeidspartner',
			name: 'MainSponsor',
			type: 'boolean',
		},
		{
			title: 'Sponsorkort tekst',
			name: 'sponsorCardText',
			type: 'string',
			hidden: ({ document }) => !document?.MainSponsor,
		},
		{
			title: 'Samarbeidspartner',
			name: 'SecondarySponsor',
			type: 'boolean',
		},
		{
			title: 'Sponsorkort tekst',
			name: 'SecondarysponsorCardText',
			type: 'string',
			hidden: ({ document }) => !document?.SecondarySponsor,
		},
		/* -------------------------------------------------------------------------- */

		{
			title: 'Kart visning',
			name: 'ActiveMap',
			type: 'boolean',
		},
		{
			title: 'Kart',
			name: 'location',
			type: 'geopoint',
			inputComponent: LeafletGeopointInput,
			hidden: ({ document }) => !document?.ActiveMap,
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
