const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

    function show(x){
        let view = x.forEach((e)=>{
            let container = document.getElementById("container");
            container.style.display = "flex";
            container.style.alignItems = "center";
            container.style.justifyContent = "center";
            container.style.flexWrap = "wrap";
            container.style.minHeight = "100%";
            let divcardbig = document.createElement("div");
            divcardbig.setAttribute("class","card");
            divcardbig.style.backgroundImage = "url('card-pattern.png')";
            divcardbig.style.backgroundSize = "cover";
            divcardbig.style.backgroundColor = "lightblue";
            divcardbig.style.width = "15rem";
            divcardbig.style.margin = "10px";
            divcardbig.style.border = "thin solid white";
            divcardbig.style.borderRadius = "5%";
            divcardbig.style.justifyContent = "center";
            container.append(divcardbig);
            console.log(container);
            let img = document.createElement("img");
            img.setAttribute("src",e.image);
            img.style.width = "100%";
            img.setAttribute("alt","robotface");
            img.style.borderRadius = "50%";
            img.style.backgroundColor = "darkblue";
            let divcardsmall = document.createElement("div");
            divcardsmall.setAttribute("class","card-body");
            let title = document.createElement("h5");
            title.setAttribute("class","card-title");
            title.innerText = e.name;
            let text = document.createElement("p");
            text.setAttribute("class","card-text");
            text.innerText = e.email;
            divcardsmall.append(img,title,text);
            divcardbig.append(divcardsmall);
        })
        return view;
    }

    // show(robots);

    
    let form = document.forms[0];


    function search(e){
            e.preventDefault();
            let inp = form.elements['robots'].value;
            // let inp = "Pat";
            let views = robots.filter(elem =>elem.name.includes(inp));
            show(views);
        }

    form.addEventListener("input", function(e){search(e)});

    // function getUserComments(e){
    //     e.preventDefault()
    //     console.log(e);
    //     return e;
    //   }

    // let btn = document.querySelector("button");
    // btn.addEventListener("submit",search(robots));
    