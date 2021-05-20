<template>
  <div>
    
      <ul class="pagination">
          <li v-for="page in 9" :key="page">
            <router-link class="link" :to="`/?page=${page}`">{{page}}</router-link>
          </li>
      </ul>
    <div class="container">
      <div v-for="(card, key) in cards" :key="key">
        <Card :card="card" :details="false"/>
      </div>
    </div>

  </div>
</template>

<script>
import Card from "@/components/Card";
import useApi from "@/resource/api";
import { useRoute } from 'vue-router';
import { watch,ref,onMounted } from 'vue';

export default {
  components: {
    Card,
  },
  async setup() {
    const route = useRoute()
    const { getPagination } = useApi();
    
    const cards = ref(null);
    const curPage = route.query.page||1;

    onMounted(async ()=>{
      cards.value = await getPagination(curPage);
    });

    watch(()=>route.query.page,async (newPage)=>{
      cards.value = await getPagination(newPage);
    });

    return { cards };
  },
};
</script>

<style>
.container {
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
@media screen and (max-width: 900px) {
  .container{
    width: 85%;
  }
}
ul.pagination {
      display: flex;
      list-style: none;
    justify-content: center;
}

ul.pagination li a {
    color: black;
    display: flex;
    padding: 8px 16px;
    text-decoration: none;
}

a:active {
    background-color: #4CAF50!important;
    color: white!important;
}

ul.pagination li a:hover:not(.active) {background-color: #ddd;}
</style>
