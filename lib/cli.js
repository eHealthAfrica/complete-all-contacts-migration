'use strict'

var cli = {}

cli.run = function run(argv) {
  console.log(argv[0])
}

function create() {
  return Object.create(cli)
}

module.exports = create
