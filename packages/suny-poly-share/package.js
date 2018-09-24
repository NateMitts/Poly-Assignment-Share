Package.describe({
    name: 'suny-poly-share',
  });
  
  Package.onUse(function (api) {
  
    api.use([
  
      // SASS/SCSS support
      'fourseven:scss@4.5.0',
  
    // vulcan core
    'vulcan:core@1.12.8',

    // vulcan packages
    'vulcan:ui-bootstrap@1.12.8',
    'vulcan:accounts@1.12.8',
    'vulcan:email@1.12.8',
    'vulcan:forms@1.12.8',
    'vulcan:events@1.12.8',
    'vulcan:embed@1.12.8',
    'vulcan:admin@1.12.8',
    'vulcan:voting@1.12.8',
      
    ]);

    api.addAssets([
      'lib/assets/content/testPost.md',

      'lib/server/email/templates/common/test.handlebars',
      'lib/server/email/templates/common/wrapper.handlebars',
      'lib/server/email/templates/comments/newComment.handlebars',
      'lib/server/email/templates/comments/newReply.handlebars',
      'lib/server/email/templates/posts/newPendingPost.handlebars',
      'lib/server/email/templates/posts/newPost.handlebars',
      'lib/server/email/templates/posts/postApproved.handlebars',
      'lib/server/email/templates/users/accountApproved.handlebars',
      'lib/server/email/templates/users/newUser.handlebars',
      
    ], ['server']);

    api.addFiles([
      // 'lib/stylesheets/bootstrap.css',
      'lib/stylesheets/main.scss'
    ], ['client']);
    
    api.mainModule('lib/server/main.js', 'server');
    api.mainModule('lib/client/main.js', 'client');
  
  });
  