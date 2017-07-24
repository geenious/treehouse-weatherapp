const chalk = require("chalk");



function printMessage(location, feelsLike, outside) {
  const message = `In ${chalk.magenta(location)}, it feels like ${chalk.cyan(feelsLike)} degrees outside and is ${chalk.cyanBright(outside)}`;
  console.log(message);
}

module.exports = printMessage;
