export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // remove after debugging
    // token: "BQBv8bHNoyWgHrs8yR_M9rMDPusfcFxUJk1aWa394vVIPXJJJnSxlL-v1SrxhY3lEyQHQOeRgAiVitkg1rvQxOJ_oGmfKPh1nJx6aBdH9E4XVOyQjzlxat5Fq_B8wBQEcmSArDu6gEtOJ5BES7oqYhbnJLIzaSk",
}


const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        default:
            return state;
    }
}

export default reducer;