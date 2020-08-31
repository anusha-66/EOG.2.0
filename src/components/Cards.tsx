import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';

//Styles
const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    minWidth: '100px',
    margin: '10px',

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

//Component Props 
type CardsProps = {
  metricValue: []
}

export default (props: { metricValue: any, selectiveListData: any }) => {

  // response from get Measurements data Query and storing them individually categorized by metrics
  const dataFromGraph = [...props.selectiveListData];

  let Wtt: any = [];  // WaterTemp Values
  let fval: any = []; // Flare Temp Values
  let cpval: any = []; // Casing Pressure Values
  let otval: any = []; // Oil Temp Values
  let tpval: any = []; // tubing Pressure Values
  let injval: any = []; // Inj Valve Values

  dataFromGraph && dataFromGraph.map(secondElement => {
    secondElement.map((thirdElement: any) => {
      if (thirdElement.metric == "waterTemp") {
        Wtt.push(thirdElement.value);
      }
      else if (thirdElement.metric == "flareTemp") {
        fval.push(thirdElement.value);
      }
      else if (thirdElement.metric == "casingPressure") {
        cpval.push(thirdElement.value);
      }
      else if (thirdElement.metric == "oilTemp") {
        otval.push(thirdElement.value);
      }
      else if (thirdElement.metric == "tubingPressure") {
        tpval.push(thirdElement.value);
      }
      else if (thirdElement.metric == "injValveOpen") {
        injval.push(thirdElement.value);
      }

    })
  });

  const delayLoop = (fn: any, delay: any, id: any) => {
    return (name: any, i: any) => {
      setTimeout(() => {
        display(name, id);
      }, i * 1300);
    }
  };

  const display = (s: any, id: any) => {
    if (document.getElementById(id))
      document.getElementById(id)!.innerHTML = s;
  };

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

// Defining metric object with necessary data
  const metricObject: any = {
    flareTemp:
    {
      textLabel: "Flare Temp",
      id: "flare",
      metricArray: fval
    },
    waterTemp:
    {
      textLabel: "water Temp",
      id: "water",
      metricArray: Wtt
    },
    casingPressure:
    {
      textLabel: "Casing Pressure",
      id: "cp",
      metricArray: cpval
    },
    oilTemp:
    {
      textLabel: "Oil Temp",
      id: "otemp",
      metricArray: otval
    },
    tubingPressure:
    {
      textLabel: "Tubing Pressure",
      id: "tube",
      metricArray: tpval
    },
    injValveOpen:
    {
      textLabel: "Inj Valve Open",
      id: "inj",
      metricArray: injval
    }
  };


// View (Cards)
  return (<>

  <div style={{ display: "flex", minWidth: "150px" }}>
    {props.metricValue && props.metricValue.map((metric: string) => (
      <Card className={classes.root} >
        <CardContent>
          <Typography variant="h6" component="h2">
            {bull} {metricObject[metric].textLabel}
          </Typography>
          <Typography variant="body2" component="p" id={metricObject[metric].id}>
            {metricObject[metric].metricArray &&
              metricObject[metric].metricArray.forEach(delayLoop(display, 1000, metricObject[metric].id))}
          </Typography>
        </CardContent>
      </Card>
  ))
    }
    </div>

  </>
  );
}
