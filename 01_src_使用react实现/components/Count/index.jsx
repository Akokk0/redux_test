import React, {Component} from 'react';

class Count extends Component {
    state = {
        count: 0
    }

    increment = () => {
        const { value } = this.selectValue
        const { count } = this.state
        this.setState({ count: count + value * 1 })
    }

    decrement = () => {
        const { value } = this.selectValue
        const { count } = this.state
        this.setState({ count: count - value * 1 })
    }

    incrementIfOdd = () => {
        const { value } = this.selectValue
        const { count } = this.state
        if (count % 2 === 0) {
            this.setState({ count: count + value * 1 })
        }
    }

    incrementAsync = () => {
        const { value } = this.selectValue
        const { count } = this.state
        setTimeout(() => {
            this.setState({ count: count + value * 1 })
        }, 500)
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h1>Count is { count }</h1>
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
