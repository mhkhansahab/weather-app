import "./../styles/day-bg.scss";

const daybg = (props) => {
  return (
    <div className="sun-container">
      <div id="container">
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 50 50"
          style={{ "enable-background": "new 0 0 50 50" }}
        >
          <circle id="sunBeam" r="20" cy="25" cx="25">
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="3s"
              repeatCount="indefinite"
            />

            <animate
              attributeName="r"
              attributeType="XML"
              from="12"
              to="20"
              begin="0s"
              dur="3s"
              fill="remove"
              repeatCount="indefinite"
            />
          </circle>

          <circle id="sun" r="13" cy="25" cx="25" />
        </svg>
      </div>
      {props.children}
    </div>
  );
};

export default daybg;
