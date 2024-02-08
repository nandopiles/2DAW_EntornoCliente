export interface IBasket {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id: number;
    first_name: string;
    height_feet: null;
    height_inches: null;
    last_name: string;
    position: Position;
    team: Team;
    weight_pounds: null;
}

export enum Position {
    C = "C",
    CF = "C-F",
    Empty = "",
    F = "F",
    FC = "F-C",
    G = "G",
    GF = "G-F",
}

export interface Team {
    id: number;
    abbreviation: string;
    city: string;
    conference: Conference;
    division: Division;
    full_name: string;
    name: string;
}

export enum Conference {
    East = "East",
    West = "West",
}

export enum Division {
    Atlantic = "Atlantic",
    Central = "Central",
    Northwest = "Northwest",
    Pacific = "Pacific",
    Southeast = "Southeast",
    Southwest = "Southwest",
}

export interface Meta {
    current_page: number;
    next_page: number;
    per_page: number;
}
