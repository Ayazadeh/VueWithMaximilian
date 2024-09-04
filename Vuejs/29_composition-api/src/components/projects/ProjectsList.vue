<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import { computed, watch, toRefs } from "vue";
import ProjectItem from "./ProjectItem.vue";
import useSearch from "../../hooks/search";

export default {
  components: {
    ProjectItem,
  },
  props: ["user"],
  setup(props) {
    const { user } = toRefs(props);

    const projects = computed(() => {
      return user.value ? user.value.projects : [];
    });

    const { enteredSearchTerm, availableItems, updateSearch } = useSearch(
      projects.value,
      "title"
    );

    const hasProjects = computed(() => {
      return projects.value.length > 0;
    });

    watch(user, () => {
      updateSearch("");
    });

    return {
      enteredSearchTerm,
      availableProjects: availableItems,
      hasProjects,
      updateSearch,
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
