import { BrowserCheck, Frequency } from 'checkly/constructs';
import * as path from 'path';

new BrowserCheck('browser-check-1', {
  name: 'Browser check #1',
  frequency: Frequency.EVERY_6H,
  locations: ['eu-west-1'],
  code: {
    entrypoint: path.join(__dirname, '../tests/test.spec.ts')
  }

  // Needs CLI support for --grep and --grep-invert
  // See https://playwright.dev/docs/test-annotations#tag-tests

  // Or
  
  // Projects support
  // See https://playwright.dev/docs/api/class-fullproject#full-project-grep

  // module.exports = {
  //   projects: [
  //     {
  //       name: 'chromium',
  //       grep: [/@checkly/],
  //       use: {
  //         browserName: 'chromium',
  //         // Other browser configuration options...
  //       },
  //     },
  //     // Define other projects if needed...
  //   ],
  // };
});
