// 初始化状态值
const initStateValue = 0
export default function (preState = initStateValue /*默认参数*/, action) {
    const { type, data } = action
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}
