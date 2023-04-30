<template>
  <div class="header">
    <div class="header__outer">
      <div class="container">
        <div class="header__inner">
          <div class="header__menu">
            <router-link to="/">Shop</router-link>
            <router-link to="/about">About</router-link>
          </div>
          <div class="header__socials">
            <div class="header__socials-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
              </svg>
            </div>
            <div class="header__socials-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </div>
            <div class="header__socials-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
              </svg>
            </div>
            <div class="header__socials-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M0 7.244c3.071-3.24 7.314-5.244 12-5.244 4.687 0 8.929 2.004 12 5.244l-2.039 2.15c-2.549-2.688-6.071-4.352-9.961-4.352s-7.412 1.664-9.961 4.352l-2.039-2.15zm5.72 6.034c1.607-1.696 3.827-2.744 6.28-2.744s4.673 1.048 6.28 2.744l2.093-2.208c-2.143-2.261-5.103-3.659-8.373-3.659s-6.23 1.398-8.373 3.659l2.093 2.208zm3.658 3.859c.671-.708 1.598-1.145 2.622-1.145 1.023 0 1.951.437 2.622 1.145l2.057-2.17c-1.197-1.263-2.851-2.044-4.678-2.044s-3.481.782-4.678 2.044l2.055 2.17zm2.622 1.017c-1.062 0-1.923.861-1.923 1.923s.861 1.923 1.923 1.923 1.923-.861 1.923-1.923-.861-1.923-1.923-1.923z" />
              </svg>
            </div>
          </div>
          <div class="header__cart" @click="toggleCart">
            Cart (
            <div class="header__cart-number">
              {{ length() }}
            </div>
            )
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="header-mob">
    <div class="header-mob__outer">
      <div class="container">
        <div class="header-mob__inner">
          <div class="header-mob__block">
            <div class="header-mob__logo">shop</div>
            <div class="header-mob__burger" @click="toggleMobMenu"><img src="@/assets/img/burger-icon.png" alt=""></div>
            <div class="header-mob__popup" v-if="showMobMenu">
              <div class="header-mob__close" @click="toggleMobMenu">
                <img src="img/close-icon.png">
              </div>
              <div class="header-mob__menu">
                <router-link to="/">Shop</router-link>
                <router-link to="/about">About</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view :products="products" :addToCart="addToCart" />
  <Footer />
  <Sidebar v-if="showCart" :cart="cart" :toggle="toggleCart" :length="length" :remove="remove" />
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/SidebarComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import products from '@/products.json'

export default {
  components: {
    Sidebar,
    Footer
  },
  data () {
    return {
      showCart: false,
      products: products,
      cart: {},
      showMobMenu: false
    }
  },
  methods: {
    toggleMobMenu () {
      this.showMobMenu = !this.showMobMenu
    },
    toggleCart () {
      this.showCart = !this.showCart
    },
    addToCart (id) {
      if (this.cart[id]) this.cart[id].qty += 1
      else {
        this.cart[id] = {
          qty: 1,
          item: this.products[id]
        }
      }
    },
    remove (id) {
      delete this.cart[id]
    },
    length () {
      if (Object.keys(this.cart).length !== 0) {
        const length = Object.entries(this.cart).reduce((acc, cur) => {
          return acc + parseInt(cur[1].qty)
        }, 0)
        return length
      } else return 0
    }
  }
}
</script>
