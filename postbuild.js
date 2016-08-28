var fs = require('fs')
var html = fs.readFileSync('src/index.html', { encoding: 'utf-8' })
var args = process.argv.slice(2)
args.forEach(function (val, i, arr) {
  var bundleid = val
  var bundlejs = fs.readFileSync('./dist/' + bundleid + '.bundle.js', { encoding: 'utf-8' })
  var reg = new RegExp('<script[^>]+?src=[^>]*?' + bundleid + '\\.bundle\\.js[\\s\\S]+?<\\/script>')
  html = html.replace(reg, function () { return '<script>' + bundlejs + '\n</script>' })
  if (i === arr.length - 1) {
    process.stdout.write(html)
  }
})
