import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const SUBSCRIOTION_ADD = 'subscription_add'
const SUBSCRIOTION_UPDATE = 'subscription_update'
const SUBSCRIOTION_DELETE = 'subscription_delete'

/* subscription の構造
subscription {
  id : number,
  title: string,
  amount: number,
}
*/
const initialState = {
  subscriptions: [],
  subscriptionId: 1
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    [SUBSCRIOTION_ADD]: (state, { title, amount }) => {
      const subscription = {
        id: state.subscriptionId++,
        title,
        amount
      }
      state.subscriptions.push(subscription)
    },
    [SUBSCRIOTION_UPDATE]: (state, { id, title, amount }) => {
      state.subscriptions.forEach((val, idx, ary) => {
        if (val.id === id) {
          val.title = title
          val.amount = amount
        }
      })
    },
    [SUBSCRIOTION_DELETE]: (state, id) => {
      state.subscriptions = state.subscriptions.filter(x => x.id !== id)
    }
  },
  actions: {
    subscriptionAdd: (ctx, { title, amount }) => {
      const payload = {
        title,
        amount
      }
      ctx.commit(SUBSCRIOTION_ADD, payload)
    },
    subscriptionUpd: (ctx, { id, title, amount }) => {
      const payload = {
        id,
        title,
        amount
      }
      ctx.commit(SUBSCRIOTION_UPDATE, payload)
    },
    subscriptionDel: (ctx, id) => {
      ctx.commit(SUBSCRIOTION_DELETE, id)
    }
  },
  getters: {
    subscriptionList: state => {
      return state.subscriptions
    },
    totalAmount: state => {
      let total = 0
      state.subscriptions.forEach(x => {
        total += x.amount
      })
      return total
    }
  },
  plugins: [createPersistedState(), createLogger()]
})
