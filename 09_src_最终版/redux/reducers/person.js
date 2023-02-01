import { ADD_PERSON } from "../constant.js";

const initState = [{id: 0o1, name: 'tom', age: 12}]
export default function (preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
}
