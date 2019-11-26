const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)

Model.knex(knexConnection)


class Favorite extends Model {
    static get tableName () {
        return 'favorites'
    }

    static get relationMappings () {
        const { User } = require('./user')
        return {
            user: {
                relation: Model.belongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'favorites.users_id',
                    to: 'users.id'
                }
            }
        }
    }
}

class User extends Model {
    static get tableName () {
        return 'users'
    }

    static get relationMappings () {
        const { Favorite } = require('./favorite')
        return {
            favorites: {
                relation: Model.HasManyRelation,
                modelClass: Favorite,
                join: {
                    from: 'users.id',
                    to: 'favorites.users_id'
                }
            }
        }
    }
}

module.exports = { User, Favorite }