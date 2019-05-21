<template>


    <div style="margin: auto;">

            <v-container
                    fluid
                    grid-list-xs
            >
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card  style="width: 400px">
                            <v-layout row>
                                <v-flex xs6>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="title mb-2">{{ content.name }}</div>
                                            <div>{{ content.brand_name }}</div>

                                        </div>
                                    </v-card-title>
                                </v-flex>
                                <v-flex xs5>
                                    <v-card>
                                        <v-img
                                                src=`https://{{content.productimage_url}}`
                                                height="250px"
                                        ></v-img>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                            <v-divider light></v-divider>
                            <v-card-actions class="pa-3">
                                <div>
                                    <span>{{ content.sell_price }}€ | {{ content.content_quantity }} | {{ content.measure_unit }}</span>
                                </div>
                                <v-spacer></v-spacer>
                                <span>| {{ content.id }}</span>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>


    </div>


</template>

<script>
    export default {
        name: "ProductCard",
        props: ['content']
    }
</script>

<style scoped>

</style>