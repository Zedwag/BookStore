export default class BookstoreService {

    data = [
        { 
            id: 1,
            title: 'Angels and Demons',
            author: 'Dan Brown',
            price: 14,
            coverImage: "https://english-films.com/uploads/posts/2018-03/1521037875_angels-and-demons-brown.jpg"
        },
        { 
            id: 2,
            title: "One Flew over the Cuckoo's Nest",
            author: 'Ken Kesey',
            price: 9,
            coverImage: "https://i.pinimg.com/736x/84/0a/78/840a78c0b462ce8c623ea45580b841f9--the-nest-book-design.jpg"
        },
        {
            id: 3,
            title: "The Minds of Billy Milligan",
            author: "Daniel Keyes",
            price: 11,
            coverImage: "https://kbimages1-a.akamaihd.net/1a949dd2-ca0a-4c98-b7d2-73bfc5ad72ef/1200/1200/False/the-minds-of-billy-milligan-2.jpg"
        },
        {
            id: 4,
            title: "Eugene Onegin",
            author: "Alexander Pushkin",
            price: 13,
            coverImage: "https://img.yakaboo.ua/media/catalog/product/i/m/img624_1.jpg"
        },
        {
            id: 5,
            title: "The Alchemist",
            author: "Paulo Coelho",
            price: 7,
            coverImage: "https://img.buzzfeed.com/buzzfeed-static/static/2015-09/4/12/enhanced/webdr14/original-8582-1441384161-3.jpg?crop=739:1109;0,12"
        },
        {
            id: 6,
            title: "The War of the Worlds",
            author: "Herbert Wells",
            price: 12,
            coverImage: "https://www.litres.ru/static/bookimages/44/43/84/44438402.bin.dir/44438402.cover.jpg"
        },
        {
            id: 7,
            title: "The Great Gatsby",
            author: "Francis Scott Fitzgerald",
            price: 14,
            coverImage: "https://i.pinimg.com/736x/51/ac/83/51ac83d6099359ca9066f154f031fc0c.jpg"
        }
    ]

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.data), 900)
        })
    }

}