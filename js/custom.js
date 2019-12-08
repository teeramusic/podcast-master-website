$fq = $("#quote-form");
$pt = $(".price-total");
$('#quote').on('hidden.bs.collapse', function () {
  $("#order").collapse("show");
  console.log("fire")
})
$fq.change(function() {
  // toggle form collapse
  if ($fq.find("#option-no-music:checked").length) {
    $fq.children("#bg-music-collapse").collapse("hide");
  } else {
    $fq.children("#bg-music-collapse").collapse("show");
  }
  // toggle form collapse
  if ($fq.find("#option-no-sfx:checked").length) {
    $fq.children("#sfx-collapse").collapse("hide");
  } else {
    $fq.children("#sfx-collapse").collapse("show");
  }

  // calculate price
  old_total = parseInt($fq.find('.price-total').text());
  var total = 0;
  var option = 0;
  if ($fq.find("#form-raw-length").val() === "I'm not sure") {
    $fq.find("#has-quote").hide();
    $fq.find("#custom-quote").show();
    $pt.text("TBD");
    return;
  } else {
    $fq.find("#custom-quote").hide();
    $fq.find("#has-quote").show();
  }
  var minutes = parseInt($fq.find("#form-raw-length").val());
  var tracks = parseInt($fq.find("#form-track-count").val());
  if ($fq.find("#form-edit-master:checked").length) {
    option = 1
  } else if ($fq.find("#form-edit-only:checked").length) {
    option = 2
  } else {
    option = 3
  }



  // editing minutes
  if (option === 1 || option === 2) {
    total += minutes * 2 + Math.ceil((tracks - 1) * minutes * 0.3);
  }
  // mastering per track
  if (option === 1 || option === 3) {
    total += tracks * 20;
  }
  // mastering track length (no editing)
  if (option === 3) {
    total =
      total += Math.ceil(minutes * 0.16);
  }
  option = 0;
  if ($fq.find("#option-music-provided:checked").length) {
    option = 1
  } else if ($fq.find("#option-need-music:checked").length) {
    option = 2
  }
  if (option === 1) {
    total += $fq.find("#form-bg-music-count").val() * 5;
  } else if (option === 2) {
    total += $fq.find("#form-bg-music-count").val() * 20;
  }
  option = 0;
  if ($fq.find("#option-sfx-provided:checked").length) {
    option = 1
  } else if ($fq.find("#option-need-sfx:checked").length) {
    option = 2
  }
  if (option === 1) {
    total += $fq.find("#form-sfx-count").val() * 2.5;
  } else if (option === 2) {
    total += $fq.find("#form-sfx-count").val() * 7;
  }

  // surcharge
  total += 19;
  console.log(total);

  if (update) {
    clearInterval(update);
  }
  var update = setInterval(function() {
    if (old_total != total) {

      if (old_total > total) {
        if (old_total > total + 10) {
          old_total -= 10;
        }
        $pt.text((--old_total).toFixed(2)+"USD");
      } else {
        if (old_total < total + 10) {
          old_total += 10;
        }
        $pt.text((++old_total).toFixed(2)+"USD");
      }

    } else {
      clearInterval(update);
    }

  }, 16.66666);






});

$fq.submit(function(e) {
  e.preventDefault();
  $("#quote>div.container").collapse("hide");
});

function showCart(data) {
  // unknown raw audio length
  if (!data) {

    return;
  }
  // known raw audio length


}



function hideCart() {

}
$('.carousel').carousel('pause');
