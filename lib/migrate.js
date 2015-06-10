'use strict'

function migrate(doc) {
  var result = null

  if (doc.contact && doc.contact.status !== 'complete') {
    doc.contact.status = 'complete'
    result = [doc]
  }
  return result
}

module.exports = migrate
