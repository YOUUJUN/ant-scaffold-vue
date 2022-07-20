<template>
    <a-layout class="root-wrap">
        <a-layout-header class="header-wrap">Header</a-layout-header>
        <a-layout class="main-wrap">
            <a-layout-sider class="aside-wrap" theme="light"> 
                <side-menu></side-menu>
            </a-layout-sider>
            <a-layout-content class="content-wrap">
                <section class="content">
                    <div class="inner-wrap"></div>
                </section>
                <a-layout-footer class="foot-wrap">Footer</a-layout-footer>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
const SideMenu = () => import('@/components/menu/SideMenu.vue')

export default {

    components : {
        SideMenu
    }

};
</script>

<style scoped>
.root-wrap {
    display: flex;
    height: 100%;
}

.header-wrap {
    flex: none;
    height: 6rem;
    line-height: 6rem;
    padding: 0;
    background-color: #fff;
}

.main-wrap {
    flex: auto;
}

.content-wrap {
    display: flex;
    flex-direction: column;
}

.content {
    position: relative;
    flex: auto;
}

.inner-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}

.foot-wrap {
    flex: none;
}
</style>