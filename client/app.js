addEventListener('DOMContentLoaded', () => {
    console.log('works');
const fromjason = document.getElementById('jason');
const subthejason = document.getElementById('sendform');
const transToCSV = document.getElementById('CSV');

const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
  
      xhr.responseType = 'json';
  
      if (data) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }
  
      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      }
  
      xhr.onerror = () => {
        reject('Something went wrong!');
      }
  
      xhr.send(data);
    })
    return promise
  }


  

let obj = {}


const sendData = (param) => {
    sendHttpRequest('POST', 'http://127.0.0.1:3000/Jasontocvs', param)
      .then(responseData => {
        console.log(responseData)
      })
      .catch(err => {
        console.log(err)
      })
  }

const change = (e) => {
    obj = e.target.value
    console.log(obj)
    

}

const submit = (e) => {
    e.preventDefault()
    sendData(obj)
}






fromjason.addEventListener('change' , change )
subthejason.addEventListener('click' , submit)




});

