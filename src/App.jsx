import { useState } from "react";
import InputBlock from "./components/InputBlock";
import exampleData from "./exampleData.json";
import PersonalSection from "./components/PersonalSection";
import EducationSection from "./components/EducationSection";
import CV from "./components/CV";

export default function App() {

    const [personalData, setPersonalData] = useState(exampleData.personal);
    const [employmentSections, setEmploymentSections] = useState(exampleData.employment_history);
    const [educationSections, setEducationSections] = useState(exampleData.education);
    const [interests, setInterests] = useState(exampleData.interests);

    const updatePersonalData = (key, value) => {
        setPersonalData({...personalData, [key]:value});
    }

    const updateSectionData = (sections, setSections, key, value, arrayId) {
        setSections(sections.map(section => {
            if (section.id === arrayId) section[key] = value;
            return section;
        }));
    }

    const updateEducationData = (key, value, arrayId) => {
        setEducationSections(educationSections.map(education => {
            if (education.id === arrayId) education[key] = value;
            return education;
        }));
    }

    const addEducationItem = () => {
        setEducationSections([
            ...educationSections, 
            {degree: "", university: "", start_date: "", end_date: "", grade: "", id:crypto.randomUUID(), coursework: [], activities: ""}
        ]);
    }

    const deleteEducationItem = (arrayId) => {
        console.log(arrayId)
        setEducationSections(educationSections.filter(e => e.id != arrayId));
    }

    return (
      <div className="app">
          <div className="input-section">
            <InputBlock 
                title="Personal details"
                data={personalData} 
                updateData={updatePersonalData} 
                Section={PersonalSection}
              />
            <InputBlock
                title="Education"
                data={educationSections} 
                updateData={updateEducationData} 
                Section={EducationSection}
                addNew={addEducationItem}
                deleteItem = {deleteEducationItem}
            />
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