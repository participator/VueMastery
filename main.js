var app = new Vue({
    el: '#app',
    data: {
        altText: 'A pair of socks',
        cart: 0,
        description: 'The pair of socks to wear today.',
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        inStock: true,
        inventory: 35,
        onSale: true,
        product: 'Socks',
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        sizes: [
            {
                id: 0,
                name: 'x-small'
             },
             {
                 id: 1,
                 name: 'small',
             },
             {
                 id: 2,
                 name: 'meduim',
             },
             {
                 id: 3,
                 name: 'large',
             },
             {
                 id: 4,
                 name: 'x-large',
             },
             {
                 id: 5,
                 name: 'xx-large'
             }
        ],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
            }
        ]
    },
    methods: {
        addToCart() {
            this.cart++;
        },
        removeFromCart() {
            this.cart--;
        },
        updateImage(currentImage) {
            this.image = currentImage;
        }
    }
})