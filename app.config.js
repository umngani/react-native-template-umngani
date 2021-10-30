import { version } from './package.json';

export default {
  name: 'umngani',
  displayName: 'umngani',
  orientation: 'portrait',
  expo: {
    scheme: 'umngani',
    name: 'umngani',
    slug: 'umngani',
    version,
    assetBundlePatterns: ['**/*'],
    orientation: 'portrait',
  },
};
