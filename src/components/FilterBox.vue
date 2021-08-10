<template>
  <div @class="fire" :class="filter + ' filter-item'" :style="{backgroundImage: 'url('+image+')'}">
    
    <button @click="fire">버튼</button>
     <slot></slot> 
     <!-- <slot :msg="msg"></slot> -->
     <!-- <slot name="b"></slot> -->
     <!-- //빵꾸자리에 넣을 수 있다.  -->
  </div>
</template>

<script>
export default {
    name : 'filterbox',
    // data(){
    //     return{
    //         msg : 'hello'
    //     }
    // },
    methods : {
        fire(){
            this.emitter.emit('박스클릭함','this.filter')
        },

    },
    props : {
        image : String,
        filter : String,
    }
}
</script> 

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
    overflow: visible;
}
</style>