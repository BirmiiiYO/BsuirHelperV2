import { LatLng, LatLngExpression } from "leaflet";

    export interface ILocation {
        structureId: number;
        address: string;
        lat: any;
        lng:any;
        name: string;
    }

    export interface GetLocation {
        locations: Array<ILocation>;
    }