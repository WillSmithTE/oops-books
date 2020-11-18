import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {
  Route,
  Switch
} from 'react-router-dom';
import {HomePage} from './HomePage';
import {Login} from './login/Login';
import Signup from './signup/Signup';
import {BASE_URL, ACCESS_TOKEN} from './util/constants';
import {useState} from 'react';
import Alert from 'react-s-alert';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
  }

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (<>
    <Navbar />
    <Switch>
      <Route path={BASE_URL + "/login"} render={(props) => <Login authenticated={authenticated} {...props} />} />
      <Route path={BASE_URL + "/signup"} render={(props) => <Signup authenticated={authenticated} {...props} />}></Route>
      <Route render={(props) => <HomePage {...props} />}></Route>
    </Switch>
  </>
  );
}

export default App;
