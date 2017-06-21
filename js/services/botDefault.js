const defaultBotUser = {
   username:'Bot',
   txtColor:{hex:'#fff'},
   bgColor:{hex:'#7B64FF'},
 };

 const welcomeMes = {
  message_text: "Chào mừng các bạn đến với Color Chatbox<br>Nhập <strong>/help</strong> để xem hướng dẫn",
  user:defaultBotUser,
  type:'welcome'
};
const helpMes = 'Các chức năng của Chatbox:<br><ul>'+
          '<li><strong>/help</strong>: Xem bảng trợ giúp</li>'
          +'<li><strong>/ask [câu hỏi]</strong>: Hỏi đáp yes/no</li>'
          +'<li><strong>/clear</strong>: Dọn dẹp Chatbox</li>'
          +'</ul>';
const helpKeywords = [
'/help','/ask','/me'
];

export {defaultBotUser,welcomeMes,helpMes,helpKeywords};