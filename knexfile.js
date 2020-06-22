module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, 
    connection: {
      filename: './dev.sqlite3',
    },
    // needed when using foreign keys
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = 0', done); // turn on FK enforcement
      },
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },

  production: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: "./dev.sqlite3",
    },
    pool: {
        afterCreate: (conn, done) => {
            conn.run("PRAGMA foreign_keys = 0", done);
        },
    },
    migrations: {
        directory: "./migrations",
    },
    seeds: {
        directory: "./seeds",
    },
},
};