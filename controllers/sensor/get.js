const Data = require('../../model/data')

module.exports = async function (req, res, next) {
    const data = await Data.find({}, { sensor: 1, state: 1, date: 1, _id: 0 })
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        "success": true,
        "sensors": data
    })
};
