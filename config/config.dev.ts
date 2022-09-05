// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  proxy: {
    '/api': {
      // target: 'http://127.0.0.1:8080',
      target: 'https://acpkp3ic6j.ap-northeast-1.awsapprunner.com',
      changeOrigin: true,
      pathRewrite: { '^/server': '' },
    },
  },
});
