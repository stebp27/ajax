(function() {

    let b = document.querySelector("button");
    b = document.addEventListener("click", LoadDoc);

    function LoadDoc(){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200)
            {
                let objects = JSON.parse(this.responseText);

                let arrayUsers;

                let i;

                for(i = 0; i < objects.lenght; i++)
                {
                    arrayUsers[i] = [objects[i].id, objects[i].name, objects[i].username, objects[i].email, objects[i].address.street, objects[i].address.suite,
                    objects[i].address.city, objects[i].address.zipcode, objects[i].address.geo.lat, objects[i].address.geo.lng
                    , objects[i].phone, objects[i].website, objects[i].company.name, objects[i].company.catchPhrase, objects[i].company.bs]
                }

                for(i = 0; i < objects.lenght; i++)
                {
                array.forEach(element => {

                    console.log(element);
                    
                
            });

                
                /*document.getElementById("text").innerHTML = obj.id + ", " + obj.name + ", " + obj.username + ", " + obj.email
                + ", " + obj.address.street + ", " + obj.address.suite + ", " + obj.address.city + ", " + obj.address.zipcode + ", " + obj.address.geo.lat + ", " + obj.address.geo.lng
                + ", " + obj.phone + ", " + obj.website + ", " + obj.company.name + ", " + obj.company.catchPhrase + ", " + obj.company.bs;*/

                //console.log(this.responseText);

            }
        };
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
        xhttp.send();
    }
})();