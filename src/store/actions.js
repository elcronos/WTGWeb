import * as types from './mutation_types'

export const OPEN_DIALOG     = ({ commit }) => commit(types.OPEN_DIALOG);
export const CLOSE_DIALOG    = ({ commit }) => commit(types.CLOSE_DIALOG);
export const ADD_PRODUCT     = ({ commit }, product) => commit(types.ADD_PRODUCT);
export const REMOVE_PRODUCT  = ({ commit }, product) => commit(types.REMOVE_PRODUCT);
