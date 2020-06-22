# Back-End API for Expat-Journal

### https://expat-journal-back-end.herokuapp.com/

# Schema

## User

{
    id:  // generated by database
    username: // string, required, unique - 255 characters max     
    password: // required, 255 characters max
    firstName: // required, 255 characters max
    location: // string, required, unique - 255 characters max
}

## Story

{
    id: // generated by database
    title: // string, required
    location: // string, optional
    description: // string, required
    date: // string, optional
    image_url: // string, optional, place src attribute of img tag
    user_id: // integer, references id in users table, grabbed from token
}

## Endpoints

# Login/Register
| Method | Endpoint         | Description                                                   |
| ------ | ---------------- | ------------------------------------------------------------- |
| POST   | `api/auth/register`   | User registration. Returns newly created user            |
| POST   | `api/auth/login`      | User login. If successful returns a JSON Web Token (JWT) |

# Example


        {
        "id": 3,
        "username": "CrazyCat",
        "password": "$2a$08$BmdwoTN1wrQ/Mok3Urjgo.tzioOk5KhxEA2xfNwPmR59V6nKfgkmm",
        "firstName": "Raymond",
        "location": "Wish Island, NW"
        }



# Posts

# Authentication required

| Method | Endpoint             | Description                                                  |
| ------ | ---------------------| ------------------------------------------------------------ |
| GET    | `api/story`          | Returns a list of all stories                                |
| GET    | `api/story/:id`      | Returns a specific story with that id                        |
| GET    | `api/story/:id/story`| Returns all stories made with that user id                   |
| POST   | `api/story/:id/story`| Creates a story with that specified user id                  |
| PUT    | `api/stroy/:id`      | Updates story with that specified id                         |
| DELETE | `api/stroy/:id`      | Deletes story with that specified id                         |


# Example 

        {
        id: 5,
        title: "Look at that view",
        location: "Pisa, Italy",
        "description: "I always wanted to see the leaning Tower of Pisa. This is so amazing!♥‿♥ ",
        "date": "April 20,2020",
        "image_url": "https://images.unsplash.com/photo-1522918448933-b33e408a411a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
        "user_id": 2
        }

