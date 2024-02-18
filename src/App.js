import React, { useState } from 'react';
import './App.css';

const App = () => {
  // const [name, setName] = useState('');
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL;
    console.log(url);
  }
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder={'+100 new mobile'} />
          <input value={datetime}
            onChange={ev => setDatetime(ev.target.value)}
            type="datetime-local" />
        </div>
        <div className='description'>
          <input value={description}
            onChange={ev => setDescription(ev.target.value)}
            type="text" placeholder={'description'} />
        </div>
        <button type='submit'>Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New mobile</div>
            <div className="description">It was time for new mobile phone</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2023-12-18 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Salary</div>
            <div className="description">It was time for new mobile phone</div>
          </div>
          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2023-12-18 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Laptop</div>
            <div className="description">It was time for new mobile phone</div>
          </div>
          <div className="right">
            <div className="price red">-$600</div>
            <div className="datetime">2023-12-18 15:45</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App

