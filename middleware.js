const chalk = require('chalk')

function middleware (req, res, next){
  req.Date = Date.now()
  const timeStart = new Date()
  let time = chalk.bold.yellowBright(timeStart.toLocaleString())
  let reqMethod = chalk.bold.greenBright(req.method)
  let reqUrl = chalk.bold.white.bgRed(` ${req.url} `)
  res.once('finish',() => {
    let nowTime = Date.now()
    let duringTime = nowTime - req.Date
    let logMessage = `${time} | ${reqMethod} form ${reqUrl} | total time: ${chalk.green(duringTime)}ms`
    if ( duringTime > 2000 ) {
      logMessage += ' | Your computer suck!!'
    }
    console.log(logMessage)
  })

  next()
}

module.exports = middleware