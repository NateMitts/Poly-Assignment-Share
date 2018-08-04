// packages.js #tutorial-step-2 - Decribes the contents of the package as well as the dependencies. 

Package.describe({
  name: 'example-simple',
});

Package.onUse(function (api) {

  api.use([
    
    // Here are our dependencies:

    // vulcan core
    'promise',
    'vulcan:core@1.11.2',

    // vulcan packages
    'vulcan:forms@1.11.2',
    'vulcan:accounts@1.11.2',
    'vulcan:ui-bootstrap@1.11.2',

  ]);

  api.addFiles('lib/stylesheets/style.css');
  
  // Here is the entry point for client & server:
  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});