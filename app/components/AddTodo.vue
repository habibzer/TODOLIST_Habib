<template>
    <Page>
        <StackLayout class="form">
            <label text="new task" class="titre"/>
            <StackLayout class="input-field">
                <label text="Content"/>
                <TextField class="input" v-model="newTask.content"></TextField>
            </StackLayout>
            <button @tap="addTodo">Add</button>
        </StackLayout>

    </Page>
</template>

<script>
    import Todo from "./Todo";
    import Master from "./Master";
    export default{
        name:"AddTodo",
        components:{Todo,Master},
        props:['tbItems'],

        data(){
            return{
                newTask:{
                    content:'',
                    done:false,
                    id:Date.now()
                }

            }
        },
        methods:{
            addTodo(){
                this.tbItems.unshift(this.newTask);
                this.$navigateBack();
            }
        }
    }
</script>
<style>
    .titre{
        font-size: 32px;
        text-shadow: -1px -1px #0c0, 1px 1px #060, -3px 0 4px #000;
        color: black;
        text-align: center;
    }
</style>
