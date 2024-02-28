<template>
    <div class="setBox">
        <div class="setHeader">
            <span class="setTitle">通知消息设置</span>
            <img src="../assets/close.png" alt="" class="setClose">
        </div>
        <div class="setBody">
            <form action="">
                <table>
                    <tr>
                        <td class="leftCol">活动开始前</td>
                        <td colspan="2">
                            <a-input-number class="timeInput" v-model="day" :min="1" :max="10" @change="onChange" />
                            <span>天</span>
                            <a-input-number class="timeInput" v-model="hour" :min="1" :max="10" @change="onChange" />
                            <span>小时</span>
                            <a-input-number class="timeInput" v-model="minute" :min="1" :max="10" @change="onChange" />
                            <span>分钟</span>&nbsp;
                            <span class="tip">发送通知消息</span>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="../assets/star.png" alt="" class="star">通知内容</td>
                        <td><a-textarea class="noticeContent" placeholder="请输入通知内容" :rows="4" /></td>
                        <td class="insertInfo" colspan="2">
                            <span>接收人姓名</span>
                            <span>接收人预约时间</span>
                            <span>活动名称</span>
                            <span>活动地点</span>
                            <span>主办方名称</span>
                            <span>活动剩余开始时间</span>
                            <span>当前日期</span>
                            <span>活动详情链接</span>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        <div class="setFooter">
            <a-button type="primary" class="confirm">确定</a-button>
        </div>
    </div>
</template>

<script>
export default {
    name:'NoticeSetting',
    data(){
        return{
            day:0,
            hour:0,
            minute:30,
        }
        
    },
    methods:{
        
    }

}
</script>

<style scoped>
.setBody span,.timeInput{
    margin-right: 5px;
}
.timeInput{
    width: 55px;
}

.setBody span{
    vertical-align: middle;
}
.noticeContent{
    width: 350px;
}
.insertInfo{
    padding-left: 10px;
    width:300px;
    display: flex;
    flex-wrap: wrap; /* 如果内容溢出容器宽度，自动换行 */
    gap: 5px; /* 设置 .selectUser 之间的垂直间距 */
}
.insertInfo span{
    color: #67C23A;
    border: 1px solid #E1F3D8;
    background-color: #F0F9EB;
    border-radius: 10px;
    font-size: 15px;
    padding-left: 5px;
    padding-right: 5px;

}
</style>