<template>
  <div>
    <v-carousel hide-delimiters>
      <v-carousel-item
        :src="require('../assets/img/home/home.jpg')"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-container>
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text
            class=""
            tile
            outlined
          >
            <v-card-title class="subheading align-center">Featured Products</v-card-title>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-sheet
              class="mx-auto"
              elevation="8"
              max-width="1200"
            >
              <v-slide-group v-model="products" class="pa-4" show-arrows mobile-breakpoint="1">
                <v-slide-item v-for="(product,index) in products" :key="index">
                  <v-hover v-slot:default="{ hover }" open-delay="200">
                    <v-card class="ma-4" height="300" width="220" @click="toggle" :elevation="hover ? 16 : 2" light>
                      <v-row class="fill-height" align="center" justify="center">
                        <v-img class="white--text align-end" height="150px" width="220" contain="true" :src=product.images[0] v-if="product.images.length!=0"></v-img>
                        <v-card-text class="text--primary text-center">
                          <div>{{ product.titleEn }}</div>
                          <div>${{ product.price }}</div>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn href="/shop" class="ma-2" outlined color="info">
                            ADD TO CART
                          </v-btn>
                        </div>
                      </v-row>
                    </v-card>
                  </v-hover>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
    <div class="pl-4 pr-4 row">
      <!--       div for featured item-->
      <div class="col-md-6 col-sm-6 col-xs-12">
        <v-carousel hide-delimiters>
          <v-carousel-item
            :src="require('../assets/img/home/home.jpg')"
            class="white--text align-center"
            height="400px"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <h1 class="text-center font-size">New Arrivals</h1>
              <br>
              <div class="text-center">
                <v-btn href="/shop" class="white--text" outlined>SHOP NOW</v-btn>
              </div>
            </v-row>
          </v-carousel-item>
        </v-carousel>
        <!--        <v-card>-->

        <!--          <v-img-->
        <!--            :src="require('../assets/img/home/slider2.jpg')"-->
        <!--            class="white&#45;&#45;text align-center"-->
        <!--            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"-->
        <!--            height="400px"-->
        <!--          >-->
        <!--           <h1 class="text-center font-size">Top Picks</h1>-->
        <!--            <div class="text-center">-->
        <!--              <v-btn  href="/shop" class="white&#45;&#45;text " outlined>SHOP NOW</v-btn>-->
        <!--            </div>-->
        <!--          </v-img>-->
        <!--        </v-card>-->
      </div>
      <div
        class="col-md-6 col-sm-6 col-xs-12"
      >
        <v-card>
          <v-img
            :src="require('../assets/img/home/slider3.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
            <h1 class="text-center font-size">New Arrivals</h1>
            <div class="text-center">
              <v-btn href="/shop" class="white--text" outlined>SHOP NOW</v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
<!--    <div class="pl-4 pr-4 row">-->
<!--      <div-->
<!--        class="col-md-4 col-sm-4 col-xs-12"-->
<!--      >-->
<!--        <v-card outlined>-->
<!--          <v-img-->
<!--            :src="require('../assets/img/home/deal2.jpg')"-->
<!--            class="white&#45;&#45;text align-center"-->
<!--            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"-->
<!--            height="300px"-->
<!--          >-->
<!--            <h1 class="text-center font-size">Lorem & Ipsum</h1>-->
<!--            <div class="text-center mt-2">-->
<!--              <v-btn class="white&#45;&#45;text caption" href="/shop" text>SHOP NOW-->
<!--                <v-icon class="white&#45;&#45;text caption">mdi-arrow-right</v-icon>-->
<!--              </v-btn>-->
<!--            </div>-->
<!--          </v-img>-->
<!--        </v-card>-->
<!--      </div>-->
<!--      <div-->
<!--        class="col-md-4 col-sm-4 col-xs-12"-->
<!--      >-->
<!--        <v-card outlined>-->
<!--          <v-img-->
<!--            :src="require('../assets/img/home/deal3.jpg')"-->
<!--            class="white&#45;&#45;text align-center"-->
<!--            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"-->
<!--            height="300px"-->
<!--          >-->
<!--            <h1 class="text-center font-size">Lorem & Ipsum</h1>-->
<!--            <div class="text-center mt-2">-->
<!--              <v-btn class="white&#45;&#45;text caption" href="/shop" text>SHOP NOW-->
<!--                <v-icon class="white&#45;&#45;text caption">mdi-arrow-right</v-icon>-->
<!--              </v-btn>-->
<!--            </div>-->
<!--          </v-img>-->
<!--        </v-card>-->
<!--      </div>-->
<!--      <div-->
<!--        class="col-md-4 col-sm-4 col-xs-12"-->
<!--      >-->
<!--        <v-card outlined>-->
<!--          <v-img-->
<!--            :src="require('../assets/img/home/deal4.jpg')"-->
<!--            class="white&#45;&#45;text align-center"-->
<!--            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"-->
<!--            height="300px"-->
<!--          >-->
<!--            <h1 class="text-center font-size">Lorem & Ipsum</h1>-->
<!--            <div class="text-center mt-2">-->
<!--              <v-btn class="white&#45;&#45;text caption" href="/shop" text>SHOP NOW-->
<!--                <v-icon class="white&#45;&#45;text caption">mdi-arrow-right</v-icon>-->
<!--              </v-btn>-->
<!--            </div>-->
<!--          </v-img>-->
<!--        </v-card>-->
<!--      </div>-->
<!--    </div>-->
<!--    <v-container>-->
<!--      <v-row no-gutters>-->
<!--        <v-col :cols="12">-->
<!--          <v-card-text-->
<!--            class=""-->
<!--            tile-->
<!--            outlined-->
<!--          >-->
<!--            <v-card-title class="subheading ">Deals of the Day</v-card-title>-->
<!--            <v-divider></v-divider>-->
<!--            <div class="row">-->
<!--              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">-->
<!--                <v-hover-->
<!--                  v-slot:default="{ hover }"-->
<!--                  open-delay="200"-->
<!--                >-->
<!--                  <v-card-->
<!--                    :elevation="hover ? 16 : 2"-->
<!--                  >-->
<!--                    <v-img-->
<!--                      class="white&#45;&#45;text align-end"-->
<!--                      height="200px"-->
<!--                      :src="require('../assets/img/home/deal1.jpg')"-->
<!--                    >-->
<!--                      <v-card-title>Bags & Purses</v-card-title>-->
<!--                    </v-img>-->

<!--                    <v-card-text class="text&#45;&#45;primary text-center">-->
<!--                      <div>Upto 60% + Extra 10%</div>-->
<!--                      <div>Baggit, Zara, Fossil</div>-->
<!--                    </v-card-text>-->

<!--                    <div class="text-center">-->
<!--                      <v-btn-->
<!--                        href="/shop"-->
<!--                        class="ma-2"-->
<!--                        outlined-->
<!--                        color="info"-->
<!--                      >-->
<!--                        Explore-->
<!--                      </v-btn>-->
<!--                    </div>-->
<!--                  </v-card>-->
<!--                </v-hover>-->
<!--              </div>-->
<!--              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">-->
<!--                <v-hover-->
<!--                  v-slot:default="{ hover }"-->
<!--                  open-delay="200"-->
<!--                >-->
<!--                  <v-card-->
<!--                    :elevation="hover ? 16 : 2"-->
<!--                  >-->
<!--                    <v-img-->
<!--                      class="white&#45;&#45;text align-end"-->
<!--                      height="200px"-->
<!--                      :src="require('../assets/img/home/deal2.jpg')"-->
<!--                    >-->
<!--                      <v-card-title>T-Shirt</v-card-title>-->
<!--                    </v-img>-->

<!--                    <v-card-text class="text&#45;&#45;primary text-center">-->
<!--                      <div>Upto 50%</div>-->
<!--                      <div>Zara, Selected, Celio</div>-->
<!--                    </v-card-text>-->

<!--                    <div class="text-center">-->
<!--                      <v-btn href="/shop"-->
<!--                             class="ma-2"-->
<!--                             outlined-->
<!--                             color="info"-->
<!--                      >-->
<!--                        Explore-->
<!--                      </v-btn>-->
<!--                    </div>-->
<!--                  </v-card>-->
<!--                </v-hover>-->
<!--              </div>-->
<!--              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">-->
<!--                <v-hover-->
<!--                  v-slot:default="{ hover }"-->
<!--                  open-delay="200"-->
<!--                >-->
<!--                  <v-card-->
<!--                    :elevation="hover ? 16 : 2"-->
<!--                  >-->
<!--                    <v-img-->
<!--                      class="white&#45;&#45;text align-end"-->
<!--                      height="200px"-->
<!--                      :src="require('../assets/img/home/deal3.jpg')"-->
<!--                    >-->
<!--                      <v-card-title>Jeans</v-card-title>-->
<!--                    </v-img>-->

<!--                    <v-card-text class="text&#45;&#45;primary text-center">-->
<!--                      <div>Upto 60% + Extra 10%</div>-->
<!--                      <div>Jack & Jones, Levis</div>-->
<!--                    </v-card-text>-->

<!--                    <div class="text-center">-->
<!--                      <v-btn href="/shop"-->
<!--                             class="ma-2"-->
<!--                             outlined-->
<!--                             color="info"-->
<!--                      >-->
<!--                        Explore-->
<!--                      </v-btn>-->
<!--                    </div>-->
<!--                  </v-card>-->
<!--                </v-hover>-->
<!--              </div>-->
<!--              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">-->
<!--                <v-hover-->
<!--                  v-slot:default="{ hover }"-->
<!--                  open-delay="200"-->
<!--                >-->
<!--                  <v-card-->
<!--                    :elevation="hover ? 16 : 2"-->
<!--                  >-->
<!--                    <v-img-->
<!--                      class="white&#45;&#45;text align-end"-->
<!--                      height="200px"-->
<!--                      :src="require('../assets/img/home/deal4.jpg')"-->
<!--                    >-->
<!--                      <v-card-title>Shoes</v-card-title>-->
<!--                    </v-img>-->

<!--                    <v-card-text class="text&#45;&#45;primary text-center">-->
<!--                      <div>Upto 60% + Extra 10%</div>-->
<!--                      <div>Nike, Adidas, Puma</div>-->
<!--                    </v-card-text>-->

<!--                    <div class="text-center">-->
<!--                      <v-btn href="/shop"-->
<!--                             class="ma-2"-->
<!--                             outlined-->
<!--                             color="info"-->
<!--                      >-->
<!--                        Explore-->
<!--                      </v-btn>-->
<!--                    </div>-->
<!--                  </v-card>-->
<!--                </v-hover>-->
<!--              </div>-->
<!--            </div>-->
<!--          </v-card-text>-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--    </v-container>-->
    <v-card class="accent">
      <v-container>
        <v-row no-gutters>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-truck</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">FREE SHIPPING & RETURN</h3>
                <p class="font-weight-thin">Free Shipping over $300</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-cash-usd</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">MONEY BACK GUARANTEE</h3>
                <p class="font-weight-thin">30 Days Money Back Guarantee</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2">mdi-headset</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">020-800-456-747</h3>
                <p class="font-weight-thin">24/7 Available Support</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      items: [
        {title: 'Click Me'},
        {title: 'Click Me'},
        {title: 'Click Me'},
        {title: 'Click Me 2'},
      ],
      activeBtn: 1,
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      products: [],
    }
  },
  components: {
    carousel,
  },
  computed: {
    ...mapGetters(['getImageBaseUrl']),
  },
  async mounted() {
    console.log("inside home async mounted")
    this.products = await this.getAllProducts();
    //console.log(this.products);
    for (let i = 0; i < this.products.length; i++) {
      for (let j in this.products[i].images) {
        this.products[i].images[j] = this.getImageBaseUrl + this.products[i].images[j];
        console.log(this.products[i].images[j]);
      }
    }
  },
  methods: {
    ...mapActions('product', ['getAllProducts']),
    toggle(){

    }
  },
}
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>

