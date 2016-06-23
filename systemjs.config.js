(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',
    'jquery':                     'bower_components/jquery/dist',
    'pnotify':                    'bower_components/pnotify/dist',
    'nprogress':                  'bower_components/nprogress/nprogress.js',
    'moment':                     'node_modules/moment/moment.js'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    'jquery':                     { main: 'jquery.js', defaultExtention: 'js'},
    'pnotify':                    { main: 'pnotify.js', defaultExtention: 'js' }
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