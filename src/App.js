import React, { Component } from 'react';
import Note from './Components/Note';
import './App.css';

class App extends Component{
    constructor(props){
      super(props);
      this.state={
        noteText:'',
        notes: [],
      }
    }

  render(){
    let notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val} 
                deleteMethod={() => {this.deleteNote(key)}} />
    })

    return(
      <div className="container">

        <div className="header">React ToDo Application</div>

        {notes}

        <div className="btn" onClick={this.addNote.bind(this)}>+</div>
        
        <input type="text" 
          ref={((input) =>{this.textInput = input} )}
          className = "textInput"
          value = {this.state.noteText}
          onChange = {(noteText)=>{this.updateNoteText(noteText)}}
          onKeyPress={this.handleKeyPressValue.bind(this)} />
          
      </div>
    );
  }

  addNote(){
    if(this.state.noteText === ''){return}
    let notesArray = this.state.notes;
    notesArray.push(this.state.noteText);
    this.setState({noteText: ''});
    this.textInput.focus();
  }

  updateNoteText(noteText){
    this.setState({
      noteText: noteText.target.value
    })
  }

  handleKeyPressValue = (event) => {
    if(event.key === 'Enter'){
      this.addNote();
    }
  }

  deleteNote(index){
    let notesArray = this.state.notes;
    notesArray.splice(index, 1);
    this.setState({
      notes: notesArray
    })
  }

}

export default App;
