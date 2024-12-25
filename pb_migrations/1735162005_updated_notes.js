/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3395098727")

  // remove field
  collection.fields.removeById("date2990389176")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "autodate2990389176",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3395098727")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date2990389176",
    "max": "",
    "min": "",
    "name": "created",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // remove field
  collection.fields.removeById("autodate2990389176")

  return app.save(collection)
})
