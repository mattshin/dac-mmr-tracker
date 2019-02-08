const got = require('got')
const getSteamIdEndpoint = (username, apiKey) => {
    return `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${apiKey}&format=json&vanityurl=${username}`
}

const getDacEndpoint = (steamId) => {
    return `http://101.200.189.65:431/dac/ranking/get/?player_ids=${steamId}`
}

module.exports = (app) => {
    app.get('/health', (_, res) => {
        res.send('HEALTH CHECK OK!\n')
    })

    app.get('/getDacRank/:username', (req, res) => {
        const username = req.params.username
        const apiKey = req.query.key
	console.log(`GET with username:${username} and key:${apiKey}`)

        if (apiKey) {
            res.status(400, 'Need API Key')
        }

        got(getSteamIdEndpoint(username, apiKey)).then(steamRes => {
            const steamId = JSON.parse(steamRes.body).response.steamid
            got(getDacEndpoint(steamId)).then(dacRes => {
		console.log(dacRes.body)
                const rankInfo = JSON.parse(dacRes.body).ranking_info[0]
                res.json({ 'division': rankInfo.mmr_level, 'rating': rankInfo.score })
            }).catch(err => {
                res.status(400, err)
            })
        }).catch(err => {
            res.status(400, err)
        })
    })

    return app
}

