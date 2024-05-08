import { createStore } from 'vuex'
import cart from './cart.js';
import createPersistedState from 'vuex-persistedstate';
import base from './base.js';

// Create a new store instance.
const store = createStore(
    {
        modules:{
            cart,
            base
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