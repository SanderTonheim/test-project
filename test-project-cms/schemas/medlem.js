import LeafletGeopointInput from 'sanity-plugin-leaflet-input'

export default {
	name: 'medlem',
	type: 'document',
	title: 'Medlems bedrift',

	fields: [
		/* ------------------------------ experimental ------------------------------ */
		{
			title: 'Tag liste',
			name: 'tagList',
			type: 'array',
			of: [{ type: 'string' }],
			fieldsets: [{ name: 'Tags' }],
			options: {
				editmodal: 'fullscreen',
				list: [
					{ title: 'Bygg & Anlegg', value: 'Bygg & Anlegg' },
					{ title: 'Økonomi & Investering', value: 'Finans & Investering' },
					{ title: 'Havbruk', value: 'Havbruk' },
					{ title: 'Handel & Service', value: 'Handel & Service' },
					{ title: 'IKT', value: 'IKT' },
					{ title: 'Media & Kommunikasjon', value: 'ServMedia & Kommunikasjonice' },
					{ title: 'Olje & Gass', value: 'Olje & Gass' },
					{ title: 'Reiseliv', value: 'Reiseliv' },
					{ title: 'Rådgivning', value: 'Rådgivning' },
					{ title: 'Infrastruktur & Eiendom', value: 'Infrastruktur & Eiendom' },
					{ title: 'Offentlig', value: 'Offentlig' },
					{ title: 'Kultur', value: 'Kultur' },
					{ title: 'Kunst & Håndverk', value: 'Kunst & Håndverk' },
					{ title: 'Maritim', value: 'Maritim' },
					{ title: 'Matproduksjon', value: 'Matproduksjon' },
					{ title: 'Transport', value: 'Transport' },
					{ title: 'Utdanning', value: 'Utdanning' },
					{ title: 'Industri', value: 'Industri' },
				],
			},
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
		/* --------------------------------- stabil --------------------------------- */

		{
			title: 'Navn',
			name: 'name',
			type: 'string',
		},
		{
			title: 'Hovedsamarbeidspartner?',
			name: 'sponsor',
			type: 'boolean',
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
