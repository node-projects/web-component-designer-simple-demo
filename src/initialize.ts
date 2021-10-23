import { DesignerView } from '@node-projects/web-component-designer';
import createDefaultServiceContainer from '@node-projects/web-component-designer/dist/elements/services/DefaultServiceBootstrap';
import '@node-projects/web-component-designer/dist/elements/widgets/designerView/designerView';

async function load() { //toplevel await does not work with polymer
  await window.customElements.whenDefined("node-projects-designer-view")
  const designerView = <DesignerView><any>document.querySelector("node-projects-designer-view");
  let serviceContainer = createDefaultServiceContainer();
  designerView.initialize(serviceContainer);
}
load();