# Judgement-Day

Unsure about your new DnD character? Whether it's the name or the stats that have you worried, have no fear! Welcome to Judgement Day, the social media forum to see what other players think about your new character's attributes.

## Description

If you are unsure about something regarding your new character you will can post your character information to the front page. Where other players can comment on your post and give feedback.

### API

- https://www.dnd5eapi.co/

- https://www.dnd5eapi.co/api/classes/

### ERD

![ERD Tables](/images/ERD.JPG)

### Restful Routing Charts

| HTTP METHOD (_Verb_) | URL (_Nouns_)      | CRUD    | Response                                   | Notes |
| -------------------- | ------------------ | ------- | ------------------------------------------ | ----- |
| Get                  | /                  | Read    | Render home page ejs                       |       |
| Get                  | /users/new         | Read    | Show new user form                         |       |
| Get                  | /users/login       | Read    | Show login user form                       |       |
| Post                 | /                  | Create  | Create new user then redirect to posts     |       |
| Get                  | /classes           | Read    | Get all Class API Data on one page         |       |
| Get                  | /races             | Read    | Get all Race API Data on one page          |       |
| Get                  | /posts             | Read    | Get all posts on one page                  |       |
| Get                  | /posts/:id         | Read    | Get specific posts page by id and comments |       |
| Get                  | /posts/new         | Read    | Show new post form                         |       |
| Post                 | /posts             | Create  | Create a new post and redirect to posts id |       |
| Put                  | /posts/edit/:id    | Update  | Edit the current posts id                  |       |
| Destroy              | /posts:id          | Destroy | Get genres of that book by its book_id     |       |
| Get                  | /comments/new      | Read    | Show new comment form                      |       |
| Post                 | /posts/:id         | Create  | Create new comment on the posts id         |       |
| Put                  | /comments/edit/:id | Update  | Edit the comment form                      |       |
| Destroy              | /posts:id          | Destroy | Delete comment on the posts id             |       |

### Wireframe

![ERD Tables](/images/WireframeJD.JPG)

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
