export const state = () => ({
    products: [],
    data: [],
    loading: false,
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
};

export const actions = {
    DataFetcher(context) {
        // Send Axios Get call to url
        this.$axios.get('https://35.205.172.130/getAll')
        // Upon success
            .then((resp) => {
                // Commit data and inject it to state
                if (context.commit('SET_PRODUCT_DATA', resp.data)) {
                    console.log('Success')
                }
            })
            .catch((err) => {
                console.log('Error', err)
            })
    },

    DataSearcher(context, data) {
        this.$axios.get('https://35.205.172.130/searchItem', {
            params: {
                name: data
            }
        })
        // Upon success
            .then((resp) => {
                // Commit data and inject it to state

                console.log('Success ', resp)
                console.log('Data sent: ', data)

            })
            .catch((err) => {
                console.log('Error', err)
            })

    }
};