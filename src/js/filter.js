
var FILTER_VALS = {};
var el = document.querySelector('.upload__img');

function go(me, className) {
  var activeButton = document.querySelector('button.active');
  if (activeButton) {
    activeButton.classList.remove('active');
    el.classList.remove(activeButton.textContent);
  }

  me.classList.add('active');
  el.classList.toggle(className);
}


function reset() {
  FILTER_VALS = {};
  render();
  document.querySelector('output').textContent = '-webkit-filter: none;';
  el.className = '';

  var ranges = document.querySelectorAll('input[type="range"]');
  for (var i = 0, r; r = ranges[i]; i++) {
    r.value = r.min;
  }
}

function set(filter, value) {
  FILTER_VALS[filter] = typeof value == 'number' ? Math.round(value * 10) / 10 : value;
  if (value == 0 || (typeof value == 'string' && value.indexOf('0') == 0)) {
    delete FILTER_VALS[filter];
  }
  render();
}

function render() {
  var vals = [];
  Object.keys(FILTER_VALS).sort().forEach(function(key, i) {
    vals.push(key + '(' + FILTER_VALS[key] + ')');
  });
  var val = vals.join(' ');
  el.style.webkitFilter = val;
  document.querySelector('output').textContent = '-webkit-filter: ' + (val ? val : 'none') + ';';
}



window.addEventListener('keydown', function(e) {
  if (e.keyCode == 27) { // ESC
    document.querySelector('details').open = false;
  }
}, false);

 function sizePic() {
    var size = $("#size").val();
    $(".upload__img").css('zoom', size);
  }


