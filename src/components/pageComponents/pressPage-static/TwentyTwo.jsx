import { PressContentsTwentyTwo } from "@/utils/Contents/press";
import React from "react";

function TwentyTwo() {
  return (
    <div>
      <div className="media_tab_grid">
        {PressContentsTwentyTwo.length > 0 && PressContentsTwentyTwo.map((e, index) => {
            return (
                <div key={index} className="media_tab_item">
                <div className="img" style={{ overflow: "hidden" }}>
                  <img src={e?.image} alt="media image" />
                </div>
                <div className="content py-4">
                  <p>
                    {e?.header}
                  </p>
                  <p>
                   {e?.shortDescription}
                  </p>
                  <div className="text-center">
                    <a
                      href={e?.link}
                      className="media_btn"
                    >
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            )
    
        })}
      </div>
    </div>
  );
}

export default TwentyTwo;
