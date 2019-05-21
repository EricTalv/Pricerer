export const state = () => ({
    products: [],
    data: []
});


export const mutations = {

    GET_DATA(state, value) {
        state.products = value
    },

    DATA_PIECE(state, value) {
        state.data = value
    }

};

export const actions = {
    DataFetcher(context) {
      /*  // Send Axios Get call to url
        this.$axios.get('https://35.205.172.130/getAll')
            // Upon success
            .then((resp) => {
                // Commit data and inject it to state
                if (context.commit('GET_DATA', resp.data)){
                    console.log('Success')
                }

            })
            .catch((err) => {
                console.log('Error', err)
            })*/

        this.$axios.get('https://35.205.172.130/get', { params: {
                name: "1 Reserva Ribera Del Duero Vinedos 0.75L punane vein"
            }
        })
        // Upon success
            .then((resp) => {
                // Commit data and inject it to state
                console.log('Success:', resp.request)

            })
            .catch((err) => {
                console.log('Error', err)
            })


    },

    DataPieceFetcher(context) {
        // Send Axios Get call to url

    }
};