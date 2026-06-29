const { add } = require('./app');

if (add(1, 2) !== 3) {
  console.log("NG: test failed");
  process.exit(1);
} else {
  console.log("OK: test passed");
}
``