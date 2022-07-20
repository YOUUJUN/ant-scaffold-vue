<template>
    <el-breadcrumb separator="/">

        <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
        <el-breadcrumb-item v-for="(item, index) in navList" :key="item.path">
            <span v-if="item.redirect==='noRedirect' || index==navList.length-1">{{item.meta.title}}</span>
            <a v-else @click="handleLink(item)">{{item.meta.title}}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {

    data(){
        return {
            navList : []
        }
    },

    watch : {
        $route (route){
            if (route.path.startsWith('/redirect/')) {
                return;
            }
            this.getBreadcrumb()
        }
    },

    created(){
        console.log('router', this.$router);
        this.getBreadcrumb();
    },

    methods: {

        getBreadcrumb (){
            let matched = this.$route.matched.filter( route => route.meta && route.meta.title);
            console.log('matched1', matched);
            matched = [{ path: '/', meta: { title: '首页' }}].concat(matched);

            console.log('matched2', matched);

            this.navList = matched;
        },


        handleLink(item){
            // console.log('item', item);
            // this.$router.push(item.path);

            const { redirect, path } = item
            if (redirect) {
                this.$router.push(redirect).catch(err=>{});
                return
            }
            this.$router.push(path).catch(err=>{});
        }

    }

};
</script>

<style>
</style>