module.exports = {
  up(database) {
    return Promise.all([
      database.run("")
    ])
  },
  down(database) {
    return Promise.all([
      database.run("")
    ])
  }
};
