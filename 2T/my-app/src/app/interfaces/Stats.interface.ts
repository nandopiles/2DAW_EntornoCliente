export interface IStats {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id: number;
    ast: number | null;
    blk: number | null;
    dreb: number | null;
    fg3_pct: number | null;
    fg3a: number | null;
    fg3m: number | null;
    fg_pct: number | null;
    fga: number | null;
    fgm: number | null;
    ft_pct: number | null;
    fta: number | null;
    ftm: number | null;
    game: Game;
    min: null | string;
    oreb: number | null;
    pf: number | null;
    player: Player;
    pts: number | null;
    reb: number | null;
    stl: number | null;
    team: Team;
    turnover: number | null;
}

export interface Game {
    id: number;
    date: Date;
    home_team_id: number;
    home_team_score: number;
    period: number;
    postseason: boolean;
    season: number;
    status: Status;
    time: Time;
    visitor_team_id: number;
    visitor_team_score: number;
}

export enum Status {
    Final = "Final",
}

export enum Time {
    Empty = " ",
}

export interface Player {
    id: number;
    first_name: FirstName;
    height_feet: number;
    height_inches: number;
    last_name: LastName;
    position: Position;
    team_id: number;
    weight_pounds: number;
}

export enum FirstName {
    LEBron = "LeBron",
}

export enum LastName {
    James = "James",
}

export enum Position {
    F = "F",
}

export interface Team {
    id: number;
    abbreviation: Abbreviation;
    city: City;
    conference: Conference;
    division: Division;
    full_name: FullName;
    name: Name;
}

export enum Abbreviation {
    Cle = "CLE",
    Lal = "LAL",
}

export enum City {
    Cleveland = "Cleveland",
    LosAngeles = "Los Angeles",
}

export enum Conference {
    East = "East",
    West = "West",
}

export enum Division {
    Central = "Central",
    Pacific = "Pacific",
}

export enum FullName {
    ClevelandCavaliers = "Cleveland Cavaliers",
    LosAngelesLakers = "Los Angeles Lakers",
}

export enum Name {
    Cavaliers = "Cavaliers",
    Lakers = "Lakers",
}

export interface Meta {
    current_page: number;
    next_page: number;
    per_page: number;
}
