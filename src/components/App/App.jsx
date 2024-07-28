import { useEffect, useState } from 'react';
import Chat from '../Chat/Chat';
import Header from '../Header/Header';
import Rooms from '../Rooms/Rooms';
import Users from '../UsersList/UsersList';
import './App.css';

const App = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://hr2.sibers.com/test/frontend/users.json')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className="App">
      <Header />
      {users.length === 0
        ? <></>
        : <div className='App-container'>
          <Rooms />
          <Chat />
          <Users data={users} />
        </div>
      }
    </div>
  );
}

export default App;
