import { reducer as weatherReducer } from '../Features/Weather/reducer';
import { reducer as dashboardReducer } from '../Features/Dashboard/reducer';

export default {
  weather: weatherReducer,
  dashboard : dashboardReducer
};
