Updating Read Me, 
Previous Read.me was old.

PROJECT IS FULLY COMPLETE.

Get Metrics:
query{
  getMetrics
}

Get MEasurements:
query {
  getMeasurements(input: {metricName: "flareTemp"}) {
    metric
    value
    unit
    at
  }
}

Get Multiple measurements:

query {
  getMultipleMeasurements(input: {metricName: "flareTemp"}) {
    metric
    measurements {
      metric
      at
      value
      unit
    }
  }
}

## Create React App Visualization

This assessment was bespoke handcrafted for Anusha Ganti.

Read more about this assessment [here](https://react.eogresources.com)
