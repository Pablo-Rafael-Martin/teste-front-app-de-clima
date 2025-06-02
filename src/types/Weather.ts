export interface HourlyWeather {
    time: Date[];
    temperature2m: number[];
    precipitation: number[];
    apparentTemperature: number[];
    relativeHumidity2m: number[];
  }
  
  export interface DailyWeather {
    time: Date[];
    temperature2mMax: number[];
    temperature2mMin: number[];
  }
  
  export interface WeatherData {
    hourly: HourlyWeather;
    daily:  DailyWeather;
  }
  