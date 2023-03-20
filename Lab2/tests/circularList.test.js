const ListBasedOnArray = require('../src/ListBasedOnArray');

describe('List based on array ', () => {
  let listBasedOnArray;

  beforeAll(() => {
    listBasedOnArray = new ListBasedOnArray();
  });

  it('append one node', () => {
    listBasedOnArray.append('a');
    expect(listBasedOnArray.get(0)).toBe('a');
  });

  it('check length', () => {
    listBasedOnArray.append('b');
    expect(listBasedOnArray.getLength()).toBe(2);
  });

  it('clear the list', () => {
    listBasedOnArray.clear();
    expect(listBasedOnArray.getLength()).toBe(0);
  });

  it('getting first node by value', () => {
    listBasedOnArray.append('a');
    listBasedOnArray.append('b');
    listBasedOnArray.append('b');
    listBasedOnArray.append('b');

    expect(listBasedOnArray.findFirst('b')).toBe(1);
    expect(listBasedOnArray.findFirst('c')).toBe(-1);
  });

  it('getting last node by value', () => {
    listBasedOnArray.print();
    expect(listBasedOnArray.findLast('b')).toBe(3);
    expect(listBasedOnArray.findLast('c')).toBe(-1);
  });

  it('getting node by index', () => {
    expect(listBasedOnArray.get(0)).toBe('a');
    expect(listBasedOnArray.get(1)).toBe('b');
  });

  it('inserting node to the list', () => {
    listBasedOnArray.insert('g', 1);
    expect(listBasedOnArray.get(1)).toBe('g');
  });

  it('deleting node by index', () => {
    expect(listBasedOnArray.getLength()).toBe(5);

    const deleted = listBasedOnArray.delete(1);

    expect(deleted).toBe('g');
    expect(listBasedOnArray.findFirst('g')).toBe(-1);
    expect(listBasedOnArray.getLength()).toBe(4);
  });

  it('delete all nodes with the same value', () => {
    listBasedOnArray.append('g');
    listBasedOnArray.append('g');
    listBasedOnArray.append('g');

    expect(listBasedOnArray.getLength()).toBe(7);

    listBasedOnArray.deleteAll('g');

    expect(listBasedOnArray.findFirst('g')).toBe(-1);
  });

  it('cloning the list', () => {
    const newList = listBasedOnArray.clone();

    expect(newList.get(0)).toBe(listBasedOnArray.get(0));
  });

  it('checking is this real clone', () => {
    const newList = listBasedOnArray.clone();
    newList.append('n');

    expect(listBasedOnArray.findFirst('n')).toBe(-1);
  });

  it('reversing the list', () => {
    listBasedOnArray.clear();
    listBasedOnArray.append('c');
    listBasedOnArray.append('b');
    listBasedOnArray.append('a');

    listBasedOnArray.reverse();

    expect(listBasedOnArray.get(0)).toBe('a');
    expect(listBasedOnArray.get(2)).toBe('c');
  });

  it('extending the list', () => {
    const secondList = listBasedOnArray.clone();
    expect(listBasedOnArray.getLength()).toBe(3);
    expect(secondList.getLength()).toBe(3);

    listBasedOnArray.extend(secondList);
    expect(listBasedOnArray.getLength()).toBe(6);

    secondList.append('n');
    expect(secondList.getLength()).toBe(4);
    expect(listBasedOnArray.getLength()).toBe(6);
  });
});
