// 引入Count的UI组件
import CountUI from "../../components/Count/index.jsx";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";
// 引入actionCreator的方法
import {
    countIncrement,
    countDecrement,
    countIncrementAsync
} from '../../redux/count_action'

// 数据方法
function mapStateToProps(state) {
    return { count: state }
}

// 提供操作数据的方法的方法
function mapDispatchToProps(dispatch) {
    return {
        add: data => dispatch(countIncrement(data)),
        minus: data => dispatch(countDecrement(data)),
        addAsync: (data, time) => dispatch(countIncrementAsync(data, time))
    }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
