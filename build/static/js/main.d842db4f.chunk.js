(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(8),i=n.n(s),c=(n(16),n(3)),r=n(4),u=n(6),l=n(1),h=n(5),d=n(9),p=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"note",onClick:this.props.deleteMethod},this.props.text)}}]),t}(Object(d.a)(Comment)),m=(n(17),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleKeyPressValue=function(e){e.key},n.state={noteText:"",notes:[]},n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.notes.map(function(t,n){return o.a.createElement(p,{key:n,text:t,deleteMethod:e.deleteNote(n)})});return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"header"},"React ToDo Application"),t,o.a.createElement("div",{className:"btn",onClick:this.addNote.bind(this)},"+"),o.a.createElement("input",{type:"text",ref:function(t){e.textInput=t},className:"textInput",value:this.state.noteText,onChange:function(t){e.updateNoteText(t)},onKeyPress:this.handleKeyPressValue.bind(this)}))}},{key:"addNote",value:function(){(console.log(1),""!==this.state.noteText)&&(this.state.notes.push(this.state.noteText),this.state.noteText="",this.textInput.focus())}},{key:"updateNoteText",value:function(e){this.setState({noteText:e.target.value})}},{key:"deleteNote",value:function(e){var t=this.state.notes;t.splice(e,1),this.setState({notes:t})}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.d842db4f.chunk.js.map