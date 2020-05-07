import React from 'react';

//style sheet
import './global.scss';

//import components
import Header from './components/Header/Header.component.jsx'
import TicketTabs from './components/TicketTabs/TicketTabs.component'
import Ticket from './components/Ticket/Ticket.component'

//import data
import data from './data/data'

function App() {
  return (
    <div className="App">
      <Header />
      <TicketTabs />
      <Ticket ticket={data}/>
    </div>
  );
}

export default App;
