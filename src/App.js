import logo from './logo.svg';
import './App.css';
import {Navbar} from './Navbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
      </header>
    </div>
    </>
  );
}

export default App;
