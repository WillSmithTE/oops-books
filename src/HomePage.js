import Typography from '@material-ui/core/Typography';
import {Dashboard} from './Dashboard';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    title: {
        marginBottom: '20px',
        marginTop: '20px'
    },
}));

export const HomePage = () => {
    const classes = useStyles();
    return <div className="App">
        <header className="App-header">
            <Typography variant="h3" className={classes.title}>
                Books of the week
            </Typography>
            <Dashboard />
        </header>
    </div>;
}
