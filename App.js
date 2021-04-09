// AIMAN HAZIQ BIN HAIRI
// 1728083
// EXERCISE 4 (7/4/21)

import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {

  constructor(){
    super();
    this.state={
      word: '',
      wordCons: 0,
      wordVows: 0,
      character: 0
    };
  }

  updateWord(){
    this.setState({word: this.state.word});
  }

  countCharacter(){
    let wrd = this.state.word;
    var allwrd = wrd.length;
    this.setState({
      character : allwrd
    });
  }

  updateWordVows () {
   var vowlst = 'aeiouAEIOU';
   var vcount1 = 0;
   var wrd = this.state.word;

   for (var x=0; x < wrd.length; x++){
     if (vowlst.indexOf(wrd[x]) !== -1){
       vcount1 += 1;
     }

     this.setState({
       wordVows: vcount1
     });
   }
  }
  
  updateWordCons () {
    var conslst = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    var vcount2 = 0;
    var wrd = this.state.word;

    for (var x=0; x < wrd.length; x++){
      if (conslst.indexOf(wrd[x]) !== -1){
        vcount2 +=1;
      }

      this.setState({
        wordCons: vcount2
      });
    }
  }


  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Word Analyzer</Text>

      <TextInput
        style={styles.input} 
        onChangeText={(word) => this.setState({word})}
        placeholder='Type here' />
      <Text style={styles.button} onPress={() => {this.updateWord(), this.updateWordCons(), this.updateWordVows(), this.countCharacter()}}> Analyze
      </Text>

      <Text style={styles.content}>Word: {this.state.word}</Text>
      <Text style={styles.content}>No of consonants: {this.state.wordCons}</Text>
      <Text style={styles.content}>No of vowels: {this.state.wordVows}</Text>
      <Text style={styles.content}>No of characters: {this.state.character}</Text>

    </View>
  );
  }
}


const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    fontSize: 30, 
    textAlign: 'center', 
    margin: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    textAlign: 'center',
    fontSize: 15,
    color: '#333333', 
    justifyContent: 'center',
    margin: 5,
  },
  input: {
    textAlign: 'center',
    fontSize: 15,
    color: '#333333', 
    justifyContent: 'center',
    margin: 5,
  },
  button: {
    backgroundColor: '#00FFFF',
  }
});
