var WeatherAdmin = require('./WeatherAdmin.js')
var userView = process.argv[2]
var name = process.argv[3]
var location = process.argv[4]
var admin = new WeatherAdmin()

switch(userView){
    case 'admin':
        admin.getData()
        break
    case 'user':
        admin.newUserSearch(name, location)
        break
    default:
        console.log('please indicate whether you are admin or new user')
}