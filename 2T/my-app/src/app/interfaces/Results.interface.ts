export interface IEpisodeResult {
    name: string;
    episode: string;
}

export interface ICharacterResult {
    name: string;
    image: string;
    status: string;
    episodes: IEpisodeResult[];
}

export interface IPlayersResult {
    name: string;
    image: string;
}

export interface IFoodResult {
    name: string;
    image: string;
}