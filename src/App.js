import React from "react";

const types = [
  {
    name: "INFJ",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxNzAzMDZfNjUg/MDAxNDg4NzMxMDkwNDY5.zKY0QN7bFeQlwaxeAFglSd164w3ZXfCYxKHdV7Z9kbsg.9YLCkK-tUk8SN3-wEc963g2eJLvsBZSzXBRpXvvLxuog.JPEG.hooni0789/infj_1.jpg?type=w2",
  },
  {
    name: "ISTP",
    image:
      "https://i0.wp.com/thelstream.com/wp-content/uploads/2016/12/%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%8B%B4_%EC%8A%A4%ED%8A%9C%EC%96%B4%ED%8A%B8.png?resize=263%2C300",
  },
  {
    name: "ENFP",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3gV8GVc8KSA2I3Ah_lwb1EA6MInFf2iQWA&usqp=CAU",
  },
  {
    name: "INTP",
    image:
      "https://i2.wp.com/thelstream.com/wp-content/uploads/2016/12/%EC%95%84%EC%9D%B8%EC%8A%88%ED%83%80%EC%9D%B8.jpg?resize=300%2C154",
  },
];

function Introduce({ name, picture }) {
  return (
    <div>
      <h2>I am {name}.</h2>
      <img src={picture} alt="사진" height="200px" width="200px"></img>
    </div>
  );
}

function App() {
  return (
    <div>
      {types.map((type) => (
        <Introduce name={type.name} picture={type.image} />
      ))}
    </div>
  );
}

export default App;
