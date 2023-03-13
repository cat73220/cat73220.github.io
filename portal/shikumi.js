const hdr = document.getElementsByClassName('masthead')[0];

// console.log('shikumi.js here');
// console.log(`shikumi.js : window outer : (x,y-w,h)-(${window.screenX},${window.screenY}-${window.outerWidth}, ${window.outerHeight})`);
// hdr.innerHTML = hdr.innerHTML+`[here[${window.screenX},${window.screenY}-${window.outerWidth},${window.outerHeight}(${window.innerHeight})]]`;
$(hdr).width(window.outerWidth+'px');
$(hdr).height(window.outerHeight+'px');
$(() => {
  // console.log('shikumi.js top');
  // console.log(`shikumi.js : top : window outer : (x,y-w,h)-(${window.screenX},${window.screenY}-${window.outerWidth}, ${window.outerHeight})`);
  // hdr.innerHTML = hdr.innerHTML+`[top[${window.screenX},${window.screenY}-${window.outerWidth},${window.outerHeight}(${window.innerHeight})]]`;
  // EFFECT
  //$(hdr).height(window.outerHeight+'px');
  $(document).ready( () => {
    // console.log('shikumi.js : document.ready');
    // console.log(`shikumi.js : document.ready : window outer : (x,y-w,h)-(${window.screenX},${window.screenY}-${window.outerWidth}, ${window.outerHeight})`);
    // hdr.innerHTML = hdr.innerHTML+`[ready[${window.screenX},${window.screenY}-${window.outerWidth},${window.outerHeight}(${window.innerHeight})]]`;
    // no effect
    //hdr.width=window.outerWidth;
    //hdr.height=window.outerHeight;
    // EFFECT
    //$(hdr).height(window.outerHeight+'px');
  });

  $(window).on("load", () => {
    // console.log('shikumi.js : document.load');
    // console.log(`shikumi.js : document.load : window outer : (x,y-w,h)-(${window.screenX},${window.screenY}-${window.outerWidth}, ${window.outerHeight})`);
    // hdr.innerHTML = hdr.innerHTML+`[load[${window.screenX},${window.screenY}-${window.outerWidth},${window.outerHeight}(${window.innerHeight})]]`;
    // no effect
    //hdr.width=window.outerWidth;
    //hdr.height=window.outerHeight;
    // EFFECT
    //$(hdr).height(window.outerHeight+'px');
  });
});
// const hdr = document.getElementsByTagName('header');
// hdr[0].width = window.outerWidth;
// hdr[0].height = window.outerHeight;
// hdr[0].height = 1080;
// console.log('shikumi : hdr :',hdr);
// console.log(`shikumi : window outer : W:${window.outerWidth}, H:${window.outerHeight}`);

