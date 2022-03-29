![forkify](https://user-images.githubusercontent.com/17248394/160616097-85fe04c1-c029-419c-ac0f-e6f6e9cdf883.png)

# Forkify

Forkify is a food recipe web application that fetches data from the Forkify API and displays recipe information. Users can:
 - search, view, and bookmark recipes
 - upload recipes
 - add recipe ingredients to a shopping list
 - delete items from shopping list and empty shopping list

## Tech

- HTML
- SCSS
- JavaScript
- API
- Parcel
- Docker

## Docker

Forkify has a docker image on [docker hub](https://hub.docker.com/r/barbaraokwufulueze/forkify).

### Pull Image

```shell
docker pull barbaraokwufulueze/forkify 
```

### Run Forkify Container

The command below runs Forkify on the host's port `8080` - the container name is `forkify`.

```shell
docker container run --name forkify -p 8080:1234 barbaraokwufulueze/forkify
```

## Demo
https://barbaraokwufulueze.github.io/forkify/

