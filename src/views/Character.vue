<template>
<div class="wrapper">
   <Card :card="character" :details="true"/>
</div>
</template>

<script>
import useApi from "@/resource/api";
import { useRoute } from 'vue-router';
import Card from "@/components/Card";

export default {
    components:{
        Card,
    },
    async setup(){
        const route = useRoute();

        const {getCharacter} = useApi();
        const character = await getCharacter(route.params.id);
        return {character}
    }
}
</script>

<style scoped>
.wrapper{
    display: flex;
    justify-content: center;
}
</style>