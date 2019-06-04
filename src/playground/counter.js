

// const user = {
//     name: 'Bruce',
//     age: 27,
//     location: 'NYC'
// }

// function getLocation(location){
//     if (location){
//         return <p> Location: {location} </p>
//     }
// }

// let count = 0 
// const addOne = ()=>{
//     count += 1
//     renderCounterApp()
// }

// const minusOne = () => {
//     count -= 1
//     renderCounterApp()
// }

// const reset = () => {
//     count = 0
//     renderCounterApp()
// }



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//           <h1> Count: {count} </h1>
//           <button onClick={addOne}>+1</button>
//           <button onClick={minusOne}>-1</button>
//           <button onClick={reset}>Reset</button>
//         </div>
//       )
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp()

class Counter extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }
    handleAddOne(){
        this.setState({count: this.state.count +=1})
    }

    handleMinusOne(){
        this.setState({count: this.state.count -=1})
    }

    handleReset(){
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    componentDidMount(){
        const json = localStorage.getItem('count')
        const count = JSON.parse(json)

        this.setState(()=> ({count:count}))
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.count === this.state.count){
            localStorage.setItem('count', this.state.count)
        }
      
    }


    render(){
        return(
            <div>
              <h1>Count: {this.state.count}</h1>
              <button onClick={this.handleAddOne}>+1</button>
              <button onClick={this.handleMinusOne}>-1</button>
              <button onClick={this.handleReset}>reset</button>
            </div>
        )   
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'))