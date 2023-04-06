let elForm = document.querySelector("#form")
let elSelect = document.querySelector("#select")


elForm.addEventListener("submit",evt=>{
  evt.preventDefault()
  let{userId,title,body}= evt.target.elements
  createPosts(userId.value,title.value,body.value)
  delFunc (userId.value,title.value,body.value)
})

async function createPosts(userId,title,body){
  let post = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body:body ,
      userId: userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => json);
  console.log(post);
}

async function  delFunc (userId,title,body){
 await  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });
  
}





async function renderFunc(element){
  let data = await fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => json)
  .catch((error)=>console.log(error));
  console.log(data);
  data.forEach(user => {
    let option = document.createElement("option")
    option.textContent = user.name
    option.value = user.id
    
    element.appendChild(option)
  });
}

renderFunc(elSelect)



