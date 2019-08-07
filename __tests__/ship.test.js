const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {
  describe('with ports and an itinerary', () => {
    let dover;
    let itinerary;
    let ship;
    let calais;
    beforeEach(() => {
      const port = {
        removeShip: jest.fn(),
        addShip: jest.fn(),
      };
      dover = {
        ...port,
        name: 'Dover',
        ships: [],
      };
      calais = {
        ...port,
        name: 'Calais',
        ships: [],
      };
      itinerary = {
        ports: [dover, calais],
      }
      ship = new Ship(itinerary);
    });
    it('can be created', () => {
      expect(ship).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
      expect(ship.currentPort).toBe(dover);
    });
    it('can set sail from a port', () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(dover.removeShip).toHaveBeenCalledWith(ship);
    });
    it('can\'t sail further than its itinerary', () => {
      ship.setSail();
      ship.dock();
      expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
    it('gets added to port on instantiation', () => {
      expect(dover.addShip).toHaveBeenCalledWith(ship);
    });
  });
});
it('can dock at a port', () => {
  const dover = {
    name: 'Dover',
    removeShip: jest.fn(),
    addShip: jest.fn(),
  };
  const calais = {
    name: 'Dover',
    removeShip: jest.fn(),
    addShip: jest.fn(),
  };
  const itinerary = {
    ports: [dover, calais],
  };
  const ship = new Ship(itinerary);
  ship.setSail();
  ship.dock();
  expect(ship.currentPort).toBe(calais);
  expect(calais.addShip).toHaveBeenCalledWith(ship);
});
