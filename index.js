const winston = require('winston');
const logger = new (winston.Logger)({
    exitOnError: false,
    transports: [
      new (winston.transports.File)({
        level: 'silly',
        filename: 'test.log',
        maxsize: 1000,
        maxFiles: 10,
        json: false,
        handleExceptions: true,
        humanReadableUnhandledException: true,
        zippedArchive: false,
        tailable: true,
        
      })
    ]
  });

  logger.on('error',function(err) 
  {
      console.log(err);
  }
  );

  logger.on('logging',(transport, level, msg, meta)=>{

    console.log(msg);
  });

  logger.on('bhola',(transport, level, msg, meta)=>{
    console.log(msg);
  });

 
logger.info('incy wincy spider'.repeat(10));
logger.info('climbed up the water spout,'.repeat(10));
logger.info('down came the rain and washed the spider out'.repeat(10));
logger.warn('out came the sun and dried up the rain'.repeat(10));
logger.info('incy wincy spider climbed up the spout again'.repeat(10));
logger.error('errors and warnings'.repeat(10));


    
console.log('hello world');
