import { LatLng, LatLngExpression } from "leaflet";

    export interface ILocation {
        structureId: number;
        address: string;
        lat:  number;
        lng: number;
        name: string; 
    }

    export interface GetLocation {
        locations: Array<ILocation>;
    }