$.Velocity.Sequences.bubble = function (element, options) {
    var duration = options.duration || 750;
    $.Velocity.animate(element,
        { 
            scale: 0,
            opacity: 1,
            scale: 1,
        }, { 
             Delay is relative to user-adjustable duration. 
            delay: 300,
            drag: true,
            duration: duration,
            loop: 1,
            easing: "spring",
        });
};

$(".work-grid").velocity("bubble", { duration: 800 });

// This demo uses drag.
setInterval(function() {
  $(".work-grid")
      .velocity("transition.bounceUpIn", { drag: true })
      .delay(50ms)
}, 2000);

$(".work-grid").velocity({delay: 300}).velocity({ scale: 0}, 100, [ 250, 15 ]).velocity({opacity: 1}, 100).velocity({ scale: 1 }, 800, [ 260, 13 ]);