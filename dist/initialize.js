import { CursorLinePointerExtensionProvider, createDefaultServiceContainer } from '/web-component-designer-demo/node_modules/@node-projects/web-component-designer/./dist/index.js';
await window.customElements.whenDefined("node-projects-designer-view");
const designerView = document.querySelector("node-projects-designer-view");
let serviceContainer = createDefaultServiceContainer();
serviceContainer.designerPointerExtensions.push(new CursorLinePointerExtensionProvider());
designerView.initialize(serviceContainer);
