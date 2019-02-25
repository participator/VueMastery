var app = new Vue({
    el: '#app',
    data: {
        description: 'The pair of socks to wear today.',
        product: 'Socks',
        altText: 'A pair of socks',
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        inStock: true,
        inventory: 35,
        onSale: true,
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
                variantColor: 'green'
            },
            {
                variantId: 2235,
                variantColor: 'blue'
            }
        ]
    }
})