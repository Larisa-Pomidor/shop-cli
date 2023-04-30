<template>
  <div class="home">
    <div class="home">
      <div class="home__outer">
        <div class="home__inner">
          <div class="home__block">
            <div class="home__image"></div>
            <div class="home__text">
              <div class="home__text-inner">
                <div class="home__title">
                  Furniture
                </div>
                <a class="home__button btn" href="#shop">
                  Shopping →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shop" id="shop">
      <div class="shop__outer">
        <div class="container">
          <div class="shop__inner">
            <div class="shop__title">
              What we offer
            </div>
            <div class="shop__list">
              <div class="shop__item" v-for="(product, i) in products" :key="product.details.id">
                <div class="shop__image" :style="{backgroundImage: 'url(\'' + require('@/assets/img/'+ product.details.image +'') + '\')'}">
                </div>
                <div class="shop__item-inner">
                  <div class="shop__item-title">
                    {{ product.details.name }}
                  </div>
                  <div class="shop__item-price">
                    {{ product.details.price }}
                  </div>
                  <div class="shop__button btn btn_dark" @click="addToCart(i)">
                    Add to cart →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['products', 'addToCart']
}
</script>
