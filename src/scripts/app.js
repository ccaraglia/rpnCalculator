import React from 'react'
import ReactDOM from 'react-dom'



const app = function() {

	const AppView = React.createClass({


 getInitialState: function(){
        return{
            currentDisplay:'0',
            numberStack:[]

        }
    },

_getRightIndexAccumulatorStr: function(numberStack, rightIndex){
    if (numberStack.length < -(rightIndex)){
        return '0'
    }else{
        return (numberStack[numberStack.length + rightIndex])
    }
},

_captureOneOverX_Key: function(){
var resultingDisplay

    resultingDisplay = 1 / (this.state.currentDisplay)

    var numberStackCopy = this.state.numberStack.map(x => {return x})


    this.setState({
        lastKeyPressed:'operation',
        currentDisplay:resultingDisplay,
        numberStack: numberStackCopy
    })

},

_captureY_ToX_Key: function(){

var resultingDisplay

    resultingDisplay=Math.pow((this.state.currentDisplay),this.state.numberStack[this.state.numberStack.length-1])

        console.log(resultingDisplay)

    var numberStackCopy = this.state.numberStack.map(x => {return (x)})

    numberStackCopy.pop()
    console.log(numberStackCopy)

    this.setState({
        lastKeyPressed:'operation',
        currentDisplay:resultingDisplay,
        numberStack: numberStackCopy
    })
},

_captureX_SquaredKey: function(){
var resultingDisplay

    resultingDisplay=Math.pow((this.state.currentDisplay),2)

        console.log(resultingDisplay)

    var numberStackCopy = this.state.numberStack.map(x => {return (x)})


    console.log(numberStackCopy)

    this.setState({
        lastKeyPressed:'operation',
        currentDisplay:resultingDisplay,
        numberStack: numberStackCopy
    })

},

_captureSquareRootOfX_Key: function(){
var resultingDisplay

    resultingDisplay=Math.sqrt((this.state.currentDisplay))

        console.log(resultingDisplay)

    var numberStackCopy = this.state.numberStack.map(x => {return (x)})



    this.setState({
        lastKeyPressed:'operation',
        currentDisplay:resultingDisplay,
        numberStack: numberStackCopy
    })

},

_captureX_SwapY_Key: function(){

var resultingDisplay
var swap

    resultingDisplay = this.state.numberStack[this.state.numberStack.length-1]
    swap = this.state.currentDisplay
    this.state.numberStack[this.state.numberStack.length-1] = swap

    var numberStackCopy = this.state.numberStack.map(x => {return x})



    this.setState({
        lastKeyPressed:'operation',
        currentDisplay:resultingDisplay,
 //       numberStack: numberStackCopy
    })
},

_captureClearX_Key: function(){
var resultingDisplay

    resultingDisplay=0

        console.log(resultingDisplay)

    this.setState({
        lastKeyPressed:'operation',
        currentDisplay:resultingDisplay,
 //       numberStack: numberStackCopy
    })
},

_captureClearKey: function(){
//var numberStackCopy = this.state.numberStack.map(x => {return 0})
 //   numberStackCopy.push(parseInt(this.state.currentDisplay))
    this.setState({

        numberStack: [],
        lastKeyPressed: 'enter',
        currentDisplay:'0'

        })
},

_captureEnterKey: function(){
    var numberStackCopy = this.state.numberStack.map(x => {return x})
    numberStackCopy.push((this.state.currentDisplay))
    this.setState({

        numberStack: numberStackCopy,
        lastKeyPressed: 'enter',
        currentDisplay:'0'

        })

},

_captureAdditionKey: function(){
    var resultingDisplay

    resultingDisplay=parseInt(this.state.currentDisplay) + this.state.numberStack[this.state.numberStack.length-1]

    var numberStackCopy = this.state.numberStack.map(x => {return x})

    numberStackCopy.pop()

    this.setState({
        lastKeyPressed:'operation',
        currentDisplay:resultingDisplay,
        numberStack: numberStackCopy
    })

},

_captureSubtractionKey: function(){
var resultingDisplay

    resultingDisplay=parseInt(this.state.currentDisplay) - this.state.numberStack[this.state.numberStack.length-1]

    var numberStackCopy = this.state.numberStack.map(x => {return x})

    numberStackCopy.pop()

    this.setState({
        lastKeyPressed:'operation',
        currentDisplay:resultingDisplay,
        numberStack: numberStackCopy
    })

},

_captureMultiplicationKey: function(){
var resultingDisplay

    resultingDisplay=parseInt(this.state.currentDisplay) * this.state.numberStack[this.state.numberStack.length-1]

    var numberStackCopy = this.state.numberStack.map(x => {return x})

    numberStackCopy.pop()

    this.setState({
        lastKeyPressed:'operation',
        currentDisplay:resultingDisplay,
        numberStack: numberStackCopy
    })
},

_captureDivisionKey: function(){
var resultingDisplay

    resultingDisplay=parseInt(this.state.currentDisplay) / this.state.numberStack[this.state.numberStack.length-1]

    var numberStackCopy = this.state.numberStack.map(x => {return x})

    numberStackCopy.pop()

    this.setState({
        lastKeyPressed:'operation',
        currentDisplay:resultingDisplay,
        numberStack: numberStackCopy
    })


},



_captureNumKey: function(evt){

    var resultingDisplay

    switch(this.state.lastKeyPressed){

        case 'operation':
            var numberStackCopy = this.state.numberStack.map(x => {return x})
            numberStackCopy.push((this.state.currentDisplay))
            console.log(evt.target.dataset.numval)
            this.setState({
                lastKeyPressed: 'number',
                currentDisplay: evt.target.dataset.numval,
                numberStack: numberStackCopy

            })

            break;
        default:

            if(this.state.currentDisplay === '0'){

                resultingDisplay= (evt.target.dataset.numval)

            }else{
                resultingDisplay = (this.state.currentDisplay+evt.target.dataset.numval)
            }

            this.setState({
                lastKeyPressed: 'number',
                currentDisplay: resultingDisplay

            })

    }


},

_captureChangeSignKey: function(){

    var resultingDisplay

    resultingDisplay=parseInt(this.state.currentDisplay) * -1

    var numberStackCopy = this.state.numberStack.map(x => {return x})

    numberStackCopy.pop()

    this.setState({
        lastKeyPressed:'operation',
        currentDisplay:resultingDisplay,
        numberStack: numberStackCopy
    })

},




        render: function(){

                console.log(this.state.numberStack)
                console.log(this.state.lastKeyPressed)

			return(


                    <div id="calculator-body">





<div id="calculator-screen">
          <div id="Z-stack">
            <span className="stack-label">Z: {this._getRightIndexAccumulatorStr(this.state.numberStack, -2)}</span>
            <span id="Z-display-target"></span>
          </div>


          <div id="Y-stack">
            <span className="stack-label">Y: {this._getRightIndexAccumulatorStr(this.state.numberStack,-1)} </span>
            <span id="Y-display-target"></span>
          </div>



    <div id="X-stack">
            <span className="stack-label">X: {this.state.currentDisplay} </span>
            <span id="X-display-target"></span>
            </div>

            <div id="screen-text">
            <span id="screen-text-target">RPN Calculator</span>
            </div>
    </div>


  <div className="calculator-button-wrapper">

        <div id="row-1">
            <button onClick={this._captureOneOverX_Key} className="key smaller-font2"><span className="super">1</span>/x
            </button>
            <button onClick={this._captureY_ToX_Key} className="key smaller-font2">y<span className="super">x</span></button>
            <button onClick={this._captureX_SquaredKey} className="key smaller-font2">x<span className="super">2</span></button>
            <button onClick={this._captureSquareRootOfX_Key} className="key smaller-font">SqRt</button>
        </div>
        <div id="row-2">
            <button onClick={this._captureEnterKey} className="key smaller-font2">ENTER</button>
            <button onClick={this._captureClearKey} className="key smaller-font2">CLR</button>
            <button onClick={this._captureClearX_Key} className="key smaller-font2">CLx</button>
            <button onClick={this._captureX_SwapY_Key} className="key smaller-font2">REV</button>
          </div>
        <div id="row-3">
            <button onClick={this._captureSubtractionKey} className="key">-</button>
            <button onClick={this._captureNumKey} data-numval= '7' className="key">7</button>
            <button onClick={this._captureNumKey} data-numval= '8' className="key">8</button>
            <button onClick={this._captureNumKey} data-numval= '9' className="key">9</button>
        </div>
        <div id="row-4">
            <button onClick={this._captureAdditionKey} className="key">+</button>
            <button onClick={this._captureNumKey} data-numval= '4' className="key">4</button>
            <button onClick={this._captureNumKey} data-numval= '5'className="key">5</button>
            <button onClick={this._captureNumKey} data-numval= '6' className="key">6</button>
        </div>
        <div id="row-5">
            <button onClick={this._captureMultiplicationKey} className="key">*</button>
            <button onClick={this._captureNumKey} data-numval= '1' className="key">1</button>
            <button onClick={this._captureNumKey} data-numval='2' className="key">2</button>
            <button onClick={this._captureNumKey} data-numval='3' className="key">3</button>
        </div>
        <div id="row-6">
            <button onClick={this._captureDivisionKey} className="key">/</button>
            <button onClick={this._captureNumKey} data-numval='0' className="key">0</button>
            <button onClick={this._captureNumKey} data-numval='.' className="key">.</button>
            <button onClick={this._captureChangeSignKey} className="key"> + / - </button>
        </div>
  </div>






                    </div>
)
		}
	})

	ReactDOM.render(<AppView/>, document.querySelector('.container'))
}

app()