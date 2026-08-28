import React from "react";

const Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <div className="preloader-box">
        <div className="preloader-title">SYSTEM BOOT</div>
        <div className="preloader-sub">LOADING CHIRAG_DEV.ROM [V2.6]...</div>
        <div className="pixel-loading-bar-wrap">
          <div className="pixel-loading-bar"></div>
        </div>
        <div className="preloader-hint">► INSERT COIN TO PLAY ◄</div>
      </div>
    </div>
  );
};

export default Preloader;
