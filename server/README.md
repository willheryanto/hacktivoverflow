# HacktivOverflow

Welcome to HacktivOverflow! All the service is running on http://3.19.240.39/.

## User Endpoints

A collection of `/users/` endpoints.

#### Open Endpoints

* [Register](md/users/register.md) : `POST /users/register/`
* [Login](md/users/login.md) : `POST /users/login/`
* [Get single userr](md/users/getOne.md) : `GET /users/`

## Question Endpoints

A collection of `/questions/` endpoints.

#### Endpoints that Require Authentication	

* [Create question](md/questions/create.md) : `POST /questions/`
* [Get all questions](md/questions/getAll.md) : `GET /questions/`
* [Get single question](md/questions/getOne.md) : `GET /questions/:id/`
* [Upvote question](md/questions/upvote.md) : `PATCH /questions/:id/upvote`
* [Downvote question](md/questions/downvote.md) : `PATCH /questions/:id/downvote`
* [Add Answer](md/questions/addAnswer.md) : `PATCH /questions/:id/add-answer`

#### Endpoints that Require Authentication and Authorization

* [Edit question](md/questions/edit.md) : `PUT /questions/:id/`
* [Delete question](md/questions/delete.md) : `DELETE /questions/:id/`



## Answer Endpoints

A collection of `/answers/` endpoints.

#### Endpoints that Require Authentication

* [Upvote answer](md/answers/upvote.md) : `PATCH /answers/:id/upvote`
* [Downvote answer](md/answers/downvote.md) : `PATCH /answers/:id/downvote`

#### Endpoints that Require Authentication and Authorization

* [Get single answer](md/answers/getOne.md) : `GET /answers/:id`
* [Update single answer](md/answers/edit.md) : `PATCH /answers/:id`
* [Delete single answer](md/answers/delete.md) : `DELETE /answers/:id`