<template>
    <StackLayout>
        <SegmentedBar v-model="filter" >
            <SegmentedBarItem title="All" />
            <SegmentedBarItem title="Done" />
            <SegmentedBarItem title="Not done" />
        </SegmentedBar>
        <button @tap="toAddTodo">+ Add</button>


        <ListView  for="(item, index) in filtered_items"  @itemTap="onTap">
            <v-template>

                    <Label :text="item.content" class="description-label"/>

            </v-template>

        </ListView>

    </StackLayout>
</template>

<script>

    import Detail from "./Detail";
    import Filter from "./Filter";
    import AddTodo from "./AddTodo";



    export default {
        name: "Todo",
        components: {
            Filter,
            Detail
        },
        methods: {

            onTap(event) {

                //this.filtered_items.splice(event.index,1)
                this.$showModal(Detail, {props: {todo: event.item, tbItems: this.items}});
            },

            onButtonTap() {

                this.$showModal(Filter);
            },
            toAddTodo(){
                this.$showModal(Filter);
            },
            toAddTodo(){
                this.$navigateTo(AddTodo, {props:{ tbItems: this.items}});
            },
            supprimer(){
                console.log("supprimer")
            },



        },


        data() {

            return {
                filter:1,
                items: [
                    {id:1 ,content: "Todo 1 ", done: false},
                    {id:2 ,content: "Todo 2 ", done: true},
                    {id:3 ,content: "Todo 3 ", done: false},
                    {id:4 ,content: "Todo 4 ", done: true},
                    {id:5 ,content: "Todo 5 ", done: false},
                    {id:6 ,content: "Todo 6 ", done: true},
                    {id:7 ,content: "Todo 7 ", done: false},
                    {id:8 ,content: "Todo 8 ", done: true},
                ]
            };

        },
        computed:{
            filtered_items:function(){


                if(this.filter===1){
                    return this.items.filter(item=>item.done);
                }else if(this.filter===0){
                    return this.items;
                }else{
                    return this.items.filter(item=>!item.done);
                }

            }
        },
        watch:{
            /*filter:function(value){

                if(value===1){
                    this.filtered_items = this.items.filter(item=>item.done);
                }else if(value===0){
                    this.filtered_items = this.items;
                }else{
                    this.filtered_items = this.items.filter(item=>!item.done);
                }
            },*/
            /*
            filtered_items:function(){

                console.log(this.filter)

                if(this.filter===1){
                    return this.items.filter(item=>item.done);
                }else if(filter===0){
                    return this.items;
                }else{
                    return this.items.filter(item=>!item.done);
                }

            }*/
        }
    }

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
        background-color: #1164e8;
        margin-left: 40;
        margin-right: 40;
        font-size: 30.1em;

    }

    .navBar {

        text-align: center;
    }
</style>

