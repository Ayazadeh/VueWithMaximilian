import { ref, computed, watch } from "vue";

export default function useSearch(items, searchProp) {
  const enteredSearchTerm = ref("");
  const activeSearchTerm = ref("");

  const availableItems = computed(() => {
    if (activeSearchTerm.value) {
      return items.filter((item) =>
        item[searchProp].toLowerCase().includes(activeSearchTerm.value)
      );
    }
    return items || [];
  });

  watch(enteredSearchTerm, (val) => {
    setTimeout(() => {
      if (val === enteredSearchTerm.value) {
        activeSearchTerm.value = val;
      }
    }, 300);
  });

  const updateSearch = (val) => {
    enteredSearchTerm.value = val;
  };

  return {
    enteredSearchTerm,
    availableItems,
    updateSearch,
  };
}
