import React from "react";

export const vinhData = {
  firstName: "Mok",
  lastName: "Chytassenasak",
  title: "Student",
};

export const myData = {
  firstName: "My",
  lastName: "Project",
  title: "Lab05",
};

// TODO Edit the User component code to be able to display DIFFERENT users !
export function User({ firstName, lastName, title }) {
  return (
    <div id="user" data-testid="user">
      <h2> 
        {firstName} {lastName}
      </h2>
      <p>
        {title}
      </p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>PNV React Team !!</h1>
      <p>Here are some PNV React masters, do you know them?</p>
      <User firstName={vinhData.firstName} lastName={vinhData.lastName} title={vinhData.title} />
      <User firstName={myData.firstName} lastName={myData.lastName} title={myData.title} />
    </div>
  );
}

export default App;
