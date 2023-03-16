const {BadRequest} = require("../../../utils/error");

function errorHandler(err,req,res,next){
    console.log('app/middleware/errorhandler.js','4',err);
    if (err instanceof BadRequest){
        return res.status(err.statusCode).json({ error: err.message })
    }
    return res.status(500).json({ error: err.message })
}

module.exports = errorHandler