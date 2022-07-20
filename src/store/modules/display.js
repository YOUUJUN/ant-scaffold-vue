const state = {
    displayRow : 'X8',
    userInfo : [],
    sidebar : {
        opened : false,
        width : '24rem'
    }
};

const mutations = {
    CHANGE_DISPLAY_ROW (state, payload){
        state.displayRow = payload;
    },

    INIT_USER_INFO (state, payload){
        state.userInfo = payload;
    },

    TOGGLE_SIDE_BAR (state, payload){
        state.sidebar.opened = !state.sidebar.opened;
        state.sidebar.width = !state.sidebar.opened ? '24rem' : '6.5rem'
    },

    CLOSE_SIDE_BAR(state){
        state.sidebar.opened = fasle;
        state.sidebar.width = '6.5rem';
    }


};

const actions = {
    changeDisplayRow({commit}, payload){
        commit('CHANGE_DISPLAY_ROW', payload);
    },

    initUserInfo ({commit}, payload){
        commit('INIT_USER_INFO', payload);
    },

    toggleSideBar({commit}){
        commit('TOGGLE_SIDE_BAR');
    },

    closeSideBar({commit}){
        commit('CLOSE_SIDE_BAR');
    }
}

export default {
    namespaced : true,
    state,
    mutations,
    actions
}