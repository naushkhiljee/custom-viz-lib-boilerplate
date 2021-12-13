/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';
import type { Looker, VisualizationDefinition } from '../../types/looker';
import App from './app/app';

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

    // Create an element to contain the text.
    this.app = container.appendChild(document.createElement('div'));

    // Render to the target element
    this.chart = ReactDOM.render(
      React.createElement(App),
      this.app,
    );
  },
  updateAsync(data, element, config, queryResponse, details, done) {
    this.clearErrors();
    done();
  },
};

looker.plugins.visualizations.add(viz);
