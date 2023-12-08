export type Origin ={
    name: string;
    url: string;
}

export type Location= {
    name: string;
    url: string;
}

export type Episode ={
    [index: number]: string;
}

export type Characterli= {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: Episode;
    url: string;
}