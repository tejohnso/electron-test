var assert = require("assert"),
interfaces = require("../interfaces.js");

describe("interfaces", function() {
  it("exists", function() {
    assert.ok(interfaces);
  });

  it("returns interfaces", function() {
    console.info(interfaces());
    assert.ok(Array.isArray(interfaces()));
    assert.ok(interfaces().length);
  });
});
