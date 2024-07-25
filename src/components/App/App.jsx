import Chat from '../Chat/Chat';
import Header from '../Header/Header';
import Rooms from '../Rooms/Rooms';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='App-container'>
        <Rooms />
        <Chat />
      </div>
    </div>
  );
}

export default App;
