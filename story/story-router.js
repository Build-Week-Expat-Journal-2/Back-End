const express = require('express');
const stories = require('./story-model.js');
const router = express.Router();

router.get('/', (req, res) => {
   stories.find()
  .then(stories => {
    res.status(200).json(stories);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get posts' });
  });
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    stories.findById(id)
    .then(stories => {
      if (stories) {
        res.json(stories);
      } else {
        res.status(404).json({ message: 'Could not find story with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get story' });
    });
  });
  
  router.get('/:id/story', (req, res) => {
    const { id } = req.params;
  
    stories.findStory(id)
    .then(story => {
      if (story.length) {
        res.json(story);
      } else {
        res.status(404).json({ message: 'Could not find id for given story.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get id.' });
    });
  });


  router.post('/:id/story', (req, res) => {
    const id = req.params.id
    const newStory = {
        ...req.body,
        user_id: id
    } 
    stories.add(newStory)
    .then(post => {
      res.status(201).json(post)
    })
    .catch(error => {
      res.status(500).json({message: "Could not add post"})
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const newStory = {
      ...req.body,
  } 
      stories.updateStory(newStory, id)
      .then(post => {
        res.status(200).json(post)
      }).catch(error => {
          res.status(500).json({ error: 'Could not update story' })
      })
  });

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  stories.remove(id)
  .then(deleted => {
    if (deleted === 1) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find story with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete post' });
  });
});

module.exports = router;