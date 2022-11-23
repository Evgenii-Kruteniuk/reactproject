import "./App.css";
import { Component } from "react";
import Person from "../person/person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 123,
          name: "Alvin",
          phone: "235234562",
          career: "IT",
          email: "32552345@yandex.ru",
          meeting: "10.12 - 12:00",
        },
        {
          id: 1234,
          name: "Mark",
          phone: "1224234562",
          career: "IT",
          email: "32552345@yandex.ru",
          meeting: "15.12 - 12:00",
        },
        {
          id: 1523,
          name: "Dave",
          phone: "23526942",
          career: "IT",
          email: "32552345@yandex.ru",
          meeting: "",
        },
        {
          id: 12223,
          name: "Daninl",
          phone: "235278862",
          career: "IT",
          email: "32552345@yandex.ru",
          meeting: "",
        },
      ],
    };
  }

  onValueChange = (id, value) => {
    this.setState(({ data }) => {
      const item = data.find((item) => item.id === id);
      const newItem = { ...item, meeting: value };
      const index = data.indexOf(item);
      const newData = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1, data.length),
      ];
      return {
        data: newData,
      };
    });
  };

  render() {
    const { data } = this.state;
    const personList = data.map((item) => {
      return (
        <Person
          {...item}
          key={item.id}
          onValueChange={(id, value) => this.onValueChange(id, value)}
        />
      );
    });
    return (
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Career</th>
            <th>Email</th>
            <th>Meeting</th>
          </tr>
        </thead>

        <tbody>{personList}</tbody>
      </table>
    );
  }
}
export default App;
