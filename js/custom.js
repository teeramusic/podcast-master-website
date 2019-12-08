
$fq = $("#quote-form");




$fq.change(function(){
  // toggle form collapse
  if($fq.find("#option-no-music:checked").length){
      $fq.children("#bg-music-collapse").collapse("hide");
  } else {
    $fq.children("#bg-music-collapse").collapse("show");
  }
  // toggle form collapse
  if($fq.find("#option-no-sfx:checked").length){
      $fq.children("#sfx-collapse").collapse("hide");
  } else {
    $fq.children("#sfx-collapse").collapse("show");
  }

  // calculate price
  old_total = parseInt($fq.find('#total').text());
  var total=0;
  var option=0;
  var minutes=parseInt($fq.find("#form-raw-length").val());
  var tracks=parseInt($fq.find("#form-track-count").val());
  if($fq.find("#form-edit-master:checked").length){option=1}
  if($fq.find("#form-edit-only:checked").length){option=2}
  if($fq.find("#form-master-only:checked").length){option=3}
  // editing minutes
  if(option === 1 || option === 2){
    total+=minutes*2+Math.ceil((tracks-1)*minutes*0.3);
  }
  // mastering per track
  if(option === 1 || option === 3){
    total+=tracks*20;
  }
  // mastering track length (no editing)
  if(option === 3){
    total =
    total+=Math.ceil(minutes*0.16);
  }





  // surcharge
  total+=19;
  console.log(total);

  if(update){
    clearInterval(update);
  }
  var update = setInterval(function(){
    if(old_total!=total){

      if(old_total>total)
      {
        if(old_total>total+10){
          old_total-=10;
        }
        $fq.find('#total').text(--old_total);
      } else {
        if(old_total<total+10){
          old_total+=10;
        }
        $fq.find('#total').text(++old_total);
      }

    } else {
      clearInterval(update);
    }

  },16.66666);






});


function showCart(data){
 // unknown raw audio length
 if(!data){

 return;
 }
 // known raw audio length


}



function hideCart(){

}
