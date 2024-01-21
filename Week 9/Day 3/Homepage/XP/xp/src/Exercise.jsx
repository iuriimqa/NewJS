import UserFavAnimals from "./UserFavoriteAnimals";


const Exercise = (props) => {
    const myelement = <h1>I Love JSX!</h1>;
    const sum = 5 + 5;
    const user = {
        firstName: 'Bob',
        lastName: 'Dylan',
        favAnimals : ['Horse','Turtle','Elephant','Monkey']
      };
    return(
        <>
        {/* // Exercise 1
        // 1
        // <p>Hello World</p>
        // 2
        // myelement
        // 3
        // <h2>React is {sum} times better with JSX</h2>
        // Exercise 2 */}
        {/* 1 */}
        {/* <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3> */}
        {/* 2 */}
        {/* <UserFavAnimals animals = {user.favAnimals}/> */}
        {/* 3 */}
        {/* <UserFavAnimals animals = {user.favAnimals}/>
         */}

        </>
    )
}

// export default Exercise