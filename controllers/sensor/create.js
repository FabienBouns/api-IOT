const Data = require('../../model/data')


module.exports = async function (req, res, next) {
    const { key, sensor, state } = req.query;

    console.log(key, sensor, state);
    
    const sensorData = await Data.findOne({ sensor })
    if (sensorData) {
        sensorData.sensor = sensor;
        sensorData.state = state;
        await sensorData.save();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({
            "success": true,
            "message": "sensor data updated"
        })
    }
    else {
        //create data sensor
        const data = new Data({
            sensor,
            state
        });
        await data.save()

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({
            "success": true,
            "message": "data sensor created"
        })
    }
};
