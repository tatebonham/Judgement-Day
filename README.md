# Judgment-Day

Unsure about your new DnD character? Whether it's the name or the stats that have you worried, have no fear! Welcome to Judgement Day, the social media forum to see what other players think about your new character's attributes.

## Description

If you are unsure about something regarding your new character you will can post your character information to the front page. Where other players can comment on your post and give feedback.

### Live Link

- https://judgement-day-tatebonham.koyeb.app/

### Installation Instructions
1. In your terminal, go to the cloned repo and run:
- npm -install
2. Once that is done, still in your terminal run:
- touch .env
3. In your .env please insert the variable below while replacing the hashes with your desired value.
- ENC_SECRET='############'
4. Create your database and migrate it with sequelize in your terminal by running:
- createdb judgement_day 
- sequelize db:migrate
5. You are all set! Run nodemon and use localhost:3000 in your browser.

### API

- https://www.dnd5eapi.co/

- https://www.dnd5eapi.co/api/classes/

### ERD

![ERD Tables](/images/ERD.JPG)

### Restful Routing Charts

| HTTP METHOD (_Verb_) | URL (_Nouns_)       | CRUD    | Response                                   | Notes |
| -------------------- | ------------------- | ------- | ------------------------------------------ | ----- |
| Get                  | /                   | Read    | Render home page ejs                       |       |
| Get                  | /users/new          | Read    | Show new user form                         |       |
| Get                  | /users/login        | Read    | Show login user form                       |       |
| Get                  | /users/posts        | Read    | Show users posts only                      |       |
| Get                  | /users/logout       | Read    | Clear cookies and redirect to home         |       |
| Post                 | /                   | Create  | Create new user then redirect to posts     |       |
| Get                  | /classes            | Read    | Get all Class API Data on one page         |       |
| Get                  | /races              | Read    | Get all Race API Data on one page          |       |
| Get                  | /posts              | Read    | Get all posts on one page                  |       |
| Get                  | /posts/new          | Read    | Show new post form                         |       |
| Post                 | /posts              | Create  | Create a new post and redirect to posts    |       |
| Get                  | /posts/:id          | Read    | Get specific posts page by id and comments |       |
| Get                  | /posts/edit/:id     | Read    | Show edit post form                        |       |
| Put                  | /posts/edit/:id     | Update  | Edit the current posts id                  |       |
| Destroy              | /posts/:id          | Destroy | Delete current post id                     |       |
| Post                 | /posts/:id/comments | Create  | Create new comment on the posts id         |       |
| Destroy              | /posts/:id/comments | Destroy | Delete comment on the posts id             |       |

### Wireframe

![Wireframe](/images/WireframeJD.JPG)

### User Stories

- as a user I would like to make posts and show that my user made it
- as a user I would like to see the comments made on that post and which user made them
- as a user I would like to see others posts and which user made them
- as a user I would like to see the comments made on that post and which user made them
- as a user I would like a place to research class information to help making a choice or checking suggestions out easy
- as a user I would like a place to research race information to help making a choice or checking suggestions out easy
- as a user I would like to be able to create a new account and login to that account next time I visit

## MVP Goals

- Set up Sequelize Config
- Create all tables and migrate them
- Create Index.js and set up express app
- Set up pages for Classes and Races API Data
- Stub out all routes on index.js and controllers posts, users and comments
- Setup user sign up and login
- Home page to ask if you would like to go to the classes, races or posts
- Have the posts on one page with a link to click and see the individual post and it's comments
- Set up styling whether thats bootstrap or manually

### Stretch Goals

- Edit and Delete buttons should only work if your user information matches in the database with the comment or post
- Set up the posts page with API data to select race and class from a drop down with a brief desciption or buttons
- Add the ability to favorite a race or class and show up in a new /users/favorites routes
