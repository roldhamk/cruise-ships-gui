const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');


describe('Port', () => {
  describe('instantiation and name', () => {
    let port;
    beforeEach(() => {
      port = new Port('Dover')
    });
    it('can be instaniated', () => {
      expect(port).toBeInstanceOf(Object);
    });
    it('has a name', () => {
      expect(port.name).toBe('Dover');
    });
  });

  it('add ship to port', () => {
    const dover = new Port('Dover');
    const ship = jest.fn();
    dover.addShip(ship);
    expect(dover.ships).toContain(ship);
  });
  it('remove a ship from port', () => {
    const dover = new Port('Dover');
    const titanic = jest.fn();
    const queenMary = jest.fn();
    dover.addShip(titanic);
    dover.addShip(queenMary);
    dover.removeShip(titanic);
    expect(dover.ships).toContain(queenMary);
  });
});
