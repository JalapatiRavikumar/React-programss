let heading=React.createElement(
    'h1',{
        id:'bg-blue'
    },
    "this is React Js Demo"
)

let para =React.createElement(
    'p',{

    },
    "this is paragraph"
)


let wrapper = React.createElement(
    'p',{

    },
    "this is paragraph"
)

let ele = documnet.getElementById('root');
let root = ReactDOM.createRoot(ele);
root.render(heading)