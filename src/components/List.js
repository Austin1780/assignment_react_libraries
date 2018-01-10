import React, { Component } from "react";

import peopleImg from "../people.jpg";
import filmsImg from "../films.jpg";
import aliensImg from "../aliens.jpg";
import planetsImg from "../planets.png";
import starshipsImg from "../starships.jpeg";
import vehiclesImg from "../vehicles.jpg";

import {
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Jumbotron
} from "reactstrap";

class List extends Component {
  constructor(props) {
    super();
  }

  render() {
    let objArr = this.props[this.props.category];
    //^^^the array of films/people/etc.

    let upperfirst = string => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    let pageTitle = upperfirst(this.props.category);

    let imgSrc = "";

    switch (pageTitle) {
      case "People":
        imgSrc = peopleImg;
        break;
      case "Films":
        imgSrc = filmsImg;
        break;
      case "Species":
        imgSrc = aliensImg;
        break;
      case "Planets":
        imgSrc = planetsImg;
        break;
      case "Starships":
        imgSrc = starshipsImg;
        break;
      case "Vehicles":
        imgSrc = vehiclesImg;
        break;
      default:
        break;
    }

    return (
      <div style={{ marginLeft: "180px", marginTop: "30px" }}>
        {objArr.length > 0 ? (
          <div className="center-content">
            <h1 className="title-panel"> {pageTitle}</h1>
            <img src={imgSrc} alt="category" />
            <Table className="data-table">
              <tbody>
                {Object.keys(objArr[0]).includes("title")
                  ? this.props[this.props.category].map(item => {
                      return (
                        <tr id="row">
                          <td>{item["title"]}</td>
                        </tr>
                      );
                    })
                  : this.props[this.props.category].map(item => {
                      return (
                        <tr id="row">
                          <td>{item["name"]}</td>
                        </tr>
                      );
                    })}
              </tbody>
            </Table>
            {this.props.page === 1 ? null : (
              <input
                type="button"
                className="btn btn-primary btn-lg"
                placeholder="back"
                onClick={this.props.changePage}
                value={this.props.page - 1}
              />
            )}
            <input
              type="button"
              className="btn btn-primary btn-lg"
              placeholder="next"
              onClick={this.props.changePage}
              value={this.props.page + 1}
            />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default List;
