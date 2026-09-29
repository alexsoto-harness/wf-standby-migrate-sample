const test = require("node:test");
const assert = require("node:assert/strict");
const { describe } = require("./app");

test("describe identifies the fixture", () => {
  const app = describe();
  assert.equal(app.name, "wf-standby-migrate-sample");
  assert.equal(typeof app.purpose, "string");
});

test("database url is optional", () => {
  if (process.env.DATABASE_URL) {
    assert.match(process.env.DATABASE_URL, /^postgres:\/\//);
  }
});
