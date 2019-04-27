<template>
    <div class="sidebar">
            <span>hello</span>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
        created(){
            console.log(this.$store.getters.categories)
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