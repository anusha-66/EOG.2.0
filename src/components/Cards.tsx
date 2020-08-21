import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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

export default (props: { metricValue: any }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  console.log(props.metricValue, "metricValue");
  return (<>
    <div style={{ display: "flex", minWidth: "150px" }}>

      {props.metricValue && props.metricValue.includes("flareTemp")  && (
        <Card className={classes.root} >
          <CardContent>
            <Typography variant="h6" component="h2">
              {bull} Flare Temp
          </Typography>
            <Typography variant="body2" component="p">
              1156.7
          </Typography>
          </CardContent>
        </Card>
      )}

      {props.metricValue && props.metricValue.includes("waterTemp")  && (
        <Card className={classes.root} >
          <CardContent>
            <Typography variant="h6" component="h2">
              {bull} Water Temp
         </Typography>
            <Typography variant="body2" component="p">
              22 
         </Typography>
          </CardContent>
        </Card>
      )}

      {props.metricValue && props.metricValue.includes("casingPressure" ) && (
        <Card className={classes.root} >
          <CardContent>
            <Typography variant="h6" component="h2">
              {bull} Casing Pressure
        </Typography>
            <Typography variant="body2" component="p">
              2341
        </Typography>
          </CardContent>
        </Card>
      )}

      {props.metricValue && props.metricValue.includes("oilTemp")  && (
        <Card className={classes.root} >
          <CardContent>
            <Typography variant="h6" component="h2">
              {bull} Oil Temp
          </Typography>
            <Typography variant="body2" component="p">
              1123
          </Typography>
          </CardContent>
        </Card>
      )}

      {props.metricValue && props.metricValue.includes("tubingPressure" ) && (
        <Card className={classes.root} >
          <CardContent>
            <Typography variant="h6" component="h2">
              {bull} Tubing Pressure
          </Typography>
            <Typography variant="body2" component="p">
              167
          </Typography>
          </CardContent>
        </Card>
      )}

      {props.metricValue && props.metricValue.includes("injValveOpen")  && (
        <Card className={classes.root} >
          <CardContent>
            <Typography variant="h6" component="h2">
              {bull} inj Valve Open
          </Typography>
            <Typography variant="body2" component="p">
              575
          </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  </>
  );
}
