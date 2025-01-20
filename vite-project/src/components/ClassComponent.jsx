import { Text, View } from 'react-native'
import  { Component } from 'react'

export default class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Ram',
            age: 25
        }
    }
    render() {
        return (
            <View>
                <Text>ClassComponent</Text>
                <Text>{
                    this.state.name
                    
                }</Text>
            </View>
        )
    }

}