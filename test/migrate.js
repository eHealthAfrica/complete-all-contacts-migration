'use strict'

var test = require('tape')

var migrate = require('../lib/migrate')

test('skips docs that are no contact', function (t) {
  var doc = {}
  var result = migrate(doc)
  t.equal(result, null)
  t.end()
})

test('skips docs with contact that is already complete', function (t) {
  var doc = { contact: { status: 'complete' } }
  var result = migrate(doc)
  t.equal(result, null)
  t.end()
})

test('sets status of contact to be complete', function (t) {
  var doc = {_id: '1234', contact: {status: 'active'}}
  var result = migrate(doc)
  t.deepEqual(result, [{_id: '1234', contact: {status: 'complete'}}])
  t.end()
})
