# Mastering React Test-Driven Development

- Code related with the book "Mastering React Test-Driven Development".
- React 16.9.0-alpha.0
- Examples with `npm 6.9.0`
- YARN = Yet Another Resource Negotiator
- https://github.com/PacktPublishing/Mastering-React-Test-Driven-Development
- https://github.com/islomar/Mastering-React-Test-Driven-Development

## Introduction

- No class components in the book.
- Functional components using hooks are simpler than class components.

## Chapter 1

- `npm init`
- Install Jest: `npm install --save-dev jest`
  - I needed to install it globally as well: `npm install -g jest`
- Install React: `npm install --save react react-dom`
- Babel: JS transpilation between versions.
- JSX: JavaScript XML
- Tests:
  - Give your describe blocks the same name as the component itself.
  - Jest magically includes a DOM implementation for us. It uses `jsdom`, a headless implementation of the DOM. We can do test browser interactions on the command line. `jsdom` is a [Jest environment](https://jestjs.io/docs/en/configuration#testenvironment-string).
- They tend to **avoid using default exports**; doing so keeps the name of the components and their usage in sync: if they change the name of a component, then every place where it's imported will break unless they change those too. But with default exports, it can be hard to track where components are used.
- Tests: verify using the `container` object, not `document`.
- Watch out! Variables defined within the describe scope are NOT cleared between each test execution.
