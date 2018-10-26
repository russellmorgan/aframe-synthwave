import aframe from 'aframe';

// If I want to make anything wireframe...
AFRAME.registerComponent('wireframe', {
  dependencies: ['material'],
  init: function () {
    this.el.components.material.material.wireframe = true;
  }
});