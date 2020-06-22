# Documentation on Postman


# API on Heroku


# Expat Journal Endpoints

**User Data Shape:** <br>
{ <br>
&nbsp;&nbsp;&nbsp;&nbsp;"id": &nbsp;&nbsp;// generated by database<br>
&nbsp;&nbsp;&nbsp;&nbsp;"username": &nbsp;&nbsp;// string, max 225 characters, required<br>
&nbsp;&nbsp;&nbsp;&nbsp;"password": &nbsp;&nbsp;// string, max 225 characters, required<br>
}

**Post Data Shape:** <br>
{ <br>
&nbsp;&nbsp;&nbsp;&nbsp;"id": &nbsp;&nbsp;// generated by database<br>
&nbsp;&nbsp;&nbsp;&nbsp;"title": &nbsp;&nbsp;// string, max 225 characters, required<br>
&nbsp;&nbsp;&nbsp;&nbsp;"location": &nbsp;&nbsp;// string, max 225 characters, optional<br>
&nbsp;&nbsp;&nbsp;&nbsp;"description": &nbsp;&nbsp;// string, text content of the post, required<br>
&nbsp;&nbsp;&nbsp;&nbsp;"date": &nbsp;&nbsp;// string, max 225 characters, required<br>
&nbsp;&nbsp;&nbsp;&nbsp;"image_url": &nbsp;&nbsp;// string, optional, place in src attribute of img tag<br>
&nbsp;&nbsp;&nbsp;&nbsp;"user_id": &nbsp;&nbsp;// integer, automatically grabbed from the authorization token, references id in user table<br>
}

## Register

Use the path [/api/auth/register](https://) for the registration.

The request must include a username and password, and the result will be a created user.

```bash

```
***

## Log In

Use the path [/api/auth/login](https://) for the login.

The request must include a username and password, and the result will be a token.

This will return the logged in user ID, username and password.
# Response
```bash
{
    "username": "randomName",
    "password":"password123",
    "token": "123456789"
}
```

```bash

```
***
<br>

## User Post Endpoints (All require a token to access)

### GET: Retrieve a list of all the posts made by all users
```bash

```
***

### GET: Retrieve a specific post 
```bash

```
**Notes:** Path variable id represents post id. 
***

### GET: Retrieve all posts from a specific user
```bash

```
**Notes:** Path variable id represents user id. 
***

### POST: Add new post
```bash

```
**Notes:** Path variable id represents user id. 
***

### PUT: Update an existing post
```bash

```
**Notes:** Path variable id represents post id. 
***

### DELETE: Delete a specific post
```bash

```
**Notes:** Path variable id represents the post id.<br>