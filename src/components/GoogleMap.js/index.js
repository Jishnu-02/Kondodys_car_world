import React from "react";

import style from "./map.module.css";

const GoogleMap = () => {
  return (
    <div className={style.mapFrame}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1469.2952986666508!2d76.30220004164083!3d10.032712892855754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dba4b7d9fc9%3A0x588950bef5978d8b!2sKondody%20Car%20World!5e0!3m2!1sen!2sin!4v1695384563237!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowfullscreen="true"
        loading="lazy"
        // referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
