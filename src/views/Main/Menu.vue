<template>
    <el-menu
        :default-active="defaultActive"
        :unique-opened="true"
        :collapse="sidebar.opened"
        class="menu"
        @open=""
        @close=""
    >
        <el-menu-item index="/Price" @click="$router.push({ path: '/Price' }).catch(err=>{})">
            <a-icon type="transaction" />
            <span slot="title">报价维护</span>
        </el-menu-item>
        <el-menu-item
            index="/Information"
            @click="$router.push({ path: '/Information' }).catch(err=>{})"
        >
            <a-icon type="notification" />
            <span slot="title">每日资讯维护</span>
        </el-menu-item>
        <el-menu-item
            index="/Company"
            @click="$router.push({ path: '/Company' }).catch(err=>{})"
        >
            <a-icon type="bank" />
            <span slot="title">总厂信息维护</span>
        </el-menu-item>
        <el-menu-item
            index="/Merchant"
            @click="$router.push({ path: '/Merchant' }).catch(err=>{})"
        >
            <a-icon type="shop" />
            <span slot="title">网点信息维护</span>
        </el-menu-item>

        <el-menu-item
            index="/Vehicle"
            @click="$router.push({ path: '/Vehicle' }).catch(err=>{})"
        >
            <a-icon type="car" />
            <span slot="title">车辆类型维护</span>
        </el-menu-item>

        <el-menu-item
            index="/Guests"
            @click="$router.push({ path: '/Guests' }).catch(err=>{})"
        >
            <a-icon type="user" />
            <span slot="title">用户展示</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
import { Message } from "element-ui";
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            //菜单默认选中项
            defaultActive: "",
        };
    },

    computed: {
        ...mapGetters(["sidebar"]),
    },

    watch: {
        $route: {
            immediate: true,
            handler(newValue) {
                console.log("newValue", newValue);
                this.setMenuActive(newValue.fullPath);
            },
        },
    },

    created() {},

    methods: {
        ...mapActions("display", ["initUserInfo"]),

        //设置菜单默认选中
        setMenuActive(path) {
            console.log("path", path);
            this.defaultActive = path;
        },
    },
};
</script>

<style>
</style>

<style scoped>
.menu {
    user-select: none;
}

.menu .anticon {
    font-size: 18px;
    width: 24px;
    margin-right: 5px;
}
</style>