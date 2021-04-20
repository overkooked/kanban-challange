

module.exports = {
    "port": process.env.PORT || 4200,
    "server": {
        "baseDir": "./"
    },
    "serveStatic": [{
        "route": "./app/partials",
        "dir": "partials"
    }]
}