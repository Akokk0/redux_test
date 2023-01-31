import React, {Component} from 'react';
import store from "../../redux/store.js";

class Count extends Component {

    // 绑定redux更新驱动页面变化
    componentDidMount() {
        // 相当于vue watch，只要数据一变化就会触发该函数
        store.subscribe(() => {
            // 使用空对象虚晃组件调用render函数
            this.setState({})
        })
    }

    increment = () => {
        const { value } = this.selectValue
        store.dispatch({
            type: 'increment',
            data: value * 1 // *1是将字符串强转为数
        })
    }

    decrement = () => {
        const { value } = this.selectValue
        store.dispatch({
            type: 'decrement',
            data: value * 1 // *1是将字符串强转为数
        })
    }

    incrementIfOdd = () => {
        const { value } = this.selectValue
        // 获取存在redux里的数据
        const count = store.getState()
        if (count % 2 === 0) {
            store.dispatch({
                type: 'increment',
                data: value * 1 // *1是将字符串强转为数
            })
        }
    }

    incrementAsync = () => {
        const { value } = this.selectValue
        setTimeout(() => {
            store.dispatch({
                type: 'increment',
                data: value * 1 // *1是将字符串强转为数
            })
        }, 500)
    }

    render() {
        return (
            <div>
                <h1>Count is { store.getState() }</h1>
                <select ref={ c => this.selectValue = c }>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
                <button onClick={this.increment}> + </button>
                <button onClick={this.decrement}> - </button>
                <button onClick={this.incrementIfOdd}> 偶数加 </button>
                <button onClick={this.incrementAsync}> 异步加 </button>
            </div>
        );
    }
}

export default Count;
