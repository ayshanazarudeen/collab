exports.config = {
    framework: 'jasmine',
    directConnect:true,
    specs: ['newspec.js'],
    onPrepare()
    {
        require('ts-node').register({
            project: require('E:\endtoendpro').join(__dirname,'./tsconfig.json')
        });
    }
  }