exports.seed = function (knex) {
    return knex('user').truncate()
      .then(function () {
        return knex('user').insert([
          {
            id: 1,
            username: 'Raymond_the_Cat',
            firstname: 'Raymond',
            password: 'Tg3?`tHg=56.2whR',
            location: 'Goldenrod Island, GI',
          },
          {
            id: 2,
            username: 'Clipboard_secretary',
            firstname: 'Isabelle',
            password: 'WP45J%T%+L&dX!gP',
            location: 'Goldenrod Island, GI',
          }
        ]);
      })
      .then(() => knex('story').truncate())
      .then(function () {
        return knex('story').insert([
          {
            id: 1,
            title: 'Rainy Day',
            location: 'The Pier',
            description:'I decided to get out of the office for a bit since it was slow today and walk to the pier. Even though its raining its still a nice day.(✿◠‿◠)',
            date:'March 17, 2020',
            image_url:'https://images.unsplash.com/photo-1493503979513-c7463d52a528?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            user_id: 2,
          },
          {
            id: 2,
            title: 'I cant find my house',
            location: 'Lost in the woods',
            description:'This dumb mayor planted to many trees everywhere and now I cant get back home to catch my favorite TV show.SHM',
            date:'July 9, 2020',
            image_url:'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            user_id: 1,
          },
          {
            id: 3,
            title: 'I did it!',
            location: 'Tokyo, Japan',
            description:'A dream come true, I save up enough money to go to travel. My first stop is to see the cherry blossoms in Tokyo!',
            date:'April 3, 2020',
            image_url:'https://images.unsplash.com/photo-1560935044-1f25ce5380e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            user_id: 2,
          },
          {
            id: 4,
            title: 'Its soo hot',
            location: 'Outside',
            description:'I think I might go swimming its to hot out here.',
            date:'July 17,2020',
            image_url:'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80',
            user_id: 1,
          },
          {
            id: 5,
            title: 'Look at that view',
            location: 'Pisa, Italy',
            description:'I always wanted to see the leaning Tower of Pisa. This is so amazing!♥‿♥ ',
            date:'April 20,2020',
            image_url:'https://images.unsplash.com/photo-1522918448933-b33e408a411a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
            user_id: 2,
          },
          {
            "id": 6,
            "title": "Ice cream!",
            "location": "Ice cream Shop",
            "description": "This looks so good cant wait to dig in.",
            "date": "June 10, 2020",
            "image_url": "https://images.unsplash.com/photo-1543573852-1a71a6ce19bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            "user_id": 3,
        }
        ]);
      })
  }