import ky from 'ky'

const STEAM_USER_ENDPOINT = (username) => {
  return `http://api.steampowered.com/<interface name>/<method name>/v<version>/?key=<api key>&format=<format>` + process.env.API_KEY
}

export default {
  getSteamIds: function (usernames) {
    return usernames
  },
}
