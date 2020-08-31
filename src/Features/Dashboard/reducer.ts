import { createSlice, PayloadAction } from 'redux-starter-kit';

export type MetricData = {
  getMetrics:[],
};

export type MeasurementData = {
  getMultipleMeasurements:[],
};

export type ApiErrorAction = {
  error: string;
};

const initialState = {
  metrics:[],
  measurements: []
};


const slice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
      metricDataReceived: (state, action: PayloadAction<MetricData>) => {
        const { getMetrics } =  action.payload;
        state.metrics = getMetrics;
      },

      metricDataReceivedApiError: (state, action: PayloadAction<ApiErrorAction>) => state,

      measurementsDataReceived: (state, action: PayloadAction<MeasurementData>) => {
        const { getMultipleMeasurements } =  action.payload;
        state.measurements = getMultipleMeasurements;
        
      },
      
      measurementsDataReceivedApiError: (state, action: PayloadAction<ApiErrorAction>) => state,
    },
  });

export const reducer = slice.reducer;
export const actions = slice.actions;
