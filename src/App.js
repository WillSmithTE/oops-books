import logo from './logo.svg';
import './App.css';
import {Navbar} from './Navbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Dashboard} from './Dashboard';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: '20px',
    marginTop: '20px'
  },
}));

function App() {
  const classes = useStyles();

  return (<>
    <Navbar/>
    <div className="App">
      <header className="App-header">
        <Typography variant="h3" className={classes.title}>
          Books of the week
        </Typography>
        <Dashboard/>
      </header>
    </div>
    </>
  );
}

export default App;
