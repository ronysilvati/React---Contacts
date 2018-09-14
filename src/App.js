import React, { Component } from 'react';

class ContactList extends React.Component{
    render() {
        const peoples = this.props.contacts;

        const element = <ol>
            {peoples.map((people) => {
                return <li key={people.name}>{people.name}</li>
            })}
        </ol>;

        return element;
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
            {name: 'Lucas'},
            {name: 'Rony'}
            ]}/>
        <ContactList contacts={[
            {name:'Delys'}
        ]}/>
      </div>
    );
  }
}

export default App;
