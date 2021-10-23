import createDefaultServiceContainer from "../node_modules/@node-projects/web-component-designer/dist/elements/services/DefaultServiceBootstrap.js";
import "../node_modules/@node-projects/web-component-designer/dist/elements/widgets/designerView/designerView.js";

async function load() {
  await window.customElements.whenDefined("node-projects-designer-view");
  const designerView = document.querySelector("node-projects-designer-view");
  let serviceContainer = createDefaultServiceContainer();
  designerView.initialize(serviceContainer);
}

load();