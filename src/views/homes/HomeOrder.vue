<template>
    <div>
        <button @click="add(10)">增加</button>
        <button @click="jian(6)">减少</button>
        <p>{{this.$store.state.count}}</p>
        
    </div>
</template>
<script>
export default {
    name:"HomeOrder",
    methods:{
        add(a){//用户行为
            //提交修改count的业务函数 业务函数在 store中
            //不能直接修改count
            // ×   this.$store.state.count=this.$store.state.count+1
            this.$store.dispatch("asyncincrement",a)
            //dispath给actions提交方法
        },
        jian(b){
            this.$store.commit("decrement",b)
        }
    }
}
</script>
<style scoped>

</style>