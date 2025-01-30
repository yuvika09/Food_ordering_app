import React, { useState } from "react";

const Section = ({ title, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="border border-black p-2 m-6">
      <div className="font-bold">{title}</div>
      {!isVisible ? (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
          className="text-sm underline text-blue-500"
        >
          Show
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(false);
          }}
          className="text-sm underline text-blue-500"
        >
          Hide
        </button>
      )}

      {isVisible ? (
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          itaque ratione pariatur error, ab reiciendis ipsa molestiae quia
          officiis qui nihil nobis eum exercitationem ipsum consectetur
          quisquam,impedit tempore nostrum.
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const Instamart = () => {
  // const [sectionConfig, setSectionConfig] = useState({
  //   showServices: true,
  //   showAbout: false,
  //   showCareer: true,
  // });
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <>
      <Section
        title={"Services"}
        isVisible={visibleSection === "services"}
        setIsVisible={() => setVisibleSection("services")}
      />
      <Section
        title={"About"}
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />
      <Section
        title={"Career"}
        isVisible={visibleSection === "career"}
        setIsVisible={() => setVisibleSection("career")}
      />
    </>
  );
};

export default Instamart;
