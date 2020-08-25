import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './reducer';
import { Provider, createClient, useQuery } from 'urql';
import { useGeolocation } from 'react-use';
import LinearProgress from '@material-ui/core/LinearProgress';
// import Chip from '../../components/Chip';
import Cards from '../../components/Cards';
import Graph from '../../components/Graph';
import { IState } from '../../store';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
      maxWidth: 400
    },
    chips: {
      display: "flex",
      flexWrap: "wrap"
    },
    chip: {
      margin: 2,
      backgroundColor: "white"
    },
    noLabel: {
      marginTop: theme.spacing(3)
    }
  }));

const MenuProps = {
    PaperProps: {
      style: {
        width: 300
      }
    }
  };

  function getStyles(metric : string, metricValue : string[], theme: Theme) {
    return {
      fontWeight:
        metricValue.indexOf(metric) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }

const client = createClient({
  url: 'https://react.eogresources.com/graphql',
});

const query = `
query {
  getMetrics
}
`;

const getMetricList = (state: IState) => {
  const { metrics } = state.dashboard;
  return metrics;
};

export default () => {
  return (
    <Provider value={client}>
      <Dashboard />
    </Provider>
  );
};

const Dashboard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const  listOfMetrics  = useSelector(getMetricList);
//console.log(listOfMetrics);
  const [metricValue, setMetricValue] = React.useState([]);
  const [result] = useQuery({
    query,
    
  });

  const { fetching, data, error } = result;

  useEffect(() => {
    if (error) {
      dispatch(actions.metricDataReceivedApiError({ error: error.message }));
      return;
    }
    if (!data) return;
    const { getMetrics } = data;
    dispatch(actions.metricDataReceived(data));
  }, [dispatch, data, error]);

  if (fetching) return <LinearProgress />;

  const handleChange = (event : any) => {
    setMetricValue(event.target.value);
  };


return <> 
{/* {listOfMetrics} */}
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={metricValue}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {(selected as string[]).map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {listOfMetrics.map((metric) => (
            <MenuItem key={metric} value={metric} >
              {metric}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      {metricValue.length > 0 && <Graph metricValue={metricValue}/>}
</>;
};

