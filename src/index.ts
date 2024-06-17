import {App, Plugin} from 'vue';

import "../style.css";
import {default as libComponent} from './lib-components/LktIconicBox.vue';

const LktIconicBox: Plugin = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-iconic-box') === undefined) app.component('lkt-iconic-box', libComponent);
  }
};

export default LktIconicBox;
