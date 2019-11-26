// const Knex = require('knex')
// const connection = require('../knexfile')
// const { Model } = require('objection')

// const knexConnection = Knex(connection)

// Model.knex(knexConnection)

// class Favorite extends Model {
//     static get tableName () {
//         return 'favorites'
//     }

//     static get relationMappings () {
//         const { User } = require('./user')
//         return {
//             user: {
//                 relation: Model.belongsToOneRelation,
//                 modelClass: User,
//                 join: {
//                     from: 'favorites.users_id',
//                     to: 'users.id'
//                 }
//             }
//         }
//     }
// }

// module.exports = {
//     Favorite
// }