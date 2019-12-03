exports.version = '1.0.0'
exports.appname = 'IBM Digital'
exports.author = 'IBM';
//method exports
exports.getToken = function () {
      return `Key: ${Math.random()}`
}