//react.js

class ReactComp extends React.Component{
    render(){
        return React.createElement(
            "div",
            null,
            React.createElement("h3",null,"This is a React Component!"),
            React.createElement("p",null,"I am learning how to use React.")
        );
    }
}

ReactDOM.createRoot(document.getElementById('reactID')).render(React.createElement(ReactComp));