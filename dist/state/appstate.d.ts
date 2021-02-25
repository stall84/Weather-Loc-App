declare type GoogleCoordObj = {
    lat: number;
    lng: number;
};
export declare class Forecast {
    date: string;
    high: number;
    low: number;
    desc: string;
    icon: string;
    constructor(date: string, high: number, low: number, desc: string, icon: string);
}
declare class GeoLocation {
    lat: number;
    lng: number;
    constructor(lat: number, lng: number);
}
declare class AppState {
    private static instance;
    coordinates: GeoLocation;
    forecastArray: Forecast[];
    private constructor();
    static getInstance(): AppState;
    addCoordinates(coordObj: GoogleCoordObj): void;
    addForecasts(forecastArr: Forecast[]): void;
    getCoordinates(): GeoLocation;
}
export declare const appState: AppState;
export {};
