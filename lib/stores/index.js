const MemoryStore = require("./memory");
const NoneStore = require("./none");

module.exports = {
    memory: MemoryStore,
    none: NoneStore
};