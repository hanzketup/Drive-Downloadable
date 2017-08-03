var i = document.getElementById("in");
var o = document.getElementById("out");
var btn = document.getElementById("btn");
var overlay = document.getElementById("overlay");

var copy = false;

btn.addEventListener("click", function() {

  if (copy) {
    overlay.classList.add("overlayani");
    o.select();
    try {
      var cpy = document.execCommand('copy');
      var msg = cpy ? 'successful' : 'unsuccessful';
      console.log('Copying was ' + msg);
    } catch (err) {
      console.log('unable to copy');
    }

window.setTimeout(function(){
    overlay.classList.remove("overlayani");
}, 1000);


  } else {
    console.log("nothing to copy!")
  }
});

i.addEventListener("keyup", function() {

  var inval = i.value.toString();
  var qual = '(usp=sharing)$';

  var chk = inval.match(qual);
  console.log(chk);

  if (chk == null) {
    o.value = "invalid link!";
    act(false);
  }

  if (chk.length == 2) {
    var idreg = /(d\/)(\w+)/g;
    var id = idreg.exec(inval);

    if (id != null) {
      act(true);
      o.value = "https://drive.google.com/uc?export=download&id=" + id[2];
    } else {
      o.value = "invalid link!";
    }
  }

});

function act(state) {
  if (state == true) {
    btn.classList.add("btn-rdy");
    copy = true;
  }
  if (state == false) {
    btn.classList.remove("btn-rdy");
    copy = false;
  }
}
