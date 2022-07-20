<template>
    
    <i 
    class="el-icon-s-unfold humburger"
    :class="{'is-active': !isActive}"
    @click="toggleClick"
    ></i>

</template>

<script>
export default {

    props : {
        isActive : {
            type : Boolean
        }
    },

    methods : {
        toggleClick(){
            this.$emit('toggleClick');
        }
    }


}
</script>

<style>

</style>

<style scoped>

    .humburger{
        font-size: 2.8rem;
        cursor: pointer;
        transition: transform .3s;
    }

    .humburger.is-active{
        transform : rotate(180deg);
    }

</style>