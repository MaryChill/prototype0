import Magician from '../Magician';

test('check magician is created', () => {
  const gamer = new Magician('gamer');
  expect(gamer).toEqual(
    {
      name: 'gamer',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  );
});
