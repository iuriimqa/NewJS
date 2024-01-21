import { useState } from "react";

const Voting = () => {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const increase = (item) => {
    setLanguages(prevLanguages => prevLanguages.map(language => 
      language.name === item.name ? { ...language, votes: language.votes + 1 } : language
    ));
  };

  return (
    <>
      <h1>Vote Your Language!</h1>
      <div className="languages">
        {languages.map((language) => (
          <div className="language" key={language.name}>
            <h2 className="count">{language.votes}: {language.name}</h2>
            <button onClick={() => increase(language)}>Click Me</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Voting;
