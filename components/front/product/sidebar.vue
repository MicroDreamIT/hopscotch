<template>
    <div class="sidebar">
            <span>hello</span>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
        created(){
            console.log(this.$store.getters.sizesName)
        }
    }
</script>

<style lang="scss" scoped>
.sidebar{
    span{
        background: #000 !important;
    }
}
</style>