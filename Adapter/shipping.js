// shipping.js
class Shipping {
  request(zipStart, zipEnd, weight) {
    this.zipStart = zipStart;
    this.zipEnd = zipEnd;
    this.weight = weight;

    return "$49.75";
  }
}

module.exports = Shipping;
