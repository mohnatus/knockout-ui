import { treeToList } from "./treeToList";

const originalTree = [
  {
    _id: 1,
    name: "item 1",
    children: [
      {
        _id: 2,
        name: "item 1.1",
        children: [
          {
            _id: 3,
            name: "item 1.1.1"
          }
        ]
      },
      {
        _id: 3,
        name: "item 1.2"
      }
    ]
  },
  {
    _id: 4,
    name: "item 2"
  }
];

const converter = (item) => {
  const { _id, children, ...fields } = item;
  return {
    id: _id,
    items: children,
    ...fields
  };
};

describe("treeToList", () => {
  const list = treeToList(originalTree, converter);
  test("убирает вложенности", () => {
    expect(list.length).toBe(5);
  });
  test("проставляет родителя", () => {
    const item = list[2];
    expect(item.parent).toBe("2");
  });
  test("проставляет уровень", () => {
    const item = list[2];
    expect(item.level).toBe(2);
  });
});
