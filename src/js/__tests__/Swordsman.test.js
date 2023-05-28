import Swordsman from '../Swordsman';

test('check swordsman is created', () => {
  const gamer = new Swordsman('gamer');
  expect(gamer).toEqual(
    {
      name: 'gamer',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  );
});
