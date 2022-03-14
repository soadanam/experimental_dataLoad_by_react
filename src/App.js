import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';

function App() {
  
  const handleAPI = () =>{
}

  return (
    <div>
      <Header></Header>
      <Shop x={'mi'} handleAPI={handleAPI}></Shop>
    </div>
  );
}

export default App;
