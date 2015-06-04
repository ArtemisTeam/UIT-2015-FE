var KEYMAP = {49: 1, 50: 2, 51: 3, 52: 4, 53: 5, 54: 6, 55: 7, 56: 8, 57: 9, 48: 0, 189: 'minus', 187: 'equal', 191: 'divide', 13: 'equal', 67: 'c', 8: 'backspace'};
var CHARACTERS = {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 0, "plus": "+", "minus": "-", "mutiple": "*", "divide": "/", "lbrace": "(", "rbrace": ")", "equal": "=", "c": "c", "backspace": "<-"};

var InputBox = React.createClass({displayName: "InputBox",
    render: function() {
        return (
            React.createElement("input", {type: "text", id: "inputbox", value: this.props.value, readOnly: true})
        );
    }
});
var Button = React.createClass({displayName: "Button",
    render: function() {
        return (
            React.createElement("button", {type: "button", className: "btn-"+this.props.val}, this.props.text)
        );
    }
});
var ButtonMatrix = React.createClass({displayName: "ButtonMatrix",
    render: function() {
        var numberButtons = []
        for(key in CHARACTERS){numberButtons.push(React.createElement(Button, {val: key, text: CHARACTERS[key]}))};
        return (
            React.createElement("div", null, 
              numberButtons
            )
        );
    }
});
var Calc = React.createClass({displayName: "Calc",
    getInitialState: function() {
      return {data: []};
    },
    componentDidMount: function() {
      $('#inputbox').focus();
      $(document.body).on('keydown', this.handleKeyDown);
      $('button').on('click', this.handleClick);
    },
    handleClick: function(e) {
      //console.log(e.target);
      $(e.target).css({color: 'red'});
      setTimeout(function(){
          $(e.target).css({color: 'black'})
      },500);
      // your can hanler invalid input here
      if(e.target.innerText==CHARACTERS['equal']){
        var expr = this.state.data.join('');
        //console.log(expr);
        this.setState({data: Calculator.compute(expr).toString().split('')});
        console.log(Calculator.compute(expr), expr);
      } else if(e.target.innerText==CHARACTERS['c']){
        this.setState({data: []});
      } else if(e.target.innerText==CHARACTERS['backspace']){
        var currentState = this.state.data;
        var last = currentState.pop();
        if(last){
          last = last.slice(0, -1);
          if(last){
            currentState.push(last);
          }
          this.setState({data: currentState});
        }
      } else{
        var inputs = this.state.data;
        inputs.push(e.target.innerText);
        this.setState({data: inputs});
      }
      $('#inputbox').focus();
    },
    handleKeyDown: function(e) {
      e.preventDefault();
      if(e.shiftKey){
        switch(e.keyCode){
          case 56: $('.btn-mutiple').click(); break;
          case 57: $('.btn-lbrace').click(); break;
          case 48: $('.btn-rbrace').click(); break;
          case 187: $('.btn-plus').click(); break;
          default: break;
        }
      }else{
        if(e.keyCode in KEYMAP){
          $('.btn-'+KEYMAP[e.keyCode]).click();
        }
      }
    },
    render: function() {
        return (
          React.createElement("div", null, 
            React.createElement(InputBox, {value: this.state.data.join('')}), 
            React.createElement(ButtonMatrix, null)
          )
        );
    }
});
React.render(
  React.createElement(Calc, null),
  document.getElementById('example')
);
