// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import medlem from './medlem'
import certifications from './certifications'
import contactPerson from './contactPerson'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import tags from './tags'
import connections from './connections'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		/* Your types here! */
		medlem,
		certifications,
		contactPerson,
		tags,
		connections,
	]),
})
