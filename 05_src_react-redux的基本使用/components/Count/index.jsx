import React, {Component} from 'react';

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

export default Count;
