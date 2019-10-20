### Installation
- download to desired directory
- configure `connections.json`
- `yarn` or `npm install`

### Create Migration
- `./neo4j_migrate -g <fileName>`

### Run Migration
- `./neo4j_migrate -up <fileName>`
- `./neo4j_migrate -up -all`
- `./neo4j_migrate -down <fileName>`
- `./neo4j_migrate -down -all`

### DB Info
- `./neo4j_migrate -ls indexes`
- `./neo4j_migrate -ls schema`

### Issues
This package is currently under active development and should be used at your own risk. If issues are found please open a issue againt the package on GitHub and I will do my best to fix it. Also, feel free to contribute. If you find this package useful and would like to extend it please do so under this repository to ensure all future users can benefit.