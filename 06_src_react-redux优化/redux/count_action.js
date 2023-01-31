import { INCREMENT, DECREMENT } from './constant.js'
export const countIncrement = data => ({ type: INCREMENT, data })
export const countDecrement = data => ({ type: DECREMENT, data })

// 异步任务action
export const countIncrementAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(countIncrement(data))
        }, time)
    }
}
