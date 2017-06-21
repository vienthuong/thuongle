  import axios from 'axios';
      var result = {};

export function getAnswer () {
return new Promise((resolve, reject)=>{
        axios.get('https://yesno.wtf/api')
        .then((response) =>{
          result.answer = '<span style="font-weight:bold;">' + _.capitalize(response.data.answer) + '</span>';
          result.img = '<img class="meme-img img-responsive" src="' + response.data.image + '" alt="">';
          resolve(result);
        })
        .catch((error) => {
          result.answer = 'Server tạch' + error;
          reject(error);
        });
      });
}
