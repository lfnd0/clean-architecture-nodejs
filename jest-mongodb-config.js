module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '4.7.3',
      skipMD5: true
    },
    instance: {
      dbName: 'jest'
    },
    autoStart: false
  }
}
