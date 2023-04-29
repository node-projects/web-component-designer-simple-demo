import { CursorLinePointerExtensionProvider, createDefaultServiceContainer } from '@node-projects/web-component-designer';
await window.customElements.whenDefined("node-projects-designer-view");
const designerView = document.querySelector("node-projects-designer-view");
let serviceContainer = createDefaultServiceContainer();
serviceContainer.designerPointerExtensions.push(new CursorLinePointerExtensionProvider());
designerView.initialize(serviceContainer);
