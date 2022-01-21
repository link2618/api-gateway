import { IPassanger } from "./passanger.interface";
import { IWeather } from "./weather.interface";

export interface IFlight {
    _id?: string;
    pilot: string;
    airplane: string;
    destinationCity: string;
    flightDate: Date;
    passanger: IPassanger;
    weather: IWeather[];
}