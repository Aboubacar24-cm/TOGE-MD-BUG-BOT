//------------------------------------------------------------------------------------------------------------------------------
//                                     TOGE-MD WHATSAPP BOT
//
//                                           V.1.2.0
//
//                               ▀▀█▀▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀ 　 ▒█▀▄▀█ ▒█▀▀▄ 
//                               ░▒█░░ ▒█░░▒█ ▒█░▄▄ ▒█▀▀▀ 　 ▒█▒█▒█ ▒█░▒█ 
//                               ░▒█░░ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄ 　 ▒█░░▒█ ▒█▄▄▀
//
//------------------------------------------------------------------------------------------------------------------------------

/**

* @project_name : TOGE-MD
* @Developer : TOGE INUMAKI
* @Version : v.1.2.7
* @license : APACHE-2.0

THIS PROJECT IS MADE UNDER THE CIRCUMSTANCES OF "APACHE-2.0"
MEANS ANY KIND OF (MISLEADING, RE-UPLOADING, RENG) WILL LEAD YOU
TO A DMCA REPORT FROM THE OFFICIAL GITHUB, WHICH RESULT IN 
REMOVING UR COPIED/RE-UPLOADED PROJECT FROM THERE, IN SOME
CONDITIONS IT CAN LEADS TO TERMINATE UR ACCOUNT FROM THAT PLATFORM

│• @C_holder : toge12345

**/

const fs = require('fs')
const { color } = require('./color')

async function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

async function nocache(module, cb = () => { }) {
    console.log(color('Module', 'blue'), color(`'${module} is up to date!'`, 'cyan'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

module.exports = {
    uncache,
    nocache
}
