module.exports = {
  up(database) {
    return Promise.all([
      database.run("CREATE CONSTRAINT ON (node:Node) ASSERT node.externalId IS UNIQUE"),
      database.run("CREATE INDEX ON :Node(externalType)")
    ])
  },
  down(database) {
    return Promise.all([
      database.run("DROP CONSTRAINT ON (node:Node) ASSERT node.externalId IS UNIQUE"),
      database.run("DROP INDEX ON :Node(externalType)")
    ])
  }
};
