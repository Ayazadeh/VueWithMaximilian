<template>
  <div>
    <app-server-status v-for="server in 5"/>
  </div>
</template>
<script>
// local component
import ServerStatus from "./ServerStatus";
export default {
  components: {
    "app-server-status": ServerStatus
  }
};
</script>
