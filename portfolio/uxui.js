/**
 *
 *
 */

// temporaly detecting touchscreen or mouse
var isTouch = 'ontouchstart' in window;

// roundtrip time in msec for LED Tape
var duration;

// number of turn on LED on LED Tape
var LEDQty;

// color and luminance for turn on LED
var ColorLuminanceRGB;

$(function()
{

// initializatioin
var clHtmlRGB = $('#uxuiColorLuminanceDiv').css('background-color');

// reading from uxui.html
ColorLuminanceRGB = { r : parseInt(clHtmlRGB.substring(1,4)), g : parseInt(clHtmlRGB.substring(3,5)), b : parseInt(clHtmlRGB.substring(6,8)) };
LEDQty = parseInt( $('#uxuiLEDQtyIndicator').text(), 10 );

// this is only exceptional not to read from uxui.html because html cannot express duration
duration = 2000;

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
 * Making strings for command LED Tape
 */

function ESPCommandUpdateDuration()
{
  cmd = "D"+parseInt(duration)+"\r\n";
  $('#debug').text(cmd);
}

function ESPCommandUpdateColorLuminance()
{
  var cmd = "C",
      total = 32,
      totalHalf = total / 2,
      halfQty = parseFloat(LEDQty) / 2,
      firstHalf = totalHalf - Math.ceil(halfQty),
      secondHalf = totalHalf + Math.floor(halfQty),
      i;

  for (i = 0; i < firstHalf; i++) {
    cmd += toHex(0) + toHex(0) + toHex(0);
  }

  for ( ; i < secondHalf; i++) {
    cmd += toHex(ColorLuminanceRGB.r)+toHex(ColorLuminanceRGB.g)+toHex(ColorLuminanceRGB.b);
  }
  
  for ( ; i < total; i++) {
    cmd += toHex(0) + toHex(0) + toHex(0);
  }

  cmd += "\r\n";

  $('#debug').text("fH:"+firstHalf+",sH:"+secondHalf+",ceil:"+Math.ceil(halfQty)+",floor:"+Math.floor(halfQty)+" "+cmd);
}

/**
 * Pressing button triggering to connect to an ESP device
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

  return { r: Math.round(r), g : Math.round(g), b: Math.round(b) };
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

  /* $('#debug').text( "h:"+h+" v:"+v+" width:"+width+" height:"+height+" this.page(X,Y):("+this.pageX+","+this.pageY+")" ); */
  ColorLuminanceRGB = hsvtorgb(h,255,v);
  var htmlRGB = "#"+toHex(ColorLuminanceRGB.r)+toHex(ColorLuminanceRGB.g)+toHex(ColorLuminanceRGB.b);
  $('#uxuiColorLuminanceDiv').css('background-color', htmlRGB);
  $('#uxuiDurationIndicator').css('background-color', htmlRGB);
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
    ESPCommandUpdateColorLuminance();
  }
});

/**
 * LED Quantity of uxuiDiv scope
 */

function uiLEDQtyDrag(ev)
{
  var width = $('#uxuiLEDQtyDiv').width(),
      qty = Math.ceil(this.pageX / width * 32) % 32;

  if (!isNaN(qty)) {
    LEDQty = qty;
  }

  if (LEDQty < 1 ) {
    LEDQty = 32;
  }

  $('#uxuiLEDQtyIndicator').text(LEDQty);
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
    ESPCommandUpdateColorLuminance();
  }
});

/**
 * Duration update of uxuiDiv scope
 */

var lightOn = true;
var updateDurationArray = new Array();

function blinkDurationIndicator()
{
  if (lightOn) {
    $('#uxuiDurationIndicator').css('background-color', $('#uxuiDurationDiv').css('background-color'));
  }
  else {
    $('#uxuiDurationIndicator').css('background-color', $('#uxuiColorLuminanceDiv').css('background-color'));
  }
  lightOn = !lightOn;
}

function updateDuration()
{
  var width = $('#uxuiLEDQtyDiv').width(),
      v = (this.pageX / width) * 50;

  if (!isNaN(v)) {
    duration = v * v;
  }

  while (updateDurationArray.length > 0) {
    clearInterval(updateDurationArray.pop());
  }

  updateDurationArray.push(
    setInterval( function() {
      blinkDurationIndicator();
    }, duration / 2)
  );
}

$('#uxuiDurationDiv').bind({
  'touchstart mousedown' : function(ev)
  {
    uiSetupSwipeDrag(ev);
  },
  'touchmove mousemove' : function(ev)
  {
    uiSwipingDragging(ev);
  },
  'touchend mouseup' : function(ev)
  {
    uiTeardownSwipeDrag(ev);
    updateDuration();
    ESPCommandUpdateDuration();
  }
});

/**
 * General main part
 */

updateDuration();
ESPCommandUpdateDuration();
})
