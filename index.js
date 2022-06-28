const exec = require("child_process").exec
const dir = "site"

exec(`sass --watch ${dir}/sass:${dir}/css --style compressed`)
console.log(`Compiling Sass in realtime for ${dir} project`)