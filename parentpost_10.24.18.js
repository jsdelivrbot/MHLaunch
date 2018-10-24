   (function(window) {

        addEvent(window, 'message', function(message) {

            if (message.data.indexOf('iframeTestPageLoad')>-1) {
                console.log(message.data);
            }				
        });

        function addEvent(el, evt, fn) {
            if (el.addEventListener) {
                el.addEventListener(evt, fn);
            } else if (el.attachEvent) {
                el.attachEvent('on' + evt, function(evt) {
                    fn.call(el, evt);
                });
            } else if (typeof el['on' + evt] === 'undefined' || el['on' + evt] === null) {
                el['on' + evt] = function(evt) {
                    fn.call(el, evt);
                };
            }
        }

    })(window);
