
class Errorhandler extends Error{
    constructor(statusCode,message){
        super(message);
        this.statusCode = statusCode;
    }
}
module.exports = Errorhandler;
=======
class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode


        Error.captureStackTrace(this,this.constructor);


    }
    
}
module.exports = ErrorHandler
