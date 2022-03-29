let initialState = {
    songData: [],
    pageSize: 5,
    totalSongsCount: 21,
    currentPage: 2
}

const MusicPageReducer = (state=initialState,action) => {

    let stateCopy;
    stateCopy = {...state}
    stateCopy.songData = [...state.songData]

    switch (action.type) {
        case "SET_MUSIC": {
            return {stateCopy, songData: [...action.songData]}
        }
    }
    return state;
}

export const setMusicActionCreator = (songData) => {
    return {
        type: "SET_MUSIC",
        songData: songData
    };
};

export default MusicPageReducer