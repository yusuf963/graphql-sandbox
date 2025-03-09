import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLNonNull } from 'graphql'

import { laptops } from './data.js'
import { laptopType } from './types.js'

const LaptopQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        laptops: {
            type: new GraphQLList(laptopType),
            description: 'List of All Laptops',
            args: {
                limit: { type: GraphQLInt }
            },
            resolve: (parent, args) => {
                return args.limit ? laptops.slice(0, limit) : laptops
            }
        },
        laptop: {
            type: laptopType,
            description: 'A Single Laptop',
            args: { id: { type: GraphQLInt } },
            resolve: (parent, args) => laptops.find(laptop => laptop.id === args.id)
        }
    })
})

const LaptopMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addLaptop: {
            type: GraphQLNonNull(GraphQLBoolean),
            description: 'Add a laptop',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                brand: { type: GraphQLNonNull(GraphQLString) },
                price: { type: GraphQLNonNull(GraphQLInt) },
                cpuCore: { type: GraphQLList(GraphQLString) }
            },
            resolve: (parent, args) => {
                const newLaptop = {
                    id: laptops.length + 1,
                    name: args.name,
                    brand: args.brand,
                    price: args.price,
                    cpuCore: args.cpuCore
                }
                laptops.push(newLaptop)
                return true
            }
        },
    })
})

const laptopSchema = new GraphQLSchema({
    query: LaptopQueryType,
    mutation: LaptopMutationType
})

export { laptopSchema }