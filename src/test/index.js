// This file is the entry point of the application. It initializes the application and may include logic to load features and handle user interactions.

import { exampleFeature, featureWindowBox } from './features/feature-example.js';

function init() {
    console.log('NPM Course Application Initialized');
    exampleFeature();
    featureWindowBox();
}

document.addEventListener('DOMContentLoaded', init);
