import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            name : 'kim'
        }
    },
    mutations :{
        change_name(state){
            this.name='park'

        }

    }
})

export default store;