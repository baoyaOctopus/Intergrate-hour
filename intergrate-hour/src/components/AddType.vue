<template>
<div class="setBox">
  <div class="setHeader">
    <span class="setTitle">新增分类</span>
    <img src="../assets/close.png" alt="" class="setClose">
  </div>
  <div class="setBody">
    <form action="">
        <table>
            <tr>
                <td class="leftCol"><img src="../assets/star.png" alt="" class="star"> 分类名称</td>
                <td>
                  <a-input class="typeName" v-model:value="typeName" placeholder="请输入" />
                </td>
            </tr>
            <tr>
                <td><img src="../assets/star.png" alt="" class="star"> 描述信息</td>
                <td><a-textarea class="description" placeholder="请输入描述信息" :rows="4"/></td>
            </tr>
        </table>
    </form>
  </div>
  <div class="setFooter">
    <a-button type="primary" class="confirm">确定</a-button>
  </div>
</div>
</template>

<script scoped>
export default {
    name:'EditHour',
    data(){
        return{
            
        }
    },
    methods:{
        
    }
}
</script>

<style>
table {
  border-collapse: separate;
  border-spacing: 0 15px; /* 行间距 */
}
td {
  padding-top: 5px;
  padding-bottom:5px;
}
.typeHour{
    width: 240px;
    height: 32px;
    padding: 5px, 12px, 5px, 12px;
    border-radius: 4px;
    border: 1px solid #ccc;
}
textarea{
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
}
.leftCol{
    width: 100px;
}
.typeName{
  width: 200px;
}
.description{
  width: 400px;
}


</style>