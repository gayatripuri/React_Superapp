// config-overrides.js
module.exports = function override(config, env) {
    // Add resolve fallbacks
    config.resolve.fallback = {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      util: require.resolve('util/'),
      assert: require.resolve('assert/'),
      url: require.resolve('url/'),
      zlib: require.resolve('browserify-zlib'),
      stream: require.resolve('stream-browserify'),
    };
  
    
    
    // If using Create React App with version 2.x or above
    config.resolve.plugins.push(
      new (require('webpack')).FallbackDependencyPlugin({
        request: { http: require.resolve('stream-http') }
      })
    );
  
    // Other customizations can go here
  
    return config;
  };
  
  

  


