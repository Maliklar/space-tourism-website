import { createStore } from 'vuex'

export default createStore({
    state: {
        currentRoute: "home",
        app: document.getElementById("app"),
        deviceType: "desktop",
    },
    mutations: {},
    actions: {},
    modules: {}
});