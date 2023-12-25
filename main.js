const root = ReactDOM.createRoot(document.querySelector('#root'))
function Counter() {
    return(
        <div className = "counter" style = {{ 
            background : 'skyblue' ,
            width : '400px' ,
            height : '50px' ,
            display : 'flex' ,
            textAlign : 'center' , 
            alignItems : 'baseline'
        }}> 
            {/* <h1>Counter</h1> */}
            <br/>
            <button style={{height : '100%' , flex: '1' , fontSize : '32px' , marginRight : '0px'}}>+</button>
            <h2 style ={{height : '100%' , flex : '1' , fontSize : '32px' , margin : '0 10px'}}>{0}</h2>
            <button style={{height : '100%' , flex : '1' , fontSize : '32px' , marginRight:'0px'}}>-</button>
            <button style={{height : '100%' , flex:'1' , fontSize : '32px'}}>C</button>
            <button style={{height : '100%' , flex:'1' , fontSize : '32px'}}>X</button>
        </div>
    )
}
function App() {
    return (
        <div>
            <h1>Today : {(new Date()).toDateString()}</h1>
            <Counter/>
        </div>
    )
}
root.render(<App />)