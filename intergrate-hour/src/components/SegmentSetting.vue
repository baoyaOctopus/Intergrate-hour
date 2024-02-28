<template>
    <div class="setBox">
        <div class="setHeader">
            <span class="setTitle">活动分段设置</span>
            <img src="../assets/close.png" alt="" class="setClose">
        </div>
        <div class="setBody">
            <form action="">
                <div class="bodyTop">
                    <span class="bodyTopTitle">分段活动1</span>
                      <a-button class="copyBtn" type="primary" ghost>复制</a-button>
                      <a-button class="deleteBtn" danger>删除</a-button>
                </div>
                <div class="roleDetail" v-for="o in segments" :key="o.index" style="display: flex; align-items: center">
                  <img class="star" src="../assets/star.png" alt="">  
                  <span>时段{{ o.index + 1 }}</span>&nbsp;&nbsp;
                    <a-range-picker @change="onChange"/>&nbsp;&nbsp;
                  <img class="star" src="../assets/star.png" alt="">  
                    <span>限额</span>&nbsp;&nbsp;
                    <a-input-number v-model:value="o.num" />&nbsp;&nbsp;
                    <a-button class="subBtn" shape="circle" @click="subSegment" danger>-</a-button>&nbsp;&nbsp;
                    <a-button class="addBtn" shape="circle" @click="addSegment" type="primary" ghost>+</a-button>
                    
                </div>
            </form>
        </div>
        <div class="setFooter">
            <a-button type="primary" class="confirm">确定</a-button>
            
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const segments = ref([
  {
    index: 0,
    segment: '',
    value: '',
    num: 200
  }
])

const addSegment = () => {
  segments.value.push({
    index: segments.value.length,
    segment: '',
    value: '',
    num: 200
  })
}
const subSegment = () => {
  // 将当前这个时段删除
  segments.value.pop()
}


</script>

<style scoped>
/* body头部 */
.bodyTop{
    margin-bottom: 20px;
    display: flex;
    align-items: center; /* 垂直居中 */
}
.bodyTopTitle{
    margin-right: 10px;
}
.roleDetail{
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}
.copyBtn {
  margin-right: 10px;
  color: #409EFF;
  background-color: #ECF5FF;
  outline: none;
   
}
.deleteBtn {
  margin-right: 10px;
  color: #F56C6C;
  border: 1px solid #F56C6C;
  background-color: #FEF0F0;
  outline: none;
}
.bodyTopTitle {
  margin-right: auto;
}


</style>