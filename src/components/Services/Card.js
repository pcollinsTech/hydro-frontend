import React from "react";
import styles from "./service.module.scss";
import { Link } from "react-router-dom";
import "./service.module.scss";
export default function Card({ type, activity }) {
  const { icon, img, title, slug, listItems, price, details } = activity;
  return (
    <div className="col-sm-4 mb-5">
      <div className="services d-flex justify-content-around">
        <div className={styles.service_card}>
          <img src={img} alt="welcome1" />
          <h5>
            <span>{icon}</span> {title}
          </h5>
          {listItems && (
            <ul>
              {listItems.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          )}
          {type === "home" && (
            <Link to={slug}>
              <button type="button" class="btn btn-primary btn-sm">
                View
              </button>
            </Link>
          )}
          <div className="stay-button">
            {type === "stay" && (
              <Link to={slug}>
                <button type="button" class="btn btn-primary btn-sm">
                  {price}
                  <span className="divider">|</span>
                  {details}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
