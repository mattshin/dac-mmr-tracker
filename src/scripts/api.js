const API_ENDPOINT = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/RiotSchmick?api_key=' + process.env.API_KEY

export default {
  getSummonerIDs: function (summonerNames) {
    return summonerNames
  },

  getSummonerMMRs: function (summonerIDs) {
    return summonerIDs
  }
}
