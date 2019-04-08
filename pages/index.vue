<template>
    <v-container fluid grid-list-md v-bind:class="{ active: isActive }">
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
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                ItemListVisible: false,
                isActive: true,
            }
        },
        methods: {
            transitionToItems: function () {
                if (!this.ItemListVisible) {
                     this.ItemListVisible = true
                } else {
                    this.ItemListVisible = false
                }
            }
        },

        computed: {
            CheckItemListVisibility() {
                if (!this.ItemListVisible) {
                    alert("not visible")
                }
            }
        }
    }
</script>

<style scoped>

</style>
