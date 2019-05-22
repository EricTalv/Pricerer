export const state = () => ({
    products: [],
    data: '',
    loading: false,
});


export const mutations = {

    SET_PRODUCT(state, value) {
        state.products = value
    },

    TOGGLE_LOADING(state) {
        state.loading = !state.loading;
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
        }, context.commit('TOGGLE_LOADING'))
        // Upon success
            .then((resp) => {
                // Commit data and inject it to state
                console.log('Success')
                console.log('Data sent: ', context.state.data)
                context.commit('SET_PRODUCT', resp.data)

            })
            .catch((err) => {
                console.log('Error', err)
            })

    }
};