<template>
  <div>

      <div v-if="step == 0">
        <Post :pdata="pdata[i]" v-for="(a,i) in pdata" :key="i"/>
      </div>
      
      
      <div v-if="step == 1">
        <div :class="선택한필터" class="upload-image" :style="{backgroundImage: 'url('+image+')'}"></div>
        <div class="filter">
        <FilterBox :filter="filter" :image="image" v-for="filter in filters" :key="filter">
          <!-- <template v-slot:default="madename"> <span>{{madename.msg}}</span> </template> -->
          <!-- <template v-slot:b> 데이터2 </template> -->
          {{filter}}
        </FilterBox>
     

        </div>
      </div> 

      <div v-if="step == 2">
      <div :class="선택한필터" class=" upload-image" :style="{backgroundImage: 'url('+image+')'}"></div>
      <div class="write">
        <textarea @input="$emit('write', $event.target.value)"
        class="write-box">wirte!</textarea>
      </div>
      </div>

  </div>

</template>


<script>
import Post from './Post.vue'
import FilterBox from './FilterBox.vue'

export default{
  name : 'Container',
  data(){
    return {
    filters : ["aden", "_1977", "brannan", "brooklyn", "clarendon",
    "earlybird", "gingham", "hudson", "inkwell", "kelvin", "lark", "lofi",
    "maven", "mayfair", "moon", "nashville", "perpetua", "reyes", "rise",
    "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    선택한필터 : '',
  
  }
},
 mounted(){
    this.emitter.on('박스클릭함', (a)=>{
      this.선택한필터 = a
    });
 },
  components : {
    Post,
    FilterBox,
  },
  props : {
    pdata : Array,
    step : Number,
    image : String,
  }
}

</script>

<style>

.upload-image{

    width: 100%;
    height: 400px; 
    margin: 10px;
    background-color: skyblue;
    background-repeat: no-repeat;
    background-size: cover;
    

}

.filter{

    display: flex;
    overflow-x: scroll;
    margin: 5px;

}

.write-box{

    width: 100%;
    height: 100px;
    margin: 5px;
    border: 1px solid gray;

}


</style>