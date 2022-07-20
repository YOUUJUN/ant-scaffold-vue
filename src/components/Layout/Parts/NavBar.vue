<template>

    <div class="header">
        <section class="start">
            <!-- <img class="logo" src="@/assets/logo.png" > -->
        </section>

        <section class="center">

            <div class="bread-wrap">
                <hamburger :is-active="sidebar.opened" @toggleClick="toggleClick"></hamburger>

                <breadcrumb class="bread-nav"></breadcrumb>

            </div>

            <div class="ctrl-wrap">

                <router-view name="navCtrl"/>

            </div>

        </section>

        <section class="end">

            <div class="avatar-wrap">
                <el-dropdown>
                <span class="el-dropdown-link">
                    <el-avatar src="/images/me.png"></el-avatar>
                    <i class="el-icon-caret-bottom" />
                </span>
                <el-dropdown-menu slot="dropdown">
                    <!-- <el-dropdown-item>个人中心</el-dropdown-item> -->
                    <el-dropdown-item @click.native="handleLogOut">退出登录</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>

            </div>

        </section>
    </div>
  
</template>

<script>
import { postAction } from "@/api/manage";
const breadcrumb = () => import('@/components/Breadcrumb/Index.vue');
const hamburger = () => import('@/components/Hamburger/Index.vue');

import {mapGetters, mapActions} from "vuex";

export default {
    name : 'NavBar',
    
    components : {
        breadcrumb,
        hamburger
    },

    computed : {
        ...mapGetters([
            'sidebar'
        ])
    },

    methods : {

        ...mapActions('display',[
            'toggleSideBar',
        ]),

        ...mapActions('user',[
            'logout',
        ]),

        toggleClick(){
            this.toggleSideBar();
        },

        //处理退出登录
        async handleLogOut(){
            await this.logout
            this.$router.push({path : '/login'})
        }

    }


}
</script>

<style>

</style>

<style scoped>
    .header{
        display: flex;
        justify-content:space-between;
        align-items: center;
        height: 100%;
        line-height: 100%;
        border-bottom: .1rem solid #f5f5f5;
        box-sizing: border-box;
    }

    .header .start, .header .center, .header .end{
        display: inline-flex;
        height: 100%;
    }

    .start{
        display: flex;
        justify-content: center;
        width:24rem;
        flex: none;
    }

    .start .logo{
        width: 120px;
        height: 100%;
    }

    .center{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex:auto;
        margin-right: 7.5rem;
    }

    .bread-wrap{
        display:flex;
        flex-direction: row;
        align-items: center;
    }

    .bread-nav{
        margin-left:1.5rem;
    }

    .ctrl-wrap{
        display: flex;
    }

    .end{
        flex:none;
        margin-left: 1.5rem;
        margin-right:2rem;
    }

    .avatar-wrap{
        display: inline-flex;
        height: 100%;
        line-height: 100%;
        align-items: center;
        cursor: pointer;
    }
</style>