
export const state = () => ({
    data: ''
});


export const mutations = () => ({

    RETRIEVED_DATA(state, value) {
        state.data = value;
    },


});


export const actions = () => ({

    retrieveData(context) {
        this.$.axios.get('https://35.205.172.130/getAll').then(response => {

            context.commit('RETRIEVED_DATA', response.data);

        });
    }

});


