module.exports = async function checkDataFormat(req, res, next) {
    try {
        const args = req.query;

        if(args.key && args.sensor && args.state) {
            next();
        }
        else {
            res.status(400).json({
                "success": false,
                "message": "missing arguments"
            })
        }

    } catch (err) {
        res.status(400).json({
            "success": false,
            "message": "bad request"
        })
    }
}