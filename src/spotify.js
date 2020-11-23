// whole logical part of auth and other goes here


export const authEndpoint =
    "https://accounts.spotify.com/authorize";

const redirecturi = "http://localhost:3000/";

const clientId = "92b60eea79124508b5f64605a8c15294";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] =
                decodeURIComponent(parts[1]);

            return initial;
        }, {});
}

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirecturi}&scopes=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;