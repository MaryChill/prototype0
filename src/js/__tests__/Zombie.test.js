import Zombie from '../Zombie';

test('check zombie is created', () => {
  const gamer = new Zombie('gamer');
  expect(gamer).toEqual(
    {
      name: 'gamer',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  );
});
