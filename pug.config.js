const bib = require("./Thèse.json")

obj = {}
bib.forEach(entry => {
    obj[entry.id] = entry
})

used = []
function cite() {
    let ids = []
    for (var i = 0; i < arguments.length; ++i) {
        let key = arguments[i]
        let idx = used.indexOf(key)
        if (idx == -1) {
            used.push(key)
            ids.push(used.length)
        } else {
            ids.push(idx)
        }
    }
    return `[${ids.join(', ')}]`
}

function bibliography() {
    let str = '<ol>'
    used.forEach(id => {
        if (obj[id]) {
            str += `<li>${obj[id].title}</li>`
        }
        console.log(id)
    })
    str += '</ol>'
    return str
}

exports.bib = obj
exports.cite = cite
exports.bibliography = bibliography