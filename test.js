const fs = require('fs')

const JsonString = fs.readFileSync('./data.json','utf-8')
const data = JSON.parse(JsonString)

console.log(data.submit.url)