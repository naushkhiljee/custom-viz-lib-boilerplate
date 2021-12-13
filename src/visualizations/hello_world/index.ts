import type { Looker, VisualizationDefinition } from '../../types/looker';

declare const looker: Looker;

interface HelloWorldViz extends VisualizationDefinition {
  style?: HTMLElement,
}

const viz: HelloWorldViz = {
  options: {},
  create(element) {
     /* eslint-disable no-param-reassign */
    element.innerHTML = `
      <style>
      .hello_world_viz {
          /* Vertical centering */
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
      }
      </style>
    `;

    const container = element.appendChild(document.createElement('div'));
    container.className = 'hello_world_viz';
    this.container.innerHTML = 'Hello World';
  },
  updateAsync(data, element, config, queryResponse, details, done) {
    this.clearErrors();
    done();
  },
};

looker.plugins.visualizations.add(viz);
