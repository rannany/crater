import * as types from './mutation-types'

export default {
  [types.BOOTSTRAP_ITEMS] (state, items) {
    state.items = items
  },

  [types.SET_TOTAL_ITEMS] (state, totalItems) {
    state.totalItems = totalItems
  },

  [types.ADD_ITEM] (state, data) {
    state.items.push(data.item)
  },

  [types.UPDATE_ITEM] (state, data) {
    let pos = state.items.findIndex(item => item.id === data.item.id)

    state.items[pos] = data.item
  },

  [types.DELETE_ITEM] (state, id) {
    let index = state.items.findIndex(item => item.id === id)
    state.items.splice(index, 1)
  },

  [types.DELETE_MULTIPLE_ITEMS] (state, selectedItems) {
    selectedItems.forEach((item) => {
      let index = state.items.findIndex(_item => _item.id === item.id)
      state.items.splice(index, 1)
    })

    state.selectedItems = []
  },

  [types.SET_SELECTED_ITEMS] (state, data) {
    state.selectedItems = data
  },

  [types.SET_SELECT_ALL_STATE] (state, data) {
    state.selectAllField = data
  }

}
