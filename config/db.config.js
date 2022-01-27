module.exports = {
  mg: {
    HOST: "localhost",
    PORT: 4017,
    USER: "root",
    PASSWORD: "root",
    DB: "nabu_app",
  },
  pg: {
    HOST: "localhost",
    PORT: 4432,
    USER: "gas_db",
    PASSWORD: "gas_db_qwerty123",
    DB: "gas_db",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  ch:{
    url: 'http://localhost',
    port: 4123,
    debug: false,
    basicAuth: {
      username: 'nabu',
      password: 'ICAr8T73ah',
    },
    isUseGzip: false,
    format: "json", // "json" || "csv" || "tsv"
    raw: false,
    config: {
      session_timeout                         : 60,
      output_format_json_quote_64bit_integers : 0,
      enable_http_compression                 : 0,
      database                                : 'nabu',
    },
  },
}



