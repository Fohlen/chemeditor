chemeditor
-----------------

`chemeditor` is a little toolbox based on top of [Kekule.js](https://github.com/partridgejiang/Kekule.js)
It's features include:

- a small reference on how to use the editor
- a refined expierence of the chemical editor from Kekule
 - select from pre-defined structures
 - calculate 3D presentations of molecules
 - exporting your formula as an image
- saving and loading formula's directly into in your browser using [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)

Please note that this project is HTML5-only, therefore it will run only in [specific browsers](http://caniuse.com/#search=canvas).

# Get it running
Follow these simple steps to get the server running locally

- `git submodule update --init`
- `npm install`
- `npm run server`, which will open a server on http://localhost:8080

# Deployment
In the future deployment shall automatically be done via [surge](https://surge.sh/)
