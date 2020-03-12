<template>

    <Page>

        <StackLayout>
           <Todo></Todo>
        </StackLayout>

     </Page>

</template>

<script>

import Detail from "./Detail";
import Todo from "./Todo";
import Filter from "./Filter";

    export default {
        components:{Detail,Todo,Filter},
    };


</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
        text-align: center;
        background-color: yellow;
        margin-left: 40;
        margin-right:40;
        font-size: 30.1em;

    }
    .navBar{

       text-align: center;
    }
</style>
