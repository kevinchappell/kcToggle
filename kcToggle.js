/**
 * kcToggle
 * Description: Replace the default browser checkbox with a styled toggle
 * Version: .1.2
 * Author: Kevin Chappell
 * Dependencies: jQuery Core v1.6+
 */

(function($) {
  'use strict';

  var Toggle = function(element, options) {

    var defaults = {
      theme: 'fresh',
      text: {
        off: 'Off',
        on: 'On'
      }
    };

    var utils = {
      toggleChecked: function(elem) {
        elem.attr('checked', !elem.attr('checked'));
      }
    };

    var opts = $.extend(defaults, options),
      elem = $(element);

    if (elem.attr('checked') === 'checked') {
      elem.wrap('<div class="kcToggle on" />');
    } else {
      elem.wrap('<div class="kcToggle off" />');
    }

    elem.parent('div.kcToggle').append('<div class="kcToggleInner"><div class="kcToggleOn">' + opts.text.on + '</div><div class="kcToggleHandle"></div><div class="kcToggleOff">' + opts.text.off + '</div></div>');

    elem.parent('div.kcToggle').click(function() {
      utils.toggleChecked(elem);
      $(this).toggleClass('on');
      $(this).toggleClass('off');
    });

  };


  $.fn.kcToggle = function(options) {
    var toggle = this;
    return toggle.each(function() {
      var element = $(this);
      if (element.data('kcToggle')) {
        return;
      }
      var kcToggle = new Toggle(this, options);
      element.data('kcToggle', kcToggle);
    });
  };

  $('input[kcToggle]').kcToggle({
    text: {
      off: 'No',
      on: 'Yes'
    }
  });

})(jQuery);
