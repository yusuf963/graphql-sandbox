import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLNonNull, isNonNullType } from 'graphql'

import { players, authors, books } from './data.js'
import { BookType, AuthorType, PlayerType } from './types.js'
import { resolvers } from './helper.js'

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        books: {
            type: new GraphQLList(BookType),
            description: 'List of All Books',
            resolve: () => resolvers.Query.books
        },
        book: {
            type: BookType,
            description: 'A Single Book',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: resolvers.Query.book
        },

        authors: {
            type: new GraphQLList(AuthorType),
            description: 'List of All Authors',
            resolve: () => resolvers.Query.authors
        },
        author: {
            type: AuthorType,
            description: 'A Single Author',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: resolvers.Query.author
        },

        players: {
            type: new GraphQLList(PlayerType),
            description: 'List of All Football Players',
            args: {
                limit: { type: GraphQLInt },
                orderBy: { type: GraphQLInt },
            },
            resolve: (parent, args) => {
                console.log(args)
                console.log(parent)
                const result = args.limit ? players.slice(0, args.limit) : players
                if (args.orderBy) {
                    result.sort((a, b) => {
                        if (a[args.orderBy] < b[args.orderBy]) {
                            return -1
                        }
                        if (a[args.orderBy] > b[args.orderBy]) {
                            return 1
                        }
                        return 0
                    })
                }
                return result
            }
        },
        player: {
            type: PlayerType,
            description: 'A Single Football Player',
            args: { id: { type: GraphQLInt }},
            resolve: resolvers.Query.player
        }
    })
})

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addBook: {
            type: BookType,
            description: 'Add a book',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                authorId: { type: GraphQLNonNull(GraphQLInt) }
            },
            resolve: (parent, args) => {
                const book = { id: books.length + 1, name: args.name, authorId: args.authorId }
                books.push(book)
                return book
            }
        },
        addAuthor: {
            type: AuthorType,
            description: 'Add an author',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: (parent, args) => {
                const author = { id: authors.length + 1, name: args.name }
                authors.push(author)
                return author
            }
        },
        addPlayer: {
            type: GraphQLNonNull(GraphQLBoolean),
            description: 'Add a player',
            args: {
                firstName: { type: GraphQLNonNull(GraphQLString) },
                lastName: { type: GraphQLNonNull(GraphQLString) },
                middleName: { type: GraphQLString },
                age: { type: GraphQLNonNull(GraphQLInt) },
                position: { type: GraphQLNonNull(GraphQLString) },
                team: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: (parent, args) => {
                const newPlayer = {
                    id: players.length + 1,
                    name: { firstName: args.firstName, lastName: args.lastName, middleName: args.middleName },
                    age: args.age,
                    position: args.position,
                    team: args.team
                }
                players.push(newPlayer)
                return true
            }
        }
    })
})

const allSchema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

export { allSchema }