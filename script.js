// xml http Requist
function getusers(){
    let Requist=newXMLHttprequist();
    Requist.addeventlistener('load',render);

    Requist.open('GET','https://jsonplaceholder.typicode.com/posts');

    Requist.send();
}
function render(){
    let response = this.responseText;
    let responsedata = json.parse(response);

    let ul=document.createElement('ul');
    responsedata.data.forEach(item => {
        let li=document.createComment('li');
        li.textContent=item.email;
    });

    console.log(responsedata);
}
getusers();
