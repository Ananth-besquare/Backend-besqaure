// transport.js, common interface
class Transport {
  constructor() {}

  deliver() {
    throw new Error("Not implemented");
  }
}

module.exports = Transport;
