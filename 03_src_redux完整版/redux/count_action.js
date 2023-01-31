import { INCREMENT, DECREMENT } from './constant'
export const countIncrement = data => ({ type: INCREMENT, data })
export const countDecrement = data => ({ type: DECREMENT, data })
