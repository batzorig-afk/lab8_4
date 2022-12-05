import React, {Component} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

export default class App extends Component{
  constructor(){
    super()
    this.state = {}
  }
  render(){
    return(
      <View style = {css.container}>
        <View style={css.result}>
          <Text style={css.resultText}>11*11</Text>
        </View>
        <View style={css.calculation}>
          <Text style={css.calculationText}>121</Text>
        </View>
        <View style={css.buttons}>
          <View style={css.numbers}>
            <View style={css.row}>
              <Button title='1'></Button>
              <Button title='2'></Button>
              <Button title='3'></Button>
            </View>
            <View style={css.row}>
              <Button title='4'></Button>
              <Button title='5'></Button>
              <Button title='6'></Button>
            </View>
            <View style={css.row}>
              <Button title='7'></Button>
              <Button title='8'></Button>
              <Button title='9'></Button>
            </View>
            <View style={css.row}>
              <Button title='.'></Button>
              <Button title='0'></Button>
              <Button title='='></Button>
            </View>
          </View>
          <View style={css.operations}>
            <View style={css.column}>
              <Button title='+'></Button>
              <Button title='-'></Button>
              <Button title='*'></Button>
              <Button title='/'></Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
const css = StyleSheet.create({
  container:{
    flex: 1,
    color: 'white'
  },
  calculationText:{
    fontSize: 24,
    color: 'white',
    //alignSelf: 'flex-start'
  },
  resultText:{
    fontSize: 30,
    color: 'white',
    alignSelf: 'flex-end'
  },
  column:{
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  row:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result:{
    flex:2,
    backgroundColor:'red',
    flexDirection: 'column', 
    justifyContent: 'flex-end',
  },
  calculation:{
    flex:1,
    backgroundColor:'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons:{
    flex:7, 
    flexDirection: 'row'
  },
  numbers:{
    flex:3,
    backgroundColor: 'yellow'
  },
  operations:{
    flex: 1,
    backgroundColor: 'black'
  }
});