---
title: Writing end-to-end tests
---

## Basics

End-to-end (e2e) tests are written in the [`test-e2e` directory](https://github.com/cheminfo/nmrium/tree/HEAD/test-e2e).

We use [Playwright](https://playwright.dev/docs/intro/) to write and run the tests
in real browsers.

You can run all e2e tests with `npm run test-e2e`.
Note that to test your latest changes, the dev server should be running (`npm run dev`).
Otherwise, the last unminified production build from `npm run build-no-minify` will be used.

## Useful links

The entire Playwright website is a good reference. Here are a few useful links:

- <https://playwright.dev/docs/test-annotations/>
- <https://playwright.dev/docs/test-assertions/>
- <https://playwright.dev/docs/test-cli/>
- <https://playwright.dev/docs/selectors/>
- <https://playwright.dev/docs/api/class-locator/>
- <https://www.youtube.com/watch?v=LczBDR0gOhk>

## Running and debugging tests

See: <https://www.youtube.com/watch?v=JRuMGb3JE5k>

---

To run a single test, use the `--grep` command-line flag:

```console
npx playwright test --grep "my test"
```

You can grep by file name or test description.

---

If you want to do step debugging to see what happens in the page during the test,
set the `PWDEBUG` environment variable:

```console
PWDEBUG=1 npx playwright test --grep "my test"
```

---

You can also enable the `slowMo` mode, so that the actions are executed slower.

To do this, edit [`playwright.config.ts`](https://github.com/cheminfo/nmrium/blob/e01fceebfcc37d725f46d7059409b45ea285490b/playwright.config.ts#L17)
and uncomment the `slowMo` option.
