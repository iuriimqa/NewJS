const h1 = document.querySelector("h1");

const getdata = async () => {
  try {
    const res = await fetch("http://localhost:3021/users/");
    const data = await res.json();
    render(data);
  } catch (err) {
    console.log(err);
  }
};

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div>
        ${item.name} ${item.email}</div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
};
getdata();
