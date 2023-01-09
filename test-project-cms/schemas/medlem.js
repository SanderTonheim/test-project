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
			description: 'Bedrift navn som skal vises på siden.',
		},
		{
			title: 'Logo',
			name: 'logo',
			type: 'image',
			description: 'Legg til logo til bedriften.',
		},
		{
			title: 'Adresse',
			name: 'address',
			type: 'string',
			description: 'Legg til addressen til bedriften.',
		},
		{
			title: 'Post nummer',
			name: 'zip',
			type: 'string',
			description: 'Legg til postnummer til bedriften.',
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
			description: 'Legg til kontakt personer fra forskjellige avdelinger.',
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
			description: 'Legg til sertifiseringer til bedriften. Sertifiseringer vil bli vist i den rekkefølgen de ligger i. Dra sertifiseringene for å endre rekkefølge på de.',
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
			description: 'Legg til tilknyttninger som bedriften har.',
		},
		{
			title: 'Hovedsamarbeidspartner',
			name: 'MainSponsor',
			type: 'boolean',
			description: 'Aktiver om bedriften er hovedsammarbeidspartner. Dette vil også generere et kort under hovedsammarbeidspartnere på forisden.',
		},
		{
			title: 'Sponsorkort tekst',
			name: 'sponsorCardText',
			type: 'string',
			hidden: ({ document }) => !document?.MainSponsor,
			description: 'Skriv inn teksten som skal vises på hovedsammarbeidspartnerkortet på forsiden.',
		},
		{
			title: 'Samarbeidspartner',
			name: 'SecondarySponsor',
			type: 'boolean',
			description: 'Aktiver om bedriften er hovedsammarbeidspartner. Dette vil også generere et kort under sammarbeidspartnere på forisden.',
		},
		{
			title: 'Sponsorkort tekst',
			name: 'SecondarysponsorCardText',
			type: 'string',
			hidden: ({ document }) => !document?.SecondarySponsor,
			description: 'Skriv inn teksten som skal vises på sammarbeids kortet på forsiden.',
		},
		/* -------------------------------------------------------------------------- */

		{
			title: 'Kart visning',
			name: 'ActiveMap',
			type: 'boolean',
			description: 'Aktiver for å vise kartet på siden til bedriften.',
		},
		{
			title: 'Kart',
			name: 'location',
			type: 'geopoint',
			inputComponent: LeafletGeopointInput,
			hidden: ({ document }) => !document?.ActiveMap,
			description: 'Søk etter addressen til bedriften og plasser pinnen der bedriften holder til.',
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
			description: 'Legg til tags som angår bedriften. Tagsen vil bli vist i den rekkefølgen de ligger i. Dra tagsene for å endre rekkefølge på de. ',
		},

		{
			name: 'website',
			title: 'Nettside',
			type: 'url',
			description: 'Legg til lenke til hjemmesiden til bedriften.',
		},

		{
			title: 'Tekst',
			name: 'text',
			type: 'string',
			description: 'Tekst som skal vises på siden til bedriften.',
		},

		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name',
			},
			description: 'Klikk "generate" knappen for å automatisk legge til bedrift i medlemslisten.',
		},
	],
}
