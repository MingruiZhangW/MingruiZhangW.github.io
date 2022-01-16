# Why React?

### Writting composable code
- small pieces of code putting together
- customized web ui components

```
function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("root")
)
```

### Writting declarative code

> Declarative programming is a programming paradigm that expresses the logic of a computation without   describing its control flow. Declarative Programming is like asking your friend to fix your car. You don’t care how to fix it, that’s up to her.

> Imperative programming is a programming paradigm that uses statements that change a program’s state Imperative Programming is like your friend calling your father that tells her how to fix your car step by step.

# React setup
https://reactjs.org/docs/add-react-to-a-website.html

# JSX

```
const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

// <h1 class="header">

const element = <h1 className="header">This is JSX</h1>
console.log(element)

/*
    {
        type: "h1", 
        key: null, 
        ref: null, 
        props: {className: "header", children: "This is JSX"}, 
        _owner: null,
        _store: {}
    }
 */

// JSX
ReactDOM.render(element, document.getElementById("root"))

// JSX
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

console.log(page)

/*
    {
        type: "div",
        key: null,
        ref: null,
        props: {
            children: [
                {type: "h1", key: null, ref: null, props: {className: "header", children: "This is JSX"}, _owner: null, _store: {}},
                {type: "p", key: null, ref: null, props: {children: "This is a paragraph"}, _owner: null, _store: {}}
                ]
            },
        _owner: null,
        _store: {}}
 */
```

- What's wrong with this code:
> We need our JSX to be nested under a single parent element

```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```

-  What is a React component?
> A function that returns React elements. (UI)

```
// React dependency introduction
function Profile() {
    return (
        <div>
            <img src="resources/img/progile.jpg"></img>
        </div>
    )
}

ReactDOM.render(
    <Profile/>,
    document.getElementById("profile")
)
```