export const state = () => ({
    data: {}
});


export const mutations = {

    GET_DATA(state, value) {
        state.data = value
    }

};

export const actions = {
    DataFetcher(context) {
        // Send Axios Get call to url
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
            })
    }
};