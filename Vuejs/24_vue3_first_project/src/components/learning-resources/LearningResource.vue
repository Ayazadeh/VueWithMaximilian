<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button>Delete</button>
      </header>
    </div>
    <p>{{  description }}</p>
    <nav>
      <a :href="link">Vue Resource</a>
    </nav>
  </li>
</template>
<script>
export default{
    props: ['title', 'description', 'link']
}
</script>
