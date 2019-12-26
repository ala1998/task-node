
const config = {
  
    server: {
      port: process.env.PORT || 3000,
      hostname: process.env.HOSTNAME || 'localhost',
    },
    database: {
      host: 'localhost',
      user: "newuser",
      password: "alab1998?!",
      database_name: 'diseases',
      port: 3306
      
    },
  

};

module.exports = config;
