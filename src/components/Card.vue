<template>

<router-link :to='`/character/${card.id}`'>

    <div class="card">
        <div class="card__wrapper">
        <img :src="card.image">
        <div class="inside" v-if="details">
            <div class="icon"><i class="material-icons">info_outline</i></div>
            <div class="inside__contents">
                <div class="inside__param"> <!-- Здесь нужно циклом выводить , но я не знал что выводить и решил вывести уже так, да вынести в отдельный компонент нужно -->
                    <div>
                        Name: 
                    </div>
                    <div>
                        {{card.name}}
                    </div>

                    <div>
                        Status: 
                    </div>
                    <div>
                        {{card.status}}
                    </div>

                    <div>
                        Species: 
                    </div>
                    <div>
                        {{card.species}}
                    </div>
                </div>

            </div>
        </div>
        <h1 class="card__name">{{card.name}}</h1>
        </div>
    </div>

</router-link>
</template>

<script>
export default {
    props:{
        card:{
            require:true,
        },
        details:{
          default:false
        }
    }
}
</script>

<style  lang="scss" scoped>

.card{
  font-size: 20px;
  width: 300px;
  height: 420px;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;

  &:hover{
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0,0,0,0.2);
  }
  &__name{
    text-overflow:ellipsis;
    text-align: center;
    text-decoration: none!important;;
  }
  
  &__wrapper{
    width:100%;
    height:100%;
  }
  
  .inside{
    background: #573173;
    width:130px;
    height:140px;
    position: absolute;
    top: -70px;
    right: -70px;
    border-radius: 0px 0px 200px 200px;
    transition: all 0.5s, border-radius 2s, top 1s;
    overflow: hidden;

    .icon{
      position:absolute;
      right:85px;
      top:85px;
      color:white;
    }
    &:hover{
      width:100%;
      right:0;
      top:0;
      border-radius: 0;
      height:80%;
      .icon{
        opacity: 0;
        right:15px;
        top:15px;
      }
      .inside__contents{
        opacity: 1;
        width:70%;
        margin:0 auto;
        transform: scale(1);
        transform: translateY(0);
      }
    }
    &__contents{
        padding: 15px;
        padding-top: 45px;
        opacity: 0;
    }
    &__param{
        display: grid;
        grid-template-rows: 0,5fr;
        grid-template-columns: 0.3fr 1.5fr;
        grid-gap: 15px;
        color:#3bcd1b;
    }
  }
}
</style>