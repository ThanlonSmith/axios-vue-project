<template>
  <div id="course">
    <ul>
      <li
        v-for="(item,index) in categoryList"
        :key="item.id"
        @click="clickHandler(index)"
        :class="{active:currentIndex===index}"
      >{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
// 当前组件的业务逻辑
export default {
  name: "Course", // 组件名
  data() {
    return {
      categoryList: [],
      currentIndex: 0,
    };
  },
  methods: {
    clickHandler(index) {
      this.currentIndex = index;
    },
    getCateGoryList() {
      this.$https
        .get("http://127.0.0.1:5000/api/v1/category/list")
        .then((response) => {
          console.log(response);
          let data = response.data;
          if (data.error_no === 0) {
            this.categoryList = data.data;
            console.log(this.categoryList);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getCateGoryList();
  },
};
</script>
<style scoped>
/* 前组件的样式  */
li {
  float: left;
  margin-right: 8px;
  padding: 5px;
  cursor: pointer;
}
#course {
  margin-top: 10px;
}
.active {
  background-color: rebeccapurple;
  color: white;
}
</style>>
