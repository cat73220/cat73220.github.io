var isTouch = 'ontouchstart' in window;

$(function()
{

// $('#debug').text( "Window height :"+$(window).height() );

/**
 * uxui.js general
 */
$('#uxuiDiv').css( 'height', $(window).height() );

/**
 * ipaddrDiv scope
 */

/**
 * Connecting to an ESP Device
 */
function connect()
{
  $('#ipaddrLocationButton').text( $('#col1').val()+"."+$('#col2').val()+"."+$('#col3').val()+"."+$('#col4').val() );
  location.href = "#uxui";
}

/**
 * Triggering to connect to an ESP device
 */
$('#ipaddrLocationButton').click( connect );

/**
 * uxuiDiv general
 */

function uiSetupSwipeDrag(ev)
{
  ev.preventDefault();
  isTouch = "touch" === event.type.substring(0,5);
  this.pageX = (isTouch ? event.changedTouches[0].pageX : ev.pageX);
  this.pageY = (isTouch ? event.changedTouches[0].pageY : ev.pageY);
  this.touched = true;
}

function uiSwipingDragging(ev)
{
  if (!this.touched) {
    return;
  }

  ev.preventDefault();

  this.pageX = (isTouch ? event.changedTouches[0].pageX : ev.pageX);
  this.pageY = (isTouch ? event.changedTouches[0].pageY : ev.pageY);
}

function uiTeardownSwipeDrag(ev)
{
  if (!this.touched) {
    return;
  }

  this.touched = false;
}

/**
 * Color and Luminuce of uxuiDiv scope
 */
function toHex(dec)
{
  if (dec < 16) {
    return "0"+dec.toString(16);
  }

  return dec.toString(16);
}

function hsvtorgb(h, s, v)
{
  var r,g,b;

  while (h < 0) {
    h += 360;
  }

  h = h % 360;

  if (s == 0) {
    return {'r' : v, 'g' : v, 'b' : v };
  }

  s = s / 255;

  var i = Math.floor( h / 60 ) % 6,
      f = ( h / 60 ) - i,
      p = v * ( 1 - s ),
      q = v * ( 1 - f * s ),
      t = v * ( 1 - ( 1 - f ) * s );

  switch (i) {
    case 0:
      r = v; g = t; b = p; break;
    case 1:
      r = q; g = v; b = p; break;
    case 2:
      r = p; g = v; b = t; break;
    case 3:
      r = p; g = q; b = v; break;
    case 4:
      r = t; g = p; b = v; break;
    case 5:
      r = v; g = p; b = q; break;
  }

  return "#"+toHex( Math.round(r) )+toHex( Math.round(g) )+toHex( Math.round(b) );
}

function uiColorLuminanceSwipeDrag(ev)
{
  var width = $('#uxuiColorLuminanceDiv').width(),
      height = $('#uxuiColorLuminanceDiv').height(),
      h = this.pageX / width * 360,
      v = this.pageY / height * 256;

  if (h > 360) {
    h = 359;
  }

  if (v > 256) {
    v = 255;
  }

  $('#debug').text( "h:"+h+" v:"+v+" width:"+width+" height:"+height+" this.page(X,Y):("+this.pageX+","+this.pageY+")" );
  $('#uxuiColorLuminanceDiv').css('background-color', hsvtorgb(h,255,v));
}

$('#uxuiColorLuminanceDiv').bind({
  'touchstart mousedown' : function(ev)
  {
    uiSetupSwipeDrag(ev);
    uiColorLuminanceSwipeDrag(ev);
  },
  'touchmove mousemove' : function(ev)
  {
    uiSwipingDragging(ev);
    uiColorLuminanceSwipeDrag(ev);
  },
  'touchend mouseup' : function(ev)
  {
    uiTeardownSwipeDrag(ev);
    uiColorLuminanceSwipeDrag(ev);
  }
});

/**
 * LED Quantity of uxuiDiv scope
 */

function uiLEDQtyDrag(ev)
{
  var width = $('#uxuiLEDQtyDiv').width(),
      qty = Math.round(this.pageX / width * 32) % 32 + 1,
      preSpace = " ";
/*
  if (qty < 1) {
    qty = 1;
  }

  if (qty > 31) {
    qty = 32;
  }
*/

  if (qty < 10) {
      preSpace = "  ";
  }

  $('#uxuiLEDQtySpan').text(preSpace+qty);
}

$('#uxuiLEDQtyDiv').bind({
  'touchstart mousedown' : function(ev)
  {
    uiSetupSwipeDrag(ev);
    uiLEDQtyDrag(ev);
  },
  'touchmove mousemove' : function(ev)
  {
    uiSwipingDragging(ev);
    uiLEDQtyDrag(ev);
  },
  'touchend mouseup' : function(ev)
  {
    uiTeardownSwipeDrag(ev);
    uiLEDQtyDrag(ev);
  }
});

})
