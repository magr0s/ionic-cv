import { reactive } from 'vue';

interface Book {
    isbin: string; // unique
    book: string;
    author: string;
    publisher: string;
    year: string;
}

const books: Book[] = [
    {
        isbin: '111-000-111',
        book: 'Captain\'s daughter',
        author: 'Pushkin A.S',
        publisher: 'San Diego',
        year: '1982'
    },
    { isbin: '111-000-222', book: 'Kapitanning qizi', author: 'Pushkin A.S', publisher: 'Tashkent', year: '1945' },
    { isbin: '111-000-333', book: 'Капитанская дочка', author: 'Пушкин А.С.', publisher: 'Москва', year: '1835' }
];

const library = reactive({
    books
});

const getBooks = (): Book[] => library.books || [];
const addBook = (payload: Book) => library.books.push(payload);
const removeBook = (idx: number) => library.books.splice(idx, 1);

export {
    getBooks,
    addBook,
    removeBook
}
