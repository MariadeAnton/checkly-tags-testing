import { BrowserCheck, Frequency } from 'checkly/constructs';
import * as path from 'path';

new BrowserCheck('browser-check-1', {
  name: 'Browser check #1',
  frequency: Frequency.EVERY_6H,
  locations: ['eu-west-1'],
  code: {
    entrypoint: path.join(__dirname, '../tests/test.spec.ts')
  }
});
