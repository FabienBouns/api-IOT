module.exports = async function checkAuth(req, res, next) {
    const token = req.query.key;

    if (!token || token != process.env.KEYSTORE_PASSWORD) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(403).json({
            "success": false,
            "message": "invalid token"
        })
    }
    else {
        next();
    }
}