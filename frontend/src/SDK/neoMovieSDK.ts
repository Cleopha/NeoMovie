import React from "react";
import FilmInfos from "./Film/Film";

class NeoMovieSDK {
    film: FilmInfos

    constructor() {
        this.film = new FilmInfos();
    }
}

const NeoMovieSDKContext = React.createContext<any>(null)

export {NeoMovieSDK, NeoMovieSDKContext};