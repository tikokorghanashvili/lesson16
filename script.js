// xml http requist
function usersemail(page){
    let requist=new XMLHttpRequest();
    requist.addeventlistener('load',render);
    requist.addeventlistener('error',renderr);

    requist.open('GET', 'https://reqres.in/api/users?page='+ page);
    requist.send();
}
let currentPage=1;
let totalPagesApi;

function render(){
    let response=this.responsetext;
    let responsedata=JSON.parse(response);

    var fragment=document.createDocumentFragment();
    responsedata.data.forEach(item=>{
        let img=document.createElement('img');
        img.src=item.avatar;
        img.classList.add('class','img-block');
        let li=document.createElement('li');

        let pemail=document.createElement('p');
        pemail.textContent=item.email;
        pemail.classList.add('class','pemaill');
        li.classList.add('class','list');

        li.appendChild(img);
        li.appendChild(pemail);
        fragment.appendChild(li);
        }
    )

    document.getElementById('ul-list').innerHTML=' ';
    document.getElementById('ul-list').appendChild(fragment);
    totalPagesApi=responsedata.total_pages;
}
function errorRender(){
    let error=document.createElement('p');
    error.textContent='server error';
    document.getElementById('section').appendChild(error);
}
document.getElementById('previous').addEventListener('click',function(){
    if (currentPage==1){
        return;
    }
    currentPage -=1;
    usersemail(currentPage);
})
document.getElementById('next').addEventListener('click',function(){
    if (currentPage==totalPagesApi){
        return;
    }
    currentPage+=1;
    usersemail(currentPage);
})

usersemail(currentPage);












