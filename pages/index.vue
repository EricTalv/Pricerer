<template>
    <v-container fluid fill-height>
        <v-layout column align-center justify-center>
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
                            v-on:keyup.enter="hello"

                    >
                    </v-text-field>
                </v-card>
            </v-flex>

            <v-layout align-center justify-center row reverse fill-height>
                <v-flex>
                    <v-card>
                        <v-card-text>ITEM</v-card-text>
                    </v-card>
                    <v-card>
                        <v-card-text>ITEM</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>

        </v-layout>

    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                helloTxt: "Good day to you"
            }
        },
        methods: {
            hello: function (event) {
                alert('Hello' + this.helloTxt)
            }
        }
    }
</script>

<style scoped>

</style>
