<template>
  <div>
     <Suspense> <!-- for async/await setup() -->
      <router-view/>
     </Suspense>
  </div>

</template>

<style lang="scss">
#app {
  font-family: sans-serif;
}

a{
  text-decoration: none;
  color:royalblue;
}

</style>
