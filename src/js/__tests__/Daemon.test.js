import Daemon from '../Daemon';

test('check daemon is created', () => {
  const gamer = new Daemon('gamer');
  expect(gamer).toEqual(
    {
      name: 'gamer',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  );
});
