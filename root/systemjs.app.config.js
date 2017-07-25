/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'app': './app', // 'dist',

    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    'hammerjs': 'node_modules/hammerjs/hammer.js',
    '@angular/animations/browser': 'node_modules/@angular/animations/bundles/animations-browser.umd.js',
    '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'app.boot.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
    
  };

  var ngPackageNames = [
    'cdk',
    'common',
    'compiler',
    'animations',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'material'

  ];

  var ngPackageNamesMaterial = [


  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  function packIndexMaterial(pkgName) {
    packages['@angular2-material/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  function packUmdMaterial(pkgName) {
    packages['@angular2-material/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  var setPackageConfigMaterial = System.packageWithIndex ? packIndexMaterial : packUmdMaterial;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  // Add package entries for angular Material packages
  ngPackageNames.forEach(setPackageConfigMaterial);

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);