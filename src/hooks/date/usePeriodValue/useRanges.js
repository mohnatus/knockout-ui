export function useRanges(ranges) {
  const _ranges = Array.isArray(ranges) ? ranges : [];
  return {
    getRangeById(id) {
      return _ranges.find((range) => range.id === id);
    },
    getRangeByName(name) {
      return _ranges.find((range) => range.name === name);
    }
  };
}
