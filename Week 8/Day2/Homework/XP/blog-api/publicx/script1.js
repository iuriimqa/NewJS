const getdata = async () => {
    try {
      const res = await fetch(`http://localhost:3021/posts/${idx}`);
      const data = await res.json();
      render(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  const render = (arr) => {
    const html = arr.map((item) => {
        if(item.id == idx){
      return `<div>
          ${item.title} ${item.content}</div>`;
    }});
    document.getElementById("rootid").innerHTML = html.join("");
  };
  getdata();