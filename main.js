Vue.component('product', {
    props: {
        premium: {
            required: true,
            type: Boolean,
        }
    },
    template: `
        <div class="product">
            <div class="product-image">
                <img v-bind:src="image" v-bind:alt="altText">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <span class="product-special" v-show="onSale">On Sale!</span>
                <p>{{ salePhrase }}</p>
                <p v-if="!!inStock && variants[selectedVariant].variantQuantity > 10">In Stock</p>
                <p v-else-if="!!inStock && variants[selectedVariant].variantQuantity <= 10 && variants[selectedVariant].variantQuantity > 0">
                    Almost Sold Out!
                </p>
                <p v-else v-bind:class="classObject">
                    <span v-show="!!inStock">∅</span>
                    Out of Stock 
                </p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div class="color-box"
                    v-for="(variant, index) in variants"
                    v-bind:key="variant.variantId"
                    v-bind:style="{ backgroundColor: variant.variantColor }"
                    v-on:mouseover="updateProduct(index)"
                >
                </div>

                <div>Shipping Cost: {{ shippingCost }}</div>

                <div>
                    <button 
                        v-bind:class="{ disabledButton: !!!inStock }"
                        v-bind:disabled="!!!inStock"
                        v-on:click="addToCart">
                        Add to Cart
                    </button>
                    <button 
                        class="button_red"
                        v-bind:class="{ disabledButton: cart <= 0 }"
                        v-bind:disabled="cart <= 0"
                        v-on:click= "removeFromCart">
                        Remove from Cart
                    </button>
                    <p class="cart">Cart ({{ cart }})</p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
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
        };
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
        },
        shippingCost() {
            return this.premium ? 'free' : '2.99';
        }
    }
})

Vue.component('product-details', {
    props: {
        details: {
            required: true,
            type: Object
        }
    },
    template: `<div>{{ showDetails }}</div>`,
    computed: {
        showDetails() {
            let details = '';
            for(item in this.details) {
                details += '<p>Prop: ' + item + ' Value: ' + this.details[item] + ' </p>';
            }
            return details;
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premiumRoot: true,
        detailsRoot: {
            color: 'blue',
            number: 100,
            size: 'x-large',
            honest: true
        }
    }
});