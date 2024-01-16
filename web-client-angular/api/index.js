const { renderModule } = require('@angular/platform-server');
const { APP_BASE_HREF } = require('@angular/common');
const { enableProdMode } = require('@angular/core');

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const fs = require('fs');
const path = require('path');

const distFolder = path.join(__dirname, '../dist/YOUR_PROJECT_NAME/browser');
const indexHtml = path.join(distFolder, 'index.html');

enableProdMode();

const moduleMap = await provideModuleMap(distFolder);

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = moduleMap;

function render(req, res) {
  const { protocol, originalUrl, baseUrl, headers } = req;

  renderModule(
    AppServerModuleNgFactory,
    {
      document: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      extraProviders: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl },
        { provide: 'ORIGIN_URL', useValue: originalUrl },
        { provide: 'REQUEST', useValue: req },
        { provide: 'RESPONSE', useValue: res },
      ],
    },
    {
      bootstrap: AppServerModuleNgFactory,
      providers: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl },
        LAZY_MODULE_MAP,
      ],
    }
  )
    .then((html) => res.send(html))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
}

module.exports = render;
