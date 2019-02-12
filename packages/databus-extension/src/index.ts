/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

import { JupyterFrontEndPlugin } from '@jupyterlab/application';
import converterRegistryPlugin from './converters';
import dataBusPlugin from './databus';
import dataRegistryPlugin from './dataregistry';
import dataExplorerPlugin from './explorer';
import filePlugin from './files';
import snippetsPlugin from './snippets';
import widgetPlugin from './widgets';
import URLPlugin from './urls';
import renderMimePlugin from './rendermime';
import activePlugin from './active';

export default [
  dataRegistryPlugin,
  converterRegistryPlugin,
  dataExplorerPlugin,
  dataBusPlugin,
  filePlugin,
  widgetPlugin,
  snippetsPlugin,
  URLPlugin,
  renderMimePlugin,
  activePlugin
] as JupyterFrontEndPlugin<any>[];