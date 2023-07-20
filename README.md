# vitest-browser-coverage-issue

References Issue [Browser mode: Istanbul coverage report incomplete
**#3514**](https://github.com/vitest-dev/vitest/issues/3514https:/)

Coverage output for identical tests differs between browser and node environments, using `istanbul` provider.

## Demo

Install dependencies:
`npm install`

Run the tests using node and browser mode. Produces txt files with outputs from each test run and logs the diff.
`npm run test-compare`

The browser version has 50% test coverage while the node version has 100%.

## Notes

While debugging, I noticed that `takeCoverage()` in the `coverage-istanbul` package gets called multiple times in browser mode, and only once with node. It seems like the browser is calling `onAfterRunSuite` in `packages/browser/src/client/runner.ts` 4 times. 

Removing `globalThis[COVERAGE_STORE_KEY] = {}` in `packages/coverage-istanbul/src/index.ts: takeCoverage()` does produce 100% coverage, but with higher counts for coverage hits.

So far I don't think there is an issue with the `coverage-istanbul` package, but with how the browser runner is handling suites. Running without any `describe()` blocks (find commented-out in the test file) gives 100% coverage for both.