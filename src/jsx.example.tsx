import {createElement as e, useState} from "react";

function App() {
    const [count, setCount] = useState(0)
    // return (
    //   <h1>Hello React</h1>
    // );
//  return React.createElement('h1', {}, 'Hello from JS')
    return e('div', {className: 'container'}, [
        e('h1', {className: 'fontBold', key: 1}, `Text JSX ${count}`),
        e('button', {
            className: 'py-2 px-4 border',
            key: 2,
            onClick: () => setCount(count + 1)
        }, 'Click me')
    ])
}
