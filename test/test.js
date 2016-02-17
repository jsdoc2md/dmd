'use strict'
const Dmd = require('../')
const test = require('tape')

test('member', function (t) {
  const member = {
    "id": "1",
    "longname": "longname",
    "name": "something",
    "scope": "instance",
    "kind": "member",
    "memberof": "SomeClass",
    "description": "yeah.",
    "type": {
      "names": [
        "string"
      ]
    }
  }

  const template = Dmd.create(member)
  t.ok(/SomeClass.something/.test(template.render()))
  t.end()
})

test('index', function (t) {
  const Group = require('../lib/group')
  const data = {
    namespace: {
      "id": "missle",
      "longname": "missle",
      "name": "missle",
      "scope": "global",
      "kind": "namespace",
      "description": "A missle object, with separate docs for each property."
    },
    member1: {
      "id": "missle.range",
      "longname": "missle.range",
      "name": "range",
      "scope": "static",
      "kind": "member",
      "description": "missile range",
      "memberof": "missle"
    },
    member2: {
      "id": "missle.ballistic",
      "longname": "missle.ballistic",
      "name": "ballistic",
      "scope": "static",
      "kind": "member",
      "description": "ballistic",
      "memberof": "missle"
    }
  }

  const grouped = Dmd.create(data.namespace)
  const group1 = grouped.add(Dmd.create({ id: 'group1', kind: 'group' }))
  group1.add(Dmd.create(data.member1))
  const group2 = grouped.add(Dmd.create({ id: 'group2', kind: 'group' }))
  group2.add(Dmd.create(data.member2))

  // console.log(grouped.tree())
  // console.log(grouped.index())
  // console.log(grouped.renderAll())
  t.end()
})

test.only('build(category)', function (t) {
  const categoryData = require('./fixture/category')
  const template = Dmd.build(categoryData)
  // console.log(template.tree())
  console.log(template.renderAll())
  t.end()
})
