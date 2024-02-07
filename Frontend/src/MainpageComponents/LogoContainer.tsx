import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./LogoContainer.css";

type LogoContainerType = {
  group7114?: string;
  trustedByThousands?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const LogoContainer: FunctionComponent<LogoContainerType> = ({
  group7114,
  trustedByThousands,
  propLeft,
  propWidth,
  propHeight,
}) => {
  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const trustedByThousandsStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="logo-container">
      <div className="search-icon">
        <div className="search-input">
          <div className="search-button" />
          <img
            className="search-input-child"
            loading="eager"
            alt=""
            src={group7114}
            style={groupIconStyle}
          />
        </div>
      </div>
      <div className="filter-menu">
        <div className="trusted-by-thousands" style={trustedByThousandsStyle}>
          {trustedByThousands}
        </div>
        <div className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque `}</div>
      </div>
    </div>
  );
};

export default LogoContainer;
