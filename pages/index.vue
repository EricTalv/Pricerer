<template>
    <v-app>
        <v-container
                fluid
                grid-list-md>


            <v-layout align-center justify-center>


                <v-flex text-xs-center>

                    <div class="headline">
                        <u>Welcome To Pricerer</u>
                        <v-subheader>Think</v-subheader>
                    </div>

                    <v-text-field
                            centered
                            key="main-content"
                            label="Your Product"
                            outline
                            style="text-align: center;"
                    >
                    </v-text-field>
                </v-flex>


            </v-layout>


            <!--  <v-layout justify-center>
                  <v-flex shrink>

                          <v-card-title primary-title>
                              <div class="text-xs-center">
                                  <div class="headline">
                                      <u>Welcome To Pricerer</u>
                                  </div>
                                  <div class="grey&#45;&#45;text">Think More, Spend Less</div>
                              </div>
                          </v-card-title>

                          <transition-group class="wrapper" name="fade" tag="div">

                              <v-text-field
                                      centered
                                      key="main-content"
                                      label="Your Product"
                                      outline
                                      style="text-align: center;"
                                      v-on:keyup.enter="ItemListVisible = !ItemListVisible"
                              >
                              </v-text-field>


                              <div key="dynamic" style="border: 2px solid rgba(0,0,0,0.54); border-radius: 4px; " v-if="ItemListVisible">

                                  <v-container grid-list-sm>
                                      <v-layout xs12 sm12 md12 lg12 xl12 justify-center row wrap>
                                          <v-flex>
                                              <v-card>
                                                  <v-card-text>
                                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut distinctio, eligendi fuga in incidunt laborum magnam nostrum possimus voluptates!
                                                  </v-card-text>
                                              </v-card>
                                          </v-flex>
                                          <v-flex>
                                              <v-card>
                                                  <v- card-text>two</v-card-text>
                                              </v-card>
                                          </v-flex>
                                          <v-flex>
                                              <v-card>
                                                  <v-card-text>three</v-card-text>
                                              </v-card>
                                          </v-flex>
                                      </v-layout>
                                  </v-container>

                              </div>

                          </transition-group>

                  </v-flex>
              </v-layout>-->
        </v-container>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                ItemListVisible: false,
            }
        },
        methods: {},

        computed: {}
    }
</script>

<style>

    .wrapper {
        display: flex;
        flex-direction: column;
    }

    .wrapper > * {
        transition: all 0.5s;
        width: 100%;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
        transform: translateY(-10px);
    }

    .fade-leave-active {
        position: absolute;
    }

</style>
