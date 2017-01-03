 Bucket-list back-end!

A link to the deployed back-end:  https://bucket-list-back-end.herokuapp.com/
A link to the front-end repo: https://github.com/BearPigMan/bucket-list-front-end/
A link to the deployed front-end https://bearpigman.github.io/bucket-list-front-end
# DESCRIPTION #

Bucket list is an app for storing your travel goals across the world. The back end uses MongoDB and a simple one-to-many relationship between users and their goals.

# ROUTES AND PATHS #

| Verb            | URI Pattern   | Controller#Action  |
| :----: |:-------------:| :-----:            |
| POST   | /sign-up      | users#signup      |
| POST        | /sign-in      |   users#signin              |
| DELETE | /sign-out/:id   |   users#signout|
| PATCH   | /change-password     | users#changepw      |
| GET        | /goals      |   goals#index             |
| GET | /goals/:id  |   goals#show|
| POST   | /goals    | goals#create    |
| PATCH        | /goals/:id      |   goals#update             |
| DELETE | /goals/:id  |   goals#destroy|
