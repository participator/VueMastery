var app = new Vue({
    el: '#app',
    data: {
        altText: 'A pair of socks',
        brand: 'Vue Mastery',
        cart: 0,
        description: 'The pair of socks to wear today.',
        onSale: true,
        product: 'Socks',
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        selectedVariant: 0,
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
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0
            }
        ],
        classObject: {
            outOfStock: true
        }
    },
    methods: {
        addToCart() {
            this.cart++;
        },
        removeFromCart() {
            this.cart--;
        },
        updateProduct(index) {
            console.log('[updateProduct]', index)
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        salePhrase() {
            if (this.onSale)
                return `${this.brand} says hurry while ${this.variants[this.selectedVariant].variantColor} 
                ${this.product.toLowerCase()} last!`
        }
    }
})