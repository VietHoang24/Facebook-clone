
let post_image_id = document.getElementById("post_image_id");
let close_post_modal=document.getElementById("close_post_modal");
let modal_post=document.getElementById("modal-post-id")

let open_post_modal=document.getElementById("post_thumbnail");
open_post_modal.onclick=function(){
    modal_post.style.display="block";
}
close_post_modal.onclick = function(){

    modal_post.style.display="none";
    
}

function changeHandler(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    // FileList object.
    var files = evt.target.files;

    var file = files[0];

    var fileReader = new FileReader();


    fileReader.onload = function(progressEvent) {
        var url = fileReader.result;

        // Something like: data:image/png;base64,iVBORw...Ym57Ad6m6uHj96js
        console.log(url);
        //
        var myImg = document.getElementById("myimage");
        myImg.src= url;
    }


    // Read file asynchronously.
    fileReader.readAsDataURL(file); // fileReader.result -> URL.
}
