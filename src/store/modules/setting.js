import {deepCopy} from '@/utils/Index.js'

const state = {
    filterMenu: true, //根据权限过滤菜单，true:过滤，false:不过滤
    menuData : [],
};

const getters = {
    menuData(state, getters, rootState) {
        if (state.filterMenu) {
            const { permissions, roles } = rootState.account;
            return filterMenu(deepCopy(state.menuData), permissions, roles);
        }
        return state.menuData;
    },
};

const mutations = {};

const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
