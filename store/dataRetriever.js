export const state = () => ({
    products: [],
    data: '',
    loading: false,
    noProducts: null,
});


export const mutations = {

    SET_PRODUCT(state, value) {
        state.products = value
    },

    SET_DATA(state, value) {
        state.data = value
    },

    TOGGLE_LOADING(state) {
        state.loading = !state.loading;
    },

    SET_NO_PRODUCTS(state, value) {
        state.noProducts = value;
    },
};

export const actions = {

    DataSearcher(context) {

        context.commit('TOGGLE_LOADING')
        this.$axios.get('https://35.205.172.130/searchItem', {
            // Set our search query
            params: {
                name: context.state.data
            }
        })
        // Upon success
            .then((resp) => {
                // Commit data and inject it to state
                console.log( resp.data);
                if(resp.data.length <= 0){
                    context.commit('SET_NO_PRODUCTS', true)

                } else {
                    context.commit('SET_NO_PRODUCTS', false)
                }
                console.log(context.state.noProducts);
                console.log('Data sent: ', context.state.data);
                context.commit('SET_PRODUCT', resp.data);
                context.commit('TOGGLE_LOADING')
            })
            .catch((err) => {
                console.log('Error', err)
            })

    },
    setData(context,data){
        context.commit('SET_DATA',data);
        context.commit('SET_NO_PRODUCTS', false);
    }
};