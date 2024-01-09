const getdata = async () => {
    try {
      const res = await fetch("http://localhost:3021/posts/");
      const data = await res.json();
      render(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  const render = (arr) => {
    const html = arr.map((item) => {
      return `<div>
          <h1>${item.id}</h1><h2>${item.title}</h2><p>${item.content}</p></div>`;
    });
    document.getElementById("rootall").innerHTML = html.join("");
  };
  getdata();