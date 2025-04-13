import { players, authors, books } from './data.js'


function resolverHelper(records, args) {
    return records.find(record => record.id === args.id)
}


export const resolvers = {
    Query: {
        players: () => players,
        authors: () => authors,
        books: () => books,
        player: (_, args) => resolverHelper(players, args),
        author: (_, args) => resolverHelper(authors, args),
        book: (_, args) => resolverHelper(books, args)
    },
    Mutation: {
        addPlayer: (_, args) => {
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
}