import { createStore } from 'vuex'
import cart from './cart.js';
import createPersistedState from 'vuex-persistedstate'

// Create a new store instance.
const store = createStore(
    {
        modules:{
            cart
        },
        plugins:[
            createPersistedState(
                {
                    storage:window.sessionStorage
                }
            )
        ]
    }
)
export default store