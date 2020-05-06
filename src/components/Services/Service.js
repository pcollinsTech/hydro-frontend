import React from "react";

export default function Service({ img, title }) {
  return (
    <div className="col-sm-4 service_card">
      <img width="250" height="250" src={img} alt="welcome1" />
      <span>{title}</span>
      <button type="button" class="btn btn-primary btn-sm">
        View
      </button>
    </div>
  );
}
