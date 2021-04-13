import React, { Component } from "react";
import ListOfPlants from "../../components/ListOfPlants/ListOfPlants";
import StatusBar from "../../components/StatusBar/StatusBar";
// import axios from "axios";

let clearTimeoutVariable;
export default class Home extends Component {
  state = {
    plantInfo: [],
  };
  componentDidMount() {
    this.setState({
      plantInfo: [
        {
          timestamp: 1618274087486,
          plantName: "Name1",
          id: 1,
          plantStatus: "Water",
        },
        {
          timestamp: 1618274087486,
          plantName: "Name2",
          id: 2,
          plantStatus: "Must Water",
        },
        {
          timestamp: 1618252487486,
          plantName: "Name3",
          id: 3,
          plantStatus: "Must Water",
        },
        {
          timestamp: 1618274087486,
          plantName: "Name4",
          id: 4,
          plantStatus: "Must Water",
        },
        {
          timestamp: 1618274087486,
          plantName: "Name5",
          id: 5,
          plantStatus: "Must Water",
        },
      ],
    });
    // axios
    //   .get("https://localhost:5001/api/SVPlants")
    //   .then((res) =>
    //     this.setState({
    //       plantInfo: res.data,
    //     })
    //   )
    //   .catch((err) => console.error(err));
  }
  //////////////////////////////////////
  // SHOULD ALSO ADD AXIOS.PUT
  //////////////////////////////////////
  buttonClicks = (time, id, status) => {
    const time_subtraction = Date.now() - time;
    // do an enumerate for the status options
    if (time_subtraction < 30000 && status === "Just Watered") {
      return null;
    } else if (status === "Must Water" || status === "Water") {
      this.setState({
        plantInfo: this.state.plantInfo.map((el) =>
          el.id === id
            ? {
                id: el.id,
                plantName: el.plantName,
                timestamp: Date.now(),
                plantStatus: "Watering",
              }
            : el
        ),
      });
      const tenSecondInterval = () => {
        this.setState({
          plantInfo: this.state.plantInfo.map((el) =>
            el.id === id
              ? {
                  id: el.id,
                  plantName: el.plantName,
                  timestamp: Date.now(),
                  plantStatus: "Just Watered",
                }
              : el
          ),
        });

        const toSetState = () => {
          this.setState({
            plantInfo: this.state.plantInfo.map((el) =>
              el.id === id
                ? {
                    id: el.id,
                    plantName: el.plantName,
                    timestamp: Date.now(),
                    plantStatus: "Water",
                  }
                : el
            ),
          });
        };

        setTimeout(toSetState, 30000);
      };
      clearTimeoutVariable = setTimeout(tenSecondInterval, 10000);
    } else if (time_subtraction < 10000 && status === "Watering") {
      clearTimeout(clearTimeoutVariable);
      this.setState({
        plantInfo: this.state.plantInfo.map((el) =>
          el.id === id
            ? {
                id: el.id,
                plantName: el.plantName,
                timestamp: Date.now(),
                plantStatus: "Just Watered",
              }
            : el
        ),
      });

      const toSetState = () => {
        this.setState({
          plantInfo: this.state.plantInfo.map((el) =>
            el.id === id
              ? {
                  id: el.id,
                  plantName: el.plantName,
                  timestamp: Date.now(),
                  plantStatus: "Water",
                }
              : el
          ),
        });
      };
      setTimeout(toSetState, 30000);
    } else {
      this.setState({
        plantInfo: this.state.plantInfo.map((el) =>
          el.id === id
            ? {
                id: el.id,
                plantName: el.plantName,
                timestamp: Date.now(),
                plantStatus: "Watering",
              }
            : el
        ),
      });
    }
  };

  render() {
    return (
      <div>
        <StatusBar />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {this.state.plantInfo.map((plant) => (
            <div key={plant.id}>
              <ListOfPlants
                couler={this.state.couler}
                buttonLook={this.buttonLook}
                buttonClicks={this.buttonClicks}
                plant={plant}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
