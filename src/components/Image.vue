<template>
    <div class="component">

<p>this is my image component</p>
<p>{{image.author}}</p>
    </div>
</template>


<script>
export default {
    props:{
        image:{
            type: Object,
            required:true
        }
    },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>