Note: Work In Progress : (Working with rlatively new technologies)
However, was able to successfully translate all schema into Queries:

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

Get last known measurements,

Ran out of time before i could integrate them, Interesting technologies, would like to explore more

## Create React App Visualization

This assessment was bespoke handcrafted for Anusha Ganti.

Read more about this assessment [here](https://react.eogresources.com)
