const STEAM_USER_ENDPOINT = (username) => {
  return `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${process.env.API_KEY}&format=json&vanityurl=${username}`
}

export default {
  getSteamIds: function (usernames) {
    return usernames
  }
}
