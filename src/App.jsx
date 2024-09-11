import { useState } from "react";
import InputBlock from "./components/InputBlock";
import exampleData from "./exampleData.json";
import CV from "./components/CV";

export default function App() {

    const [personalData, setPersonalData] = useState(exampleData.personal);
    const [employmentSections, setEmploymentSections] = useState(exampleData.employment_history);
    const [educationSections, setEducationSections] = useState(exampleData.education);
    const [interests, setInterests] = useState(exampleData.interests);

    const updatePersonalData = (key, value) => {
        console.log(key)
        console.log(value)
        setPersonalData({...personalData, [key]:value});
    }

    const [cvData, updateData] = useState(exampleData);
  
    return (
      <div className="app">
          <div className="input-section">
              <InputBlock data={personalData} updateData={updatePersonalData}/>
          </div>
          <CV 
            personalData={personalData}
            employmentSections={employmentSections}
            educationSections={educationSections}
            interests = {interests}
          />
      </div>
    )
  }