import React from "react";
import cssModule from "./loading.module.css";

const Loading = () => {
  return (
    <div className={cssModule['loading-spinner']}>
      <div className={cssModule.spinner}>
        <p>Cargando...</p>
      </div>
    </div>
  );
};

export default Loading;
