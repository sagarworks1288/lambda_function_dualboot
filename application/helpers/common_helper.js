
const outputObj = (param) => {
    return { status: false, httpCode: 200, data: [], message: '', error: '', debug: param }
}
module.exports = {
    outputObj
}