const db = require('../config/dbConfig');

module.exports = {
    add,
    findBy,
    findById
}
 async function add(user) {
      try {
        const [id] = await db('user').insert(user, 'id');

        return findById(id);
      } catch (error) {
        throw error;
      }
    }

    function findById(id) {
      return db('user').where({ id }).first();
    }

function findBy(filter){
    return db('user').where(filter)
}

