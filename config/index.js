const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const dotenv = require('dotenv');
const fs = require('fs');

const config = {
  alias:{
    'src': path.resolve(__dirname, '..', 'src'),
  },
  projectName: 'runner',
  date: '2020-8-6',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    webpackChain :(chain) =>{
      chain.plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])},
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    entry:{app:'app.tsx'},
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
};

const getEnvFilePath = ()=>{
  const { mode } = argv;
  let fileName = '',filePath;
  if(mode){
    fileName = `../.env.${mode}`;
    filePath = path.resolve(__dirname,fileName);
    if(fs.existsSync(path)){
      dotenv.config(filePath);
    }else{
      fileName = '../.env';
      filePath = path.resolve(__dirname,fileName);
      dotenv.config(filePath);
    }
  }else{
    fileName = '../.env';
    filePath = path.resolve(__dirname,fileName);
    dotenv.config(filePath);
  }
}

module.exports = function (merge) {
  getEnvFilePath();
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
