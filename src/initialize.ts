import { DesignerView } from '@node-projects/web-component-designer';
import serviceContainer from '@node-projects/web-component-designer/dist/elements/services/DefaultServiceBootstrap';
import '@node-projects/web-component-designer/dist/elements/widgets/designerView/designerView';

async function load() {
  await window.customElements.whenDefined("node-projects-designer-view")
  const designerView = <DesignerView><any>document.querySelector("node-projects-designer-view");
  designerView.initialize(serviceContainer);
}
load();