# Project REST-Rant

## USER STORIES (RANTS)
    -"As A (user type) I need (feature) so I can (action)"

## Color Scheme: Neutral tones, red or orange as backing color

REST-Rant is an app where users can review restaurants.

Places should have
 - name (string)
 - city (string)
 - state (string)
 - cuisines (string)
 - picture (string)

| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET    |   /  | Home Page |
| GET    | /places | Places Index Page |
| POST   | /places | Create new place |
| GET    | /places/new | Form page for creating new place |
| GET    | /places/:id | Details about a particlar place |
| PUT    | /places/:id | Update a particular place |
| GET    | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST   | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rantId | Delete a rant (comment) about a particular place |
| GET    | * | 404 Page (matches any route not defined above) |