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


  

let json = {}
let csv = ''

const sendData = (json) => {
    sendHttpRequest('POST', 'http://127.0.0.1:3000/json', json)
      .then(responseData => {
        csv = responseData
        console.log(csv)
        csvRespond.innerHTML = csv
      })
      .catch(err => {
        console.log(err)
      })
  }

const handeChange = (e) => {
    json = e.target.value
    console.log(json)
    // create(json)
    

}

const handleSubmit = (e) => {
    e.preventDefault()
    sendData(json)
}






jsonText.addEventListener('change' , handeChange )
submitJson.addEventListener('click' , handleSubmit)




});

