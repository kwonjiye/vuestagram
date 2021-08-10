<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step--">Cancel</li>
    </ul>

    <ul class="header-button-right">
      <li v-if="step <= 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>

    <img src="./assets/logo.png" class="logo" />
  </div>

  <h4>안녕</h4>
  <!-- <h4>{{ $store.state.name }}</h4>
  <button @click="$store.state.name='박'"> 버튼 </button> -->

  <Container :image="image" :pdata="pdata" :step="step" />
  <button @click="more">더보기</button>
  <!-- <Post/> -->

  <!-- {{post}} -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
  <!-- 
  <div v-if="step ==0 ">내용0</div>
  <div v-if="step ==1 ">내용1</div>
  <div v-if="step ==2 ">내용2</div>
  <button @click="step=0">버튼0</button>
  <button @click="step=1">버튼1</button>
  <button @click="step=2">버튼2</button>
  <div style="margin-top : 500px;"></div> -->
</template>

<script>
import Container from "./components/Container";
// import Post from "./components/Post";
import postdata from "./assets/postdata.js";
import axios from "axios";

axios.post();

export default {

  name: "App",
  data() {
    return {
      step: 0,
      pdata: postdata,
      image: "",
      fileList: [],
      선택한필터: '',
    };
  },
 mounted(){
    this.emitter.on('박스클릭함', (a)=>{
      this.선택한필터 = a
    });
  },
  components: {
    Container,
  },
  methods: {
    publish() {
      var mypdata = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.image,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.작성한글 ,
        filter: this.선택한필터,
      };
      this.pdata.unshift(mypdata);
      this.step = 0;
    },
    more() {
      // axios.post('URL', {name : 'kim'}).then().catch((err)=>{
      //   err
      // })

      axios
        .get("https://codingapple1.github.io/vue/more0.json")
        .then((결과) => {
          console.log(결과.data);
          this.pdata.push(결과.data); //array에다가 데이터 추가해주세요
        }); //더보기로 요청한 게시물입니다.
    },
    upload(e) {
      this.fileList = e.target.files;
      // console.log(file[0]);
      this.image = URL.createObjectURL(this.fileList[0]);
      // console.log(url);
      // this.image = url;
      this.step++;
    },
  },
};
</script>

<style>
@import "style.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
</style>



