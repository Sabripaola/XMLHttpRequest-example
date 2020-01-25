var esempio = new XMLHttpRequest();

esempio.open("get","https://jsonplaceholder.typicode.com/posts", true, null, null);

esempio.send(null);

esempio.onreadystatechange = function(){
  if(esempio.readyState === 4){
    var response = JSON.parse(esempio.response);
    var pippo = document.getElementById('cards')
    for(var i = 0; i < 20; i++){
      pippo.innerHTML += `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${response[i].title}</h5>
            <p class="card-text">${response[i].body}</p>
          </div>
        </div>
      </div> `
    }
  }
};
