(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',
    // 'jquery':                     'bower_components/jquery/dist',
    'pnotify':                    'bower_components/pnotify/dist',
    'nprogress':                  'bower_components/nprogress/nprogress.js',
    'moment':                     'node_modules/moment/moment.js',
    'notifications':              'node_modules/angular2-notifications',
    'ng2-select':                 'node_modules/ng2-select',
    'dragula':                    'node_modules/dragula/dist',
    'ng2-dragula':                'node_modules/ng2-dragula',
    'angular2-modal':             'node_modules/angular2-modal',
    'angular2-modal/platform-browser': 'node_modules/angular2-modal/platform-browser'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    // 'jquery':                     { main: 'jquery.js', defaultExtention: 'js'},
    'pnotify':                    { main: 'pnotify.js', defaultExtention: 'js' },
    'notifications':              { main: 'components.js', defaultExtention: 'js' },
    'ng2-select':                 { main: 'ng2-select.js', defaultExtention: 'js' },
    'dragula':                    { main: 'dragula.js', defaultExtention: 'js' },
    'ng2-dragula':                { main: 'ng2-dragula.js', defaultExtention: 'js'},
    'angular2-modal':             { main: 'index.js', defaultExtension: 'js'},
    'angular2-modal/platform-browser': {main: 'index.js', defaultExtension: 'js'},
    'angular2-modal/plugins/bootstrap': {main: 'index.js', defaultExtension: 'js'}
  };
  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade'
  ];

  var pnotifyPackageNames = [
      'animate',
      'buttons'
  ];
  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  pnotifyPackageNames.forEach(function(pkgName) {
    map['pnotify.' + pkgName] = 'bower_components/pnotify/dist/' + 'pnotify.' + pkgName + '.js';
    //packages['pnotify.' + pkgName] = {main: 'pnotify.' + pkgName + '.js', defaultExtension: 'js'};
  });

  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
  //System.import('bower_components/jquery/dist/jquery.js').then(function() {
  //  console.log('Import jquery success');
  //});
  //System.import('bower_components/nprogerss/nprogress.css').then(function() {
  //  console.log('Import nprogress success');
  //});
  //System.import('bower_components/pnotify/dist/pnotify.buttons.css').then(function() {
  //  console.log('Import success');
  //});
})(this);