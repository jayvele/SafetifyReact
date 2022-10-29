import Option from "./Option";

function OptionContainer() {
  const optionData = [
    {
      name: "Personal Information",
      description:
        "Add personal information to your account for quick and easy form filling",
      link: "./personalInfo",
    },
    {
      name: "View Personal Information",
      description: "Notification will be sent to them in case of Emergencies",
      link: "./viewInfo",
    },
    {
      name: "Book an Ambulance",
      description:
        "Ambulance can be booked given their availability at the time",
      link: "./bookAmbulance",
    },
    {
      name: "Notify Emergency Contacts",
      description: "Notification will be sent to them in case of Emergencies",
      link: "notify",
    },
  ];

  return (
    <div class="container px-2 py-5" id="hanging-icons">
      {/* <h2 class="pb-2 border-bottom">Options</h2> */}
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
        <Option
          name={optionData[0].name}
          description={optionData[0].description}
          link={optionData[0].link}
        />
        <Option
          name={optionData[1].name}
          description={optionData[1].description}
          link={optionData[1].link}
        />
        <Option
          name={optionData[2].name}
          description={optionData[2].description}
          link={optionData[2].link}
        />
        <Option
          name={optionData[3].name}
          description={optionData[3].description}
          link={optionData[3].link}
        />
      </div>
    </div>
  );
}

export default OptionContainer;
