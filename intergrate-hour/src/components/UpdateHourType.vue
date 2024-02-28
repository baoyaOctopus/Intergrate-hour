<template>
    <div class="setBox">
      <div class="setHeader">
        <span class="setTitle">修改时数类型组</span>
        <img src="../assets/close.png" alt="" class="setClose">
      </div>
      <div class="setBody">
        <form action="">
            <div class="setBodyTop">
                <span>时数类型数</span>&nbsp;&nbsp;
                <a-input-number v-model:value="hourNum" :min="1" :max="10" :disabled="disabled" />
            </div>
                <!-- <span id="remove" @click="remove">-</span><span id="qSumSpan"><input type="text" id="qSumInput" v-model="hSum"></span><span id="add" @click="add">+</span> -->
            <div class="typeDetail">
                <img src="../assets/star.png" alt="" class="star">
                <span> 类型1</span>
                <a-input class="typeInput" placeholder="志愿者时数（小时）" />
            </div>
        </form>
      </div>
      <div class="setFooter">
        <a-button type="primary" class="confirm">确定</a-button>
      </div>
    </div>
    </template>
    
    <script scoped>
    export default {
        name:'UpdateHourType',
        data(){
            return{
                // hSum:0,
            }
          
        },
        methods:{
            // remove(){
            //     if(this.hSum>0){this.hSum --}	
            // },
            // add:function(){
            //     this.hSum ++
            // },
            confirmBtn(){
                console.log('点击确定成功')
            }
        }
    
    }
    </script>
    
    <style scoped>
    #qSumInput{
        width: 40px;
        border: 0px;
        text-align: center;
    }
    #qSumInput:focus {
      outline: none; /* 移除默认的聚焦边框 */
    }
    #remove,#add{
        background-color: #ccc;
        text-align: center;
        padding: 5px 15px;
        border: 1px solid #ccc;
    }
    #remove{
        border-radius: 7px 0 0 7px;
    }
    #add{
        border-radius:  0 7px 7px 0 ;
    }
    /* 类型 */
    .typeDetail{
        margin-left: 20px;
    }
    .type{
        width: 240px;
        height: 32px;
        padding: 5px, 12px, 5px, 12px;
        border-radius: 4px;
        border: 1px solid #ccc;
    }
    .typeInput{
        width: 200px;
    }
    .typeDetail span{
        margin-right: 15px;
    }
    .setBodyTop{
        margin-bottom: 10px;
    }
    </style>