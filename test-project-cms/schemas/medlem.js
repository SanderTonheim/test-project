import LeafletGeopointInput from 'sanity-plugin-leaflet-input'

export default {
	name: 'medlem',
	type: 'document',
	title: 'Medlems bedrift',
	fields: [
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
			type: 'string',
		},
		{
			title: 'E-post',
			name: 'email',
			type: 'string',
		},
		{
			title: 'Telefon',
			name: 'phone',
			type: 'number',
		},
		{
			name: 'website',
			title: 'Nettside',
			type: 'url',
		},
		{
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [{ type: 'string' }],
		},

		{
			title: 'Text',
			name: 'text',
			type: 'string',
			of: [{ type: 'block' }],
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
