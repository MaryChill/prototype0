import Boweman from '../Bowman';

test('check boweman is created', () => {
  const gamer = new Boweman('gamer');
  expect(gamer).toEqual(
    {
      name: 'gamer',
      type: 'Boweman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  );
});
