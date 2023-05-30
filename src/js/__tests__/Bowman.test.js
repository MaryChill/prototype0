import Bowman from '../Bowman';

test('check boweman is created', () => {
  const gamer = new Bowman('gamer');
  expect(gamer).toEqual(
    {
      name: 'gamer',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  );
});

test('check Bowman error name', () => {
  expect(() => {
    const gamer = new Bowman('g');
  }).toThrowError('некорректное имя');
});
