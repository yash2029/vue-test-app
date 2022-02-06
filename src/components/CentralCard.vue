<template>
    <div class='center-card' >
        <slot></slot>
    </div>
</template>

<script>
export default {
   
}
</script>

<style lang="css" scoped>
    .center-card{
        margin: 0;
        padding: 0;
        height: 775px;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: lightgray;
        overflow: scroll;
    }
</style>