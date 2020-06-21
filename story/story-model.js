const db = require('../config/dbConfig.js');

module.exports ={
    find,
    findById,
    findStory,
    add,
    updateStory,
    remove
};

function find(){
    return db('story');
}

function findById(id){
    return db('story').where({id}).first();

}

function findStory(id) {
    return db('story')
      .where({'story.user_id': id})
  }
  
  function add(newStory) {
    return db('story').insert(newStory)
      .then((ids) => {
        return findById(ids[0])
      })
  }
  
  function updateStory(changes, id) {
    return db('story').where("id", id).first().update(changes)
  }
  
  function remove(id) {
        return db('story').where({id}).del()
      }
  