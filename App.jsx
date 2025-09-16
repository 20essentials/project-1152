import { createRoot } from "react-dom/client";
import "materialize-css/dist/css/materialize.min.css";
import { useEffect } from "react";

const worldStyles = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundColor: "#6ecccc",
  overflow: "hidden"
};

const creditsStyles = {
  position: "absolute",
  width: "100%",
  margin: "auto",
  bottom: 0,
  marginBottom: "20px",
  fontFamily: "'Open Sans', sans-serif",
  color: "#328685",
  fontSize: "0.7em",
  textTransform: "uppercase",
  textAlign: "center"
};

const App = () => {
  useEffect(() => {
    const scriptList = [
      "assets/three.min.js",
      "assets/TweenMax.min.js",
      "assets/OrbitControls.js",
      "assets/Cat.js"
    ];
    scriptList.forEach(src => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false;
      document.body.appendChild(s);
    });
    const main = document.createElement("script");
    main.type = "text/javascript";
    main.innerHTML = `
      ${initScreenAnd3D.toString()}
      ${handleWindowResize.toString()}
      ${handleMouseMove.toString()}
      ${handleTouchMove.toString()}
      ${createLights.toString()}
      ${createFloor.toString()}
      ${createHero.toString()}
      ${createBall.toString()}
      ${Ball.toString()}
      ${WoolVert.toString()}
      ${WoolVert.prototype.update.toString()}
      ${WoolVert.prototype.attach.toString()}
      ${WoolVert.prototype.add_force.toString()}
      ${Constraint.toString()}
      ${Ball.prototype.update.toString()}
      ${Ball.prototype.receivePower.toString()}
      ${loop.toString()}
      ${getBallPos.toString()}
      ${render.toString()}
      ${init.toString()}
      window.addEventListener("load", init, false);
    `;
    document.body.appendChild(main);
  }, []);

  return (
    <>
      <div id="world" style={worldStyles}></div>
      <div id="credits" style={creditsStyles}>
        <a href="https://threejs.org/">three.js</a> + Cat vs Ball of Wool
      </div>
    </>
  );
};

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(<App />);
