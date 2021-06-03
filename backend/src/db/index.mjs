import knex from 'knex'
import configuration from '../../knexfile'

// const connection = knex(configuration.development)

// export default connection
const myknex = knex(configuration.development)
//const myknex = knex(knexfile.production)

export default myknex