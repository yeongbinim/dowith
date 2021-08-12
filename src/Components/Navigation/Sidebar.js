
import styled from "styled-components";
import React from "react";

const Bar = styled.div`
    height: 100% !important;
    display: flex;
	position:fixed;
    flex-direction: column;
    border-right: 1px solid;
    border-radius: 0;
    border-color: rgba(64, 194, 133, 0.693);
    background-color: rgb(255, 255, 255);
    transition: 0.8s ease;
	z-index:1000;
`;

const Toggle = styled.div`
	height: 50px;
    border-top-right-radius: 10rem;
    border-bottom-right-radius: 9rem;
    width: 10px;
    position: absolute;
    outline: none;
    z-index: 1;
    background-color: rgba(64, 194, 133, 0.693);
    border-color: rgba(64, 194, 133, 0.693);
    border-left: 0;
`;

const Sidebar = ({ width, height, children }) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);
  return (
    <React.Fragment>
      <Bar
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}>
        <Toggle
          onClick={() => toggleMenu()}
          style={{
            transform: `translate(${width}px, 20vh)`
          }}
        ></Toggle>
        <div className="content">{children}</div>
      </Bar>
    </React.Fragment>
  );
};

export default Sidebar;