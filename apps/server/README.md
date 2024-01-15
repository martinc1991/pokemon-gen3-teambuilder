## TODO

### Items module

- pagination for getAll method
- unit testing

### Natures module

- pagination for getAll method
- unit testing

### Teams module

- When editting a team, the id should be obtained from the url (not from the body)

# About .envs

.envs are configured to work with _dev_ and _prod_ environments. For now, they must be in sync between the ones in apps/db and apps/server.
Within these files there are instruction on what to change and what not to change. This is in order to be able to spin the server and db in docker and then be able to migrate and seed the db running only scripts.
