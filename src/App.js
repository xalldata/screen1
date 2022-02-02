import logo from './logo.svg';
import './App.css';
import AdminPage from './Components/AdminPage/AdminPage';
import NewUser from './Components/NewUser/NewUser';

function App() {
  return (
    <div className="App">
     <AdminPage /> 
	 {/** <NewUser /> */}
    </div>
  );
}

export default App;
