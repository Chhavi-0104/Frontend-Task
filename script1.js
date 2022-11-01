function myFunction() {
    fetch("http://127.0.0.1:8000/users")
.then(function (response){
    return response.json();
})
.then(function (data){
        for(var i=0;i<data.length;i++)
        {   
            let divElement = document.createElement('div');
            let divElementText = document.createTextNode("");
            var text=data[i].id+" "+data[i].username+" "+data[i].email+" "+data[i].admin;
            
            let div1=document.createElement('div');
            let div1Text = document.createTextNode(data[i].id);
            div1.style.width="100px";
            div1.appendChild(div1Text);
            divElement.appendChild(div1);

            let div2=document.createElement('div');
            let div2Text = document.createTextNode(data[i].username);
            div2.style.width="100px";
            div2.appendChild(div2Text);
            divElement.appendChild(div2);

            let div3=document.createElement('div');
            let div3Text = document.createTextNode(data[i].email);
            div3.style.width="200px";
            div3.appendChild(div3Text);
            divElement.appendChild(div3);

            let div4=document.createElement('div');
            let div4Text = document.createTextNode(data[i].admin);
            div4.style.width="100px";
            div4.appendChild(div4Text);
            divElement.appendChild(div4);

            divElement.style.display="flex";
            divElement.style.justifyContent="center";

            divElement.appendChild(divElementText);
            document.body.appendChild(divElement);
            
        }
     })
     .catch(function(err){
        console.log(err);
     })
    }

