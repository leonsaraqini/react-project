const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}, "I am a h1 tag"), 
         React.createElement("h1", {}, "I am a h1 tag second")]),
    React.createElement("div", {id: "child2 "}, 
        [React.createElement("h1", {}, "I am a h1 tag"), 
        React.createElement("h1", {}, "I am a h1 tag second")])
    ]);

const heading = React.createElement("h1", {id: "heading"}, "Hello World!");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);