const Itinerary = require('../src/itinerary');
const Ship = require('../src/ship');
const Port = require('../src/port');


describe('Itinerary', () => {
  it('can be instaniated', () => {
    const dover = {
      name: 'Dover',
    };
    const calais = {
      name: 'Calais',
    };
    const itinerary = {
      ports: [dover, calais],
    };
    expect(itinerary).toBeInstanceOf(Object);
  });
  it('can have ports', () => {
    const dover = jest.fn();
    const calais = jest.fn();
    const itinerary = new Itinerary([dover, calais]);
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
