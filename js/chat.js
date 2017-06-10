    // var Message;
    var myScroll;
      myScroll = new IScroll('#wrapper',{
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        useTransition:true,
        bounce:true,
        mouseWheelSpeed:10,
        bounceEasing: {
            style: 'cubic-bezier(0,0,1,1)',
            fn: function (k) { return k; }
        }
      });
       $('.send_message').click(function (e) {
            myScroll.refresh();
            myScroll.scrollTo(0, myScroll.maxScrollY, 0);
        });
        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
                myScroll.refresh();
                myScroll.scrollTo(0, myScroll.maxScrollY, 0);
            }
        });
//     Message = function (arg) {
//         this.text = arg.text, this.message_side = arg.message_side;
//         this.draw = function (_this) {
//             return function () {
//                 var $message;
//                 $message = $($('.message_template').clone().html());
//                 $message.addClass(_this.message_side).find('.text').html(_this.text);
//                 $('.messages').append($message);
//                 return setTimeout(function () {
//                     return $message.addClass('appeared');
//                 }, 0);
//             };
//         }(this);
//         return this;
//     };
//     $(function () {
//         var getMessageText, message_side, sendMessage;
//         message_side = 'right';
//         getMessageText = function () {
//             var $message_input;
//             $message_input = $('.message_input');
//             return $message_input.val();
//         };
//         sendMessage = function (text) {
//             var $messages, message;
//             if (text.trim() === '') {
//                 return;
//             }
//             $('.message_input').val('');
//             $messages = $('.messages');
//             message_side = message_side === 'left' ? 'right' : 'left';
//             message = new Message({
//                 text: text,
//                 message_side: message_side
//             });
//             message.draw();
//             socket.emit('message_sent', text);
//             myScroll.refresh();
//             myScroll.scrollTo(0, myScroll.maxScrollY, 0);
//             return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
//         };
//         $('.send_message').click(function (e) {
//             return sendMessage(getMessageText());
//         });
//         $('.message_input').keyup(function (e) {
//             if (e.which === 13) {
//                 return sendMessage(getMessageText());
//             }
//         });
//         sendMessage('Hello Philip! :)');
//         setTimeout(function () {
//             return sendMessage('Hi Sandy! How are you?');
//         }, 1000);
//         return setTimeout(function () {
//             return sendMessage('I\'m fine, thank you!');
//         }, 2000);
//     });
// }.call(this));
