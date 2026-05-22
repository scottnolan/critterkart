# Critter Kart Assets

Drop your artwork into these folders:

- `cars/` for the 12 racer kart images.
- `obstacles/` for things the player dodges.
- `tracks/` for the scrolling background track.

PNG and SVG both work. PNG is usually best for photographed or rendered LEGO/brick builds. SVG is best for clean vector art.

Recommended sizes:

- Car money-shot art: transparent PNG or SVG, about `800 x 600` or `1024 x 768`.
- Car top-view art: transparent PNG or SVG, about `512 x 512`.
- Obstacles: transparent PNG or SVG, about `256 x 256`.
- Track: portrait image, ideally `720 x 1080` so it matches the canvas. Make the top and bottom edges tile cleanly because the game scrolls it in a loop.

Each racer can have two images:

- `heroImage` for the poll and car carousel.
- `gameImage` for the top-down in-game kart.

After adding files, open `app.js` and set the matching fields. Example:

```js
{
  name: "Rocket Ruby",
  color: "#d94135",
  accent: "#f2b93b",
  votes: 18,
  heroImage: "./assets/cars/rocket-ruby-hero.png",
  gameImage: "./assets/cars/rocket-ruby-top.png",
}
```

For the track:

```js
const trackArt = {
  image: "./assets/tracks/brick-track-01.png",
};
```

For obstacles:

```js
const obstacleAssets = [
  { color: "#f57d2a", image: "./assets/obstacles/cone.png" },
  { color: "#f2b93b", image: "./assets/obstacles/banana.png" },
];
```
