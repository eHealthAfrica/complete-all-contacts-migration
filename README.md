complete-all-contacts-migration
===============================

Set status of all contacts to 'complete'


Usage
-----

```sh
npm install -g complete-all-contacts-migration
complete-all-contacts http://localhost:5984/persons
```

This will set the status on all `person` docs that are a `contact` to
`"complete"`.


Testing
-------

Run the tests with
```sh
npm test
```
