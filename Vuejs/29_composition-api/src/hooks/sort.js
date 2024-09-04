import { ref, computed } from "vue";

export default function useSort(items, sortProperty) {
  const sorting = ref(null);

  const displayedItems = computed(() => {
    if (!sorting.value) {
      return items.value;
    }
    return items.value.slice().sort((item1, item2) => {
      if (
        sorting.value === "asc" &&
        item1[sortProperty] > item2[sortProperty]
      ) {
        return 1;
      } else if (sorting.value === "asc") {
        return -1;
      } else if (
        sorting.value === "desc" &&
        item1[sortProperty] > item2[sortProperty]
      ) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  const sort = (mode) => {
    sorting.value = mode;
  };

  return {
    displayedItems,
    sorting,
    sort,
  };
}
