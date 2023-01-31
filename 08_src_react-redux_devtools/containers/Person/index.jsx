import React, {Component} from 'react';
import {connect} from 'react-redux'
import {createAddPersonCreator} from "../../redux/actions/person.js";
import {nanoid} from "nanoid";

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        this.props.addOnePerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        const { persons, count } = this.props
        return (
            <div>
                <h2>我是Person组件, 上方组件的count为：{count}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/>
                <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        persons.map((personObj) => {
                            return <li key={personObj.id}>{personObj.name}---{personObj.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        persons: state.persons,
        count: state.count
    }),
    {
        addOnePerson: createAddPersonCreator
    }
)(Person)
