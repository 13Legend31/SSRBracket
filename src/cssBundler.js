const fs = require('fs')
const path = require('path')

let MassiveCSS = ''

function Read(dir) {
    const files = fs.readdirSync(dir)
    for (let i = 0; i < files.length; i++) {
        if (/.css/.test(files[i])) {
            console.log(files[i])
            MassiveCSS += fs.readFileSync(path.join(dir, files[i]), 'utf8')
        } else if (fs.lstatSync(path.join(dir, files[i])).isDirectory()) {
            const searchDir = path.join(dir, files[i])
            Read(searchDir)
        }
    }
}

Read(__dirname)

fs.writeFile('MassiveCSS.css', MassiveCSS)