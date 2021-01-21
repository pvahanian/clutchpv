import {Route} from 'react-router-dom'
//import PrivateRoute from '../src/components/PrivateRoute.js'
import Login from './pages/Login.js'
import './App.css';

function App() {
  return (
    
    <>
      <Route exact path='/'>
        <Login />
      </Route>
      {/* <PrivateRoute exact path='/chatroom' /> */}
    </>
    
  );
}

export default App;
