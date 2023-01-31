// 引入组件定义方法函数
import React, {Component} from 'react';
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";
// 引入actionCreator的方法
import {
    countIncrement,
    countDecrement,
    countIncrementAsync
} from '../../redux/count_action.js'
// 定义UI组件
class Count extends Component {

    increment = () => {
        const { value } = this.selectValue
        this.props.add(value * 1)
    }

    decrement = () => {
        const { value } = this.selectValue
        this.props.minus(value * 1)
    }

    incrementIfOdd = () => {
        const { value } = this.selectValue
        if (this.props.count % 2 === 0) {
            this.props.add(value * 1)
        }
    }

    incrementAsync = () => {
        const { value } = this.selectValue
        this.props.addAsync(value * 1, 500)
    }

    render() {
        const { count } = this.props
        return (
            <div>
                <h1>Count is { count }</h1>
                <select ref={ c => this.selectValue = c }>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>&nbsp;
                <button onClick={this.increment}> + </button>&nbsp;
                <button onClick={this.decrement}> - </button>&nbsp;
                <button onClick={this.incrementIfOdd}> 偶数加 </button>&nbsp;
                <button onClick={this.incrementAsync}> 异步加 </button>
            </div>
        );
    }
}

// 数据方法
// const mapStateToProps = state => ({ count: state })

// 提供操作数据的方法的方法
/*function mapDispatchToProps(dispatch) {
    return {
        add: data => dispatch(countIncrement(data)),
        minus: data => dispatch(countDecrement(data)),
        addAsync: (data, time) => dispatch(countIncrementAsync(data, time))
    }
}*/

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    // 简写mapStateToProps
    state => ({ count: state }),
    // 半简写mapDispatchToProps
    /*dispatch => {
        return {
            add: data => dispatch(countIncrement(data)),
            minus: data => dispatch(countDecrement(data)),
            addAsync: (data, time) => dispatch(countIncrementAsync(data, time))
        }
    }*/
    // 简写mapDispatchToProps，是一个对象
    {
        // 直接给对应方法创建action即可
        add: countIncrement,
        minus: countDecrement,
        addAsync: countIncrementAsync
    }
)(Count)
