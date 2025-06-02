export interface HourlyWeather {
    time: Date[];
    temperature2m: any;
    precipitation: any;
    apparentTemperature: any;
    relativeHumidity2m: any;
  }
  
  export interface DailyWeather {
    time: Date[];
    temperature2mMax: any;
    temperature2mMin: any;
  }
  
  export interface WeatherData {
    hourly: HourlyWeather;
    daily:  DailyWeather;
  }
  