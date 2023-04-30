<template>
    <div class="cart">
        <div class="cart__inner">
            <div class="cart__header">
                <div class="cart__title">
                    Cart
                    (<div class="cart__number">
                        {{ length() }}
                    </div>)
                </div>
                <div class="cart__close" @click="toggle">
                    <img src="@/assets/img/close-icon.png">
                </div>
            </div>
            <div class="cart__empty" v-if="!emptyCart">
                Cart is empty!
            </div>
            <div class="cart__list" v-if="emptyCart">
                <div class="cart__list-header">
                    <div class="cart-header-item">

                    </div>
                    <div class="cart-header-item">
                        Name
                    </div>
                    <div class="cart-header-item">
                        QTY
                    </div>
                    <div class="cart-header-item">
                        Price
                    </div>
                    <div class="cart-header-item">
                        Total
                    </div>
                    <div class="cart-header-item">

                    </div>
                </div>
                <div class="cart__item" v-for="(cart_item, i) in cart" :key="i">
                    <div class="cart__item-property cart__item-image"
                        :style="{ backgroundImage: 'url(\'' + require('@/assets/img/' + cart_item.item.details.image + '') + '\')' }">
                    </div>
                    <div class="cart__item-property cart__item-name">
                        {{ cart_item.item.details.name }}
                    </div>
                    <div class="cart__item-property cart__item-qty">
                        {{ cart_item.qty }}
                    </div>
                    <div class="cart__item-property cart__item-price">
                        {{ cart_item.item.details.price }}
                    </div>
                    <div class="cart__item-property cart__item-total">
                        {{ (cart_item.qty * cart_item.item.details.price).toFixed(2) }}
                    </div>
                    <div class="cart__item-property cart__item-delete" @click="remove(i)">
                        <img src="@/assets/img/close-icon.png">
                    </div>
                </div>
            </div>
            <div class="cart__checkout" v-if="emptyCart">
                <div class="cart__total">
                    Subtotal:
                    <div class="cart__total-amount">
                        {{ total() }}
                    </div>
                </div>
                <div class="cart__button btn">
                    Checkout →
                </div>
            </div>
            <a class="cart__button btn" v-if="!emptyCart" href="#shop" @click="toggle">
                Shop →
            </a>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        emptyCart () {
            return Object.keys(this.cart).length > 0
        }
    },
    methods: {
        total () {
            if (Object.keys(this.cart).length != 0) {
                const total = Object.entries(this.cart).reduce((acc, cur) => {
                    return acc + parseFloat(cur[1].qty * cur[1].item.details.price)
                }, 0)
                return total.toFixed(2)
            } else return 0
        }
    },
    props: ['cart', 'toggle', 'length', 'remove']
}
</script>
