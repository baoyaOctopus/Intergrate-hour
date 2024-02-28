<template>
    <div class="setBox">
        <div class="setHeader">
            <span class="setTitle">活动名额设置</span>
            <img src="../assets/close.png" alt="" class="setClose">
        </div>
        <div class="setBody">
            <form action="">
                <div class="bodyTop">
                    <span class="bodyTopTitle">活动总名额</span>
                    <a-input-number v-model:value="allQuota" :min="1" :max="10" :disabled="disabled" />
                    <!-- <a-input-number class="inputNumber" v-model="value" :min="1" :max="10" @change="onChange" /> -->
                </div>
                <div class="roleDetail" v-for="o in roles" :key="o.index" style="display: flex; align-items: center">
                    <span>角色{{ o.index + 1 }}</span>&nbsp;&nbsp;
                    <a-select ref="select" v-model:value="o.value" style="width: 120px">
                        <a-select-option value="stuff">教职工</a-select-option>
                        <a-select-option value="undergraduate">本科生</a-select-option>
                        <a-select-option value="postgraduate">研究生</a-select-option>
                    </a-select>&nbsp;&nbsp;
                    <a-input-number v-model:value="o.num" />&nbsp;&nbsp;
                    <a-button class="subBtn" shape="circle" @click="subRole" danger>-</a-button>&nbsp;&nbsp;
                    <a-button class="addBtn" shape="circle" @click="addRole" type="primary" ghost>+</a-button>
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

const allQuota = ref(3);
const disabled = ref(true); //禁用总名额的输入框


const roles = ref([
  {
    index: 0,
    role: '',
    value: '教职工',
    num: 200
  }
])

const addRole = () => {
  roles.value.push({
    index: roles.value.length,
    role: '',
    value: '',
    num: 200
  })
}
const subRole = () => {
  // 将当前这个角色删除
  roles.value.pop()
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
    display: flex;
}
.roleDetail{
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}
.inputNumber {
    margin-left: auto; /* 使得 inputNumber 距离左边的间距自动调整，将其推到最右边 */
}
</style>