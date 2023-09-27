const amount = 2 
if (amount < 10){
    console.log('small number')
}else {
    console.log('large number')
}

console.log('hey its my second node app')


const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds 

console.log(`the system uptime is ${(os.uptime()/60)} minutes.`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)

const path = require('path')

console.log(path.sep)

const filePath = path.join('./content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute =path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)


//new lessons 

const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', '', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})