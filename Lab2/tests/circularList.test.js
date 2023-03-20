const CircularList = require('../src/circularList');

describe('Circular list', () => {
  let circularList;

  beforeAll(() => {
    circularList = new CircularList();
  });

  it('append one node', () => {
    circularList.append('a');
    expect(circularList.get(0)).toBe('a');
  });

  it('check length', () => {
    circularList.append('b');
    expect(circularList.length()).toBe(2);
  });

  it('clear the list', () => {
    circularList.clear();
    expect(circularList.length()).toBe(0);
  });

  it('getting first node by value', () => {
    circularList.append('a');
    circularList.append('b');
    circularList.append('b');
    circularList.append('b');

    expect(circularList.findFirst('b')).toBe(1);
    expect(circularList.findFirst('c')).toBe(-1);
  });

  it('getting last node by value', () => {
    expect(circularList.findLast('b')).toBe(3);
    expect(circularList.findLast('c')).toBe(-1);
  });

  it('getting node by index', () => {
    expect(circularList.get(0)).toBe('a');
    expect(circularList.get(1)).toBe('b');
  });

  it('inserting node to the list', () => {
    circularList.insert('g', 1);
    expect(circularList.get(1)).toBe('g');
  });

  it('deleting node by index', () => {
    expect(circularList.length()).toBe(5);

    const deleted = circularList.delete(1);

    expect(deleted).toBe('g');
    expect(circularList.findFirst('g')).toBe(-1);
    expect(circularList.length()).toBe(4);
  });

  it('delete all nodes with the same value', () => {
    circularList.append('g');
    circularList.append('g');
    circularList.append('g');

    expect(circularList.length()).toBe(7);

    circularList.deleteAll('g');

    expect(circularList.findFirst('g')).toBe(-1);
  });

  it('cloning the list', () => {
    const newList = circularList.clone();

    expect(newList.get(0)).toBe(circularList.get(0));
  });

  it('checking is this real clone', () => {
    const newList = circularList.clone();
    newList.append('n');

    expect(circularList.findFirst('n')).toBe(-1);
  });

  it('reversing the list', () => {
    circularList.clear();
    circularList.append('c');
    circularList.append('b');
    circularList.append('a');

    circularList.reverse();

    expect(circularList.get(0)).toBe('a');
    expect(circularList.get(2)).toBe('c');
  });

  it('extending the list', () => {
    const secondList = circularList.clone();
    expect(circularList.length()).toBe(3);
    expect(secondList.length()).toBe(3);

    circularList.extend(secondList);
    expect(circularList.length()).toBe(6);

    secondList.append('n');
    expect(secondList.length()).toBe(4);
    expect(circularList.length()).toBe(6);
  });
});
