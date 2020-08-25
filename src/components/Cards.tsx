import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

type CardsProps = {
  metricValue: []
}

export default (props: { metricValue: any, selectiveListData: any }) => {

  const dataFromGraph = [...props.selectiveListData];

  let Wtt: any = []; 
  let fval:any = []; 
  let cpval: any = []; 
  let otval :any = []; 
  let tpval: any = []; 
  let injval: any = [];

  dataFromGraph && dataFromGraph.map(secondElement => {
    secondElement.map((thirdElement: any) => {
        if (thirdElement.metric == "waterTemp") {
          Wtt.push(thirdElement.value);
        }
        else if(thirdElement.metric == "flareTemp"){
          fval.push(thirdElement.value);
        }
        else if(thirdElement.metric == "casingPressure"){
          cpval.push(thirdElement.value);
        }
        else if(thirdElement.metric == "oilTemp"){
          otval.push(thirdElement.value);
        }
        else if(thirdElement.metric == "tubingPressure"){
          tpval.push(thirdElement.value);
        }
        else if(thirdElement.metric == "injValveOpen"){
          injval.push(thirdElement.value);
        }
        
    })
});




// const fval = [1230, 1187.41, 1145.66, 1179.19, 1187.08, 1216.71, 1179.26, 1223.13, 1166.51, 1172.72];
const delayLoop = (fn:any , delay:any, id:any) => {
  return (name:any, i:any) => {
    setTimeout(() => {
      display(name, id);
    }, i * 1300);
  }
};

const display = (s:any, id:any) =>{  
  // console.log(id, "idddd")
  if(document.getElementById(id))
  document.getElementById(id)!.innerHTML =s;
};

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  console.log(props.metricValue, "metricValue");

  return (<>
    <div style={{ display: "flex", minWidth: "150px" }}>

      {props.metricValue && props.metricValue.includes("flareTemp") && (
        <Card className={classes.root} >
          <CardContent>
            <Typography variant="h6" component="h2">
              {bull} Flare Temp
          </Typography>
            <Typography variant="body2" component="p" id= "flare">
              {fval && fval.forEach(delayLoop(display, 1000, "flare"))}
            </Typography>
          </CardContent>
        </Card>
      )}

      {props.metricValue && props.metricValue.includes("waterTemp") && (
        <Card className={classes.root} >
          <CardContent>
            <Typography variant="h6" component="h2">
              {bull} Water Temp
         </Typography>
            <Typography variant="body2" component="p" id="water">
            {Wtt && Wtt.forEach(delayLoop(display, 1000, "water"))}
         </Typography>
          </CardContent>
        </Card>
      )}

      {props.metricValue && props.metricValue.includes("casingPressure") && (
        <Card className={classes.root} >
          <CardContent>
            <Typography variant="h6" component="h2">
              {bull} Casing Pressure
        </Typography>
            <Typography variant="body2" component="p" id = "cp">
            {cpval && cpval.forEach(delayLoop(display, 1000, "cp"))}
        </Typography>
          </CardContent>
        </Card>
      )}

      {props.metricValue && props.metricValue.includes("oilTemp") && (
        <Card className={classes.root} >
          <CardContent>
            <Typography variant="h6" component="h2">
              {bull} Oil Temp
          </Typography>
            <Typography variant="body2" component="p" id="otemp">
            {otval && otval.forEach(delayLoop(display, 1000, "otemp"))}
          </Typography>
          </CardContent>
        </Card>
      )}

      {props.metricValue && props.metricValue.includes("tubingPressure") && (
        <Card className={classes.root} >
          <CardContent>
            <Typography variant="h6" component="h2">
              {bull} Tubing Pressure
          </Typography>
            <Typography variant="body2" component="p" id="tube">
            {tpval && tpval.forEach(delayLoop(display, 1000, "tube"))}
          </Typography>
          </CardContent>
        </Card>
      )}

      {props.metricValue && props.metricValue.includes("injValveOpen") && (
        <Card className={classes.root} >
          <CardContent>
            <Typography variant="h6" component="h2">
              {bull} inj Valve Open
          </Typography>
            <Typography variant="body2" component="p" id="inj">
            {injval && injval.forEach(delayLoop(display, 1000, "inj"))}
          </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  </>
  );
}
