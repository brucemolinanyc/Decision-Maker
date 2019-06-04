// console.log('running')

// const buttonState = {
//     state: true
// }

// const onContentHidden = () => {
//     let x = document.getElementById('content')
//     if (x.style.display === "none"){
//         x.style.display = "block";
//     } else {
//         x.style.display = "none" 
//     }
//     buttonState.state ? buttonState.state = false : buttonState.state = true 
//     render()
// }

const appRoot = document.getElementById('app')

// const render = () =>{
// const template = (  
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={onContentHidden}>{buttonState.state === true ? "Hide Content" : "Show Content"}</button>
//         {console.log(buttonState)}
//         <div id="content"> 
//           <p>Hey. These are some details you can now see! </p>
//         </div>
//     </div>
//     )
//     ReactDOM.render(template, appRoot)
// }


// render()

class Visbility extends React.Component{
    constructor(props){
        super(props)
    
        this.state = {
            visibility: true 
        }
        this.onVisibilityToggle = this.onVisibilityToggle.bind(this)
    }

    onVisibilityToggle(){ 
        this.setState(()=>{
            return{
                visibility: !this.state.visibility
            }
        })
    }
    render(){
        return(
            <div> 
                <h1>Visbility Toggle</h1>
                <button onClick={this.onVisibilityToggle}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && <p>Hey - These are some details you can see!</p>}
            </div>
        )
    }
}

ReactDOM.render(<Visbility />, appRoot)