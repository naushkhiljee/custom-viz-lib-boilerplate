# custom-viz-lib-boilerplate
A lightweight Neutrino.js based platform for building a collection of Looker custom visualizations to be included in a Looker project directly, or hosted externally.

#### Installation
- This project was built with `node 14.15`.
- Install with a standard `yarn install`.

#### Running the Project for Development
- For development, run `yarn start` to build with a watch job.
- The project is built to the `/build` folder.
- We recommend using [http-server](https://github.com/http-party/http-server), or any simple web server, from the `/build` directory to serve the built files.
- Use [local-ssl-proxy](https://github.com/cameronhunter/local-ssl-proxy) to create an SSL tunnel to serve the project to Looker.
- Add a development visualization [configured through the UI](https://docs.looker.com/admin-options/platform/visualizations) pointing to file on your local server.

#### Adding Visualizations
- The visualization folder is found in `/src/visualizations`
- All that's needed to add a visualization is to add a uniquely named folder to that directory, and include an index file in that repo as an entrypoint.
- There are two example visualizations added:
  - `hello_world` which is a typescript only project.
  - `hello_world_react` includes a react app entrypoint.

#### Publishing Visualizations
- For a single run for production, use `yarn build`.
- This repo can be added directly to a Looker project, and [configured with LookML](https://docs.looker.com/reference/manifest-params/visualization).
- Alternatively the built js files can be hosted and anywhere and [configured through the UI](https://docs.looker.com/admin-options/platform/visualizations).

#### Webpack Configuration
- The project loads Typescript, but vanilla js will work just as well.
- Neurino.js uses its own preset and configuration model. If you need to modify the webpack configuration, do so in `.neutrino.js`. [Click here for more info](https://neutrinojs.org/webpack-chain/#webpack-chain-neutrino-configuration-api).
- If you need to modify the linting configuration, this is done through the `.neutrino.js` file as well under the Airbnb present. [Click here for more info](https://neutrinojs.org/packages/eslint/#neutrino-eslint-middleware).

#### Testing
- Jest test files can be added to the `/test` directory.