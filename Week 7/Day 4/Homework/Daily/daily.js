const searchData = (e) => {
    e.preventDefault();
    const category = document.getElementById("cat").value;
    console.log(category);
    return category;
}

const fetchingsun = async () => {
    try{ 
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${searchData()}&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
      );
      const data = await res.json();
      console.log(data);
    }catch(err){
        console.log(err);
    }}
    searchData()
    // fetchingsun();