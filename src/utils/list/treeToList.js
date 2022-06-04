import "./types";
import { Converter } from "./utils";

/**
 * itemToList
 * @param {Object} item
 * @param {String|Null} parent
 * @param {Number} level
 * @param {convertFn} converter
 * @returns {ListItem[]}
 */

function itemToList(item, parent, level, converter) {
  let list = [];

  const formattedItem = converter(item);
  const { id, items, ...itemFields } = formattedItem;

  if (!id)
    throw new Error(
      "Tree element has no id property after converting. Check convert function"
    );

  list.push({
    id: id.toString(),
    parent: parent ? parent.toString() : null,
    level,
    ...itemFields
  });

  if (Array.isArray(items)) {
    items.forEach((child) => {
      const childList = itemToList(child, id, level + 1, converter);
      list = [...list, ...childList];
    });
  }

  return list;
}

/**
 * treeToList
 * @param {Object[]} originalList  - дерево элементов со вложенностью
 * @param {convertFn} converter  - функция для преобразования элемента
 * @result {ListItem[]} - массив элементов без вложенности
 */

export function treeToList(tree, converter = Converter) {
  let list = [];

  tree.forEach((item) => {
    const itemList = itemToList(item, null, 0, converter);
    list = [...list, ...itemList];
  });

  return list;
}
