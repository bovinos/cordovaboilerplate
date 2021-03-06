// here we put the paths to all the libraries and framework we will use
require.config({
  paths: {
    jquery: '../lib/zepto/zepto', // ../lib/jquery/jquery', 
    underscore: '../lib/underscore/underscore',
    backbone: "../lib/backbone/backbone",
    text: '../lib/require/text',
    async: '../lib/require/async',
    handlebars: '../lib/handlebars/handlebars',
    templates: '../templates',
    leaflet: '../lib/leaflet/leaflet',
    spin: '../lib/spin/spin.min',
    utils: '../lib/utils/utils'
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'leaflet': {
      exports: 'L'
    }
  }
});

// We launch the App
require(['underscore', 'backbone', 'utils'], function(_, Backbone, Utils) {
  require(['router'], function(AppRouter) {
    
    document.addEventListener("deviceready", run, false);

    function run() {

      // Here we precompile ALL the templates so that the app will be much quickier when switching views
      // see utils.js
      Utils.loadTemplates().once("templatesLoaded", function() {
        // launch the router
        var router = new AppRouter();
        Backbone.history.start();
      });
    }
  });
});