import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div>
      <section className="hero is-primary is-fullheight">
        <Navbar />
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1 has-text-white">
              Inventory Management Dashboard
            </h1>
            <h2 className="subtitle is-size-3 has-text-white">
              Explore the Cool Features
            </h2>

            {/* Modern Search Bar */}
            <div className="field has-addons is-centered mt-5">
              <p className="control is-expanded">
                <input
                  className="input is-medium is-rounded"
                  type="text"
                  placeholder="Search..."
                />
              </p>
              <p className="control">
                <button className="button is-info is-medium is-rounded">
                  <span className="icon is-small">
                    <i className="fas fa-search"></i>
                  </span>
                  <span>Search</span>
                </button>
              </p>
            </div>

            <div className="columns is-centered mt-5">
              <div className="column is-two-thirds">
                {/* Gunakan Link dari React Router */}
                <Link to="/product">
                  <div className="box has-background-grey-lighter has-text-dark">
                    <p className="title">Inventory Status</p>
                    <p className="subtitle">View and manage your inventory</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* CD Playstation Section */}
            <div className="columns is-centered mt-5">
              <div className="column is-two-thirds">
                <div className="box has-background-grey-lighter has-text-dark">
                  <p className="title">CD Playstation Info</p>
                  <p className="subtitle">Explore CD Playstation details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Dashboard;
