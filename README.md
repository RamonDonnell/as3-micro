
* `npm i; npm start`
* localhost:3000
* Click "Query your server"
* CORS error

This works
```
curl --request POST --header 'content-type: application/json' --url http://localhost:3000/graphql --data '{"query":"query { __typename }"}'
```