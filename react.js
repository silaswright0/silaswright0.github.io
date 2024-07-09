//react.js

class reactComp extends React.Component{
    render(){
        return(
            <div>
                <h3>
                    This is a React Component!
                </h3>
                <p>
                    I am learning how to use React.
                </p>
            </div>
        );
    }
}

ReactDOM.createRoot(document.getElementById('reactID')).render(<reactComp />);