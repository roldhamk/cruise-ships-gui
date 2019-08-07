/* eslint-disable func-names */
(function exportShip() {
function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = this.itinerary.ports[0];
  this.currentPort.addShip(this);
  this.previousPort = null;
}

Ship.prototype = {
  setSail() {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

    if (currentPortIndex === (itinerary.ports.length - 1)) {
      throw new Error('End of itinerary reached');
    }
    this.previousPort = this.currentPort;
    this.currentPort.removeShip(this);
    this.currentPort = null;
  },

  dock() {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
    this.currentPort = itinerary.ports[previousPortIndex + 1];
    this.currentPort.addShip(this);
  },

};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Ship;
} else {
  window.Ship = Ship;

}

}());
