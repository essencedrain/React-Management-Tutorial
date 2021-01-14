import React from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "961222",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "아라리",
    birthday: "870323",
    gender: "여자",
    job: "회사원",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "나미춘",
    birthday: "890523",
    gender: "여자",
    job: "프로그래머",
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
