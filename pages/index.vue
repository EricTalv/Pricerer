<template>
    <v-container
            fluid
            grid-list-md
            v-bind:class="{ 'fill-height': fillHeight }"
            v-bind="CheckItemListVisibility">
        <v-slide-y-transition>
            <v-layout align-center justify-center>
                <v-flex shrink>
                    <v-card flat>
                        <v-card-title primary-title>
                            <div class="text-xs-center">
                                <div class="headline">
                                    <u>Welcome To Pricerer</u>
                                </div>
                                <div class="grey--text">Think More, Spend Less</div>
                            </div>
                        </v-card-title>
                        <br>
                        <v-text-field
                                style="text-align: center"
                                outline
                                label="Your Product"
                                centered
                                v-on:keyup.enter="transitionToItems"
                        >
                        </v-text-field>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-slide-y-transition>
        <v-fade-transition>
            <v-layout
                    justify-center
                    v-if="ItemListVisible"
            >
                <v-flex xs2>
                    <v-card>
                        <v-card-text>one</v-card-text>
                    </v-card >
                </v-flex>
                <v-flex xs2>
                    <v-card>
                        <v-card-text>two</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs2>
                    <v-card>
                        <v-card-text>three</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-fade-transition>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                ItemListVisible: false,
                fillHeight: true,
            }
        },
        methods: {
            transitionToItems: function () {
                if (!this.ItemListVisible) {
                     this.ItemListVisible = true
                }
            }
        },

        computed: {
            CheckItemListVisibility() {
                if (!this.ItemListVisible) {
                    this.fillHeight = true
                } else {
                    this.fillHeight = false
                }
            }
        }
    }
</script>

<style scoped>

</style>
