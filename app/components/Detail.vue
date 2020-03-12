<template>
    <Page class="modal">
      <StackLayout>

        <Label :text="todo.content" class="description-label"/>
        <label text="Content : " class="content"/>
        <TextField class="input" v-model="todo.content"></TextField>
          <Label text="done" class="textSwitch"/>
          <FlexboxLayout class="boite">
              <Switch  v-model="todo.done" alignSelf="flex-end" width="70"/>
          </FlexboxLayout>


        <button v-if="todo.done === true" @tap="supprimer(index)" text="Delete"/>
        <Button @tap="$modal.close" text="Close" />


      </StackLayout>
    </Page>
 </template>

 <script>
 export default{
    name:"Detail",
    props:["todo", "tbItems"],

    methods:{
        supprimer(index){
            /*this.tbItems.splice( this.tbItems.indexOf(todo),1);*/
            this.tbItems.forEach((an_item,index)=>{
                if(an_item.id===this.todo.id) this.tbItems.splice(index,1);

            });

            this.$modal.close();

        }

    }
 }
 </script>

<style>
    .modal{
        width: 90%
    }
    .description-label{
        text-align: center;
        font-size: 20px;
        text-decoration: underline;
    }
    .textSwitch{
        width: 700px;
        margin-top: 30px;
        font-size: 20px;
        margin-left: 550px;
    }
    .boite{
        margin-left: 10px;
        height: 10%;
        width: 50%;
    }
    .content{
        font-size: 20px;
    }

</style>
