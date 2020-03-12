<script>

    var camera = require("nativescript-camera");
    import * as camera from "nativescript-camera";

    var imageModule = require("tns-core-modules/ui/image");
    camera.takePicture()
        .then(function (imageAsset) {
            console.log("Result is an image asset instance");
            var image = new imageModule.Image();
            image.src = imageAsset;
        }).catch(function (err) {
        console.log("Error -> " + err.message);
    });

    import { Image } from "tns-core-modules/ui/image";
    camera.takePicture().
    then((imageAsset) => {
        console.log("Result is an image asset instance");
        var image = new Image();
        image.src = imageAsset;
    }).catch((err) => {
        console.log("Error -> " + err.message);
    });


</script>



<!--<script>


    import cloudinary from “cloudinary-core”;
    var cloudinary = require("cloudinary-core");


    cloudinary.v2.uploader.upload("../../liste-courses.jpeg",
        {
            ressources_type: "image",
            cloud_name:"dp7dyhuib",
            api_key:"748167137591268",
            name:"liste-courses.jpeg",
            api_secret:"iwLhcO7DciJ76ZF8pcxDqXy8GWs"
        },
        (err,result) => {
            if(err) throw new Error(err.message);

            if(result){
                console.log("upload ok");
                console.log(result);
            }
        } );

</script>-->

