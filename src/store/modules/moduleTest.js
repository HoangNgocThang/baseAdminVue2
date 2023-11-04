import {
    INCREMENT, TEST_ACTION
} from "@/store/mutation-type";

const moduleTest = {
    state: {
        count: 0,
    },
    mutations: {
        [INCREMENT](state) {
            state.count++
        }, [TEST_ACTION](state, payload) {
            console.log('a', payload)
            state.count = state.count + payload.value;
        },
    },
    actions: {}
}

export default moduleTest;