import React from "react";
import styles from "./service.module.scss";
export default function Service({ icon, img, title }) {
  return (
    <div className="col-sm-4 mb-5">
      <div className="services d-flex justify-content-around">
        <div className={styles.service_card}>
          <img src={img} alt="welcome1" />
          <h5>
            <span>{icon}</span> {title}
          </h5>
          <button type="button" class="btn btn-primary btn-sm">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
