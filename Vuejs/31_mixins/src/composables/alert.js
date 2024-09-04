import { ref } from "vue";

export default function useAlert() {
  const alertIsVisible = ref(false);

  const showAlert = () => {
    alertIsVisible.value = true;
  };

  const hideAlert = () => {
    alertIsVisible.value = false;
  };

  return {
    alertIsVisible,
    showAlert,
    hideAlert,
  };
}
