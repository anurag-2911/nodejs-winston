


const winston = require('winston');
const logger = winston.createLogger({
    exitOnError: false,
    transports: [
        new winston.transports.File({
            level:'silly',
            filename:'test.log',
            zippedArchive:false,
            maxFiles:10,
            maxsize:1000,
            handleExceptions: true,
            humanReadableUnhandledException: true,
            tailable:true
        })
    ]
});

logger.on('logging', function(transport) {
    // check if this was the `File` transport
    // if (transport.name === 'file') {
      console.log('logged a message to', transport.filename);
    // }
  });

logger.on('error', function(err) 
{
    console.log(err);
}
);



logger.info('incy wincy spider'.repeat(10));
logger.info('climbed up the water spout,'.repeat(10));
logger.info('down came the rain and washed the spider out'.repeat(10));
logger.warn('out came the sun and dried up the rain'.repeat(10));
logger.info('incy wincy spider climbed up the spout again'.repeat(10));
logger.error('errors and warnings'.repeat(10));


    
console.log('hello world');
