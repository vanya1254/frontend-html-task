import "./sidebar.scss";
import React, { createRef } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClosed: false,
    };
  }
  sidebarRef = createRef();

  toggleSidebar = () => {
    this.setState((state) => ({ isClosed: !state.isClosed }));
  };

  goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  render() {
    const { isClosed } = this.state;
    const containerClassnames = classnames("sidebar", { closed: isClosed });

    return (
      <div ref={this.sidebarRef} className={containerClassnames}>
        <div className="sidebar__top">
          <img className="logo" src={logo} alt="TensorFlow logo" />
          <span className="logo-label">TensorFlow</span>
          <button onClick={this.toggleSidebar}>
            <FontAwesomeIcon icon={!isClosed ? "angle-left" : "angle-right"} />
          </button>
        </div>

        <div className="sidebar__mid">
          {routes.map((route) => (
            <div
              className="sidebar__mid__row"
              key={route.title}
              onClick={() => this.goToRoute(route.path)}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </div>
          ))}
        </div>

        <div className="sidebar__bottom">
          {bottomRoutes.map((route) => (
            <div
              className="sidebar__bottom__row"
              key={route.title}
              onClick={() => this.goToRoute(route.path)}
            >
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
