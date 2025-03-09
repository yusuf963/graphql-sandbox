const authors = [
    { id: 1, name: 'J. K. Rowling' },
    { id: 2, name: 'J. R. R. Tolkien' },
    { id: 3, name: 'Brent Weeks' }
]

const books = [
    { id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
    { id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
    { id: 3, name: 'Harry Potter and the Goblet of Fire', authorId: 1 },
    { id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
    { id: 5, name: 'The Two Towers', authorId: 2 },
    { id: 6, name: 'The Return of the King', authorId: 2 },
    { id: 7, name: 'The Way of Shadows', authorId: 3 },
    { id: 8, name: 'Beyond the Shadows', authorId: 3 }
]

const players = [
    { id: 1, name: { firstName: 'Lionel', lastName: 'Messi', middleName: 'Leo' }, age: 36, position: 'Forward', team: 'Inter Miami' },
    { id: 2, name: { firstName: 'Cristiano', lastName: 'Ronaldo' }, age: 39, position: 'Forward', team: 'Al Nassr' },
    { id: 3, name: { firstName: 'Kylian', lastName: 'Mbappé' }, age: 25, position: 'Forward', team: 'Paris Saint-Germain' },
    { id: 4, name: { firstName: 'Kevin', lastName: 'De Bruyne' }, age: 32, position: 'Midfielder', team: 'Manchester City' }
]

const laptops = [
    { id: 1, name: 'Macbook Pro', brand: 'Apple', price: 2000, cpuCore: ['i5', 'i7'] },
    { id: 2, name: 'XPS 13', brand: 'Dell', price: 1500, cpuCore: ['i5', 'i7'] },
    { id: 3, name: 'Surface Laptop 3', brand: 'Microsoft', price: 1200, cpuCore: ['i5', 'i7'] },
    { id: 4, name: 'ThinkPad X1 Carbon', brand: 'Lenovo', price: 1300, cpuCore: ['i5', 'i7'] }
]

export { authors, books, players, laptops }