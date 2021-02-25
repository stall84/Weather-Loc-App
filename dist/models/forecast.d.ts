declare type WeatherbitResponse = {
    data: {
        valid_date: string;
        high_temp: number;
        low_temp: number;
        weather: {
            description: string;
        };
    }[];
};
export declare class Forecast {
    date: WeatherbitResponse;
    high: WeatherbitResponse;
    low: WeatherbitResponse;
    desc: WeatherbitResponse;
    constructor(date: WeatherbitResponse, high: WeatherbitResponse, low: WeatherbitResponse, desc: WeatherbitResponse);
}
export {};
