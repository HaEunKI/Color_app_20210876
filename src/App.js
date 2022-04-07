import React from "react";

function Color({ name, picture }){
  return (
    <div>
      <h2>My favorite color is {name}!</h2>
      <img src={picture} />
    </div>
  );
}

const colorILike = [
  {
    name:'AliceBlue',
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.CE-46BDAfT77qaGSwn2RjwHaDT%26pid%3DApi&f=1',  
  },
  {
    name:'Aqua',
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.reDDF7il0CY_TE1Pvk6n1wHaEo%26pid%3DApi&f=1',
  },
  {
    name:'Bisque',
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.j5t4WGlcO--hwzfzYY7FrgHaEo%26pid%3DApi&f=1',
  },
  {
    name:'Indigo',
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0yy8ucSz2xWb2PfniXug2wHaEK%26pid%3DApi&f=1',
  },
  {
    name:'HoneyDew',
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.EjxsWBZ7Lfz98wD_RXDsTwHaE8%26pid%3DApi&f=1'
  },
];

function App() {
  return (
    <div>
      {colorILike.map(palette => (
        <Color name={palette.name} picture={palette.image} />
      ))}
    </div>
  );
}

export default App;
