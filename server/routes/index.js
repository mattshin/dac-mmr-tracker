const got = require('got')
const getSteamIdEndpoint = (username, apiKey) => {
    return `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${apiKey}&format=json&vanityurl=${username}`
}

const getDacEndpoint = (steamId) => {
    return `http://101.200.189.65:431/dac/heros/get/@${steamId}`
}

module.exports = (app) => {
    app.get('/health', (_, res) => {
        res.send('HEALTH CHECK OK!\n')
    })

    app.get('/getDacRank/:username', (req, res) => {
        const username = req.params.username
        const apiKey = req.query.key
        if (apiKey) {
            res.status(400, 'Need API Key')
        }

        got(getSteamIdEndpoint(username, apiKey)).then(steamRes => {
            const steamId = JSON.parse(steamRes.body).response.steamid
            got(getDacEndpoint(steamId)).then(dacRes => {
                const userRank = JSON.parse(dacRes.body).user_info[steamId].mmr_level
                res.json({ 'rank': userRank })
            }).catch(err => {
                res.status(400, err)
            })
        }).catch(err => {
            res.status(400, err)
        })
    })

    return app
}

