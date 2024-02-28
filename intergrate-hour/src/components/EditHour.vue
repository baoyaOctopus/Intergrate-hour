<template>
<div class="setBox">
  <div class="setHeader">
    <span class="setTitle">编辑时数</span>
    <img src="../assets/close.png" alt="" class="setClose">
  </div>
  <div class="setBody">
    <form action="">
        <table>
            <tr>
                <td class="leftCol"><img src="../assets/star.png" alt="" class="star"> 选中用户</td>
                <td>
                    <div class="selectUserContainer">
                        <span class="selectUser">2021212205274 叶辰昕 <img src="../assets/sub.png" alt=""></span>
                        <span class="selectUser">2021212205274 叶辰昕 <img src="../assets/sub.png" alt=""></span>
                        <span class="selectUser">2021212205274 叶辰昕 <img src="../assets/sub.png" alt=""></span>
                        <span class="selectUser">2021212205274 叶辰昕 <img src="../assets/sub.png" alt=""></span>
                        <span class="selectUser">2021212205274 叶辰昕 <img src="../assets/sub.png" alt=""></span>
                        <span class="selectUser">2021212205274 叶辰昕 <img src="../assets/sub.png" alt=""></span>
                    </div>
                </td>            
            </tr>
            <tr>
                <td><img src="../assets/star.png" alt="" class="star"> 类型1时数</td>
                <td>
                    <a-input-number class="timeInput" v-model="typeHour" :min="1" :max="10" @change="onChange" />
                    <span class="tip"> *输入1代表该类型时数+1，输入-1代表该类型时数-1，以此类推</span> 
                </td>
            </tr>
            <tr>
                <td><img src="../assets/star.png" alt="" class="star"> 原因</td>
                <td><a-textarea class="editReason" placeholder="请输入编辑时数的原因" :rows="4"/></td>
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
.selectUserContainer {
  display: flex;
  flex-wrap: wrap; /* 如果内容溢出容器宽度，自动换行 */
  gap: 5px; /* 设置 .selectUser 之间的垂直间距 */
}
.selectUser{
    background-color: #E1E1E1A3;
    border-radius: 3px;
    margin: 5px;
    padding: 5px;
    font-size: 12px;
}
.editReason{
  width: 500px;
}
.selectUser img{
  width: 10px;
  justify-items:center;
}
</style>