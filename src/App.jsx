import { useState } from "react";
import InputBlock from "./components/InputBlock";
import exampleData from "./exampleData.json";
import PersonalSection from "./components/PersonalSection";
import EducationSection from "./components/EducationSection";
import EmploymentSection from "./components/EmploymentSection";
import CV from "./components/CV";

export default function App() {

    const [personalData, setPersonalData] = useState(exampleData.personal);
    const [employmentSections, setEmploymentSections] = useState(exampleData.employment_history);
    const [educationSections, setEducationSections] = useState(exampleData.education);
    const [interests, setInterests] = useState(exampleData.interests);

    const updatePersonalData = (key, value) => {
        setPersonalData({...personalData, [key]:value});
    }

    const updateSectionData = (sections, setSections, key, value, arrayId, itemIndex = null) => {
        setSections(sections.map(section => {
            if (section.id === arrayId) {
                if (Array.isArray(section[key])) {
                    if (itemIndex === null) throw Error("No index to change array data");
                    section[key][itemIndex] = value;
                } else {
                    section[key] = value;
                }
            }
            return section;
        }));
    }

    const updateEducationData = (key, value, arrayId, itemIndex = null) => {
        updateSectionData(educationSections, setEducationSections, key, value, arrayId, itemIndex)
    }

    const updateEmploymentData = (key, value, arrayId, itemIndex = null) => {
        updateSectionData(employmentSections, setEmploymentSections, key, value, arrayId, itemIndex)
    }

    const addEducationItem = () => {
        setEducationSections([
            ...educationSections, 
            {degree: "", university: "", start_date: "", end_date: "", grade: "", id:crypto.randomUUID(), coursework: [], activities: ""}
        ]);
    }

    const addEmploymentItem = () => {
        setEmploymentSections([
            ...employmentSections, 
            {job_title: "", company: "", start_date: "", end_date: "", location: "", id:crypto.randomUUID(), responsibilities: []}
        ]);
    }

    const addEmploymentArrayItem = (key, arrayId) => {
        setEmploymentSections(employmentSections.map(section => {
            if (section.id === arrayId) {
                section[key] = section[key].concat("");
            }
            return section;
        }))
    }

    const addEducationArrayItem = (key, arrayId) => {
        setEducationSections(educationSections.map(section => {
            if (section.id === arrayId) {
                section[key] = section[key].concat("");
            }
            return section;
        }))
    }

    const deleteArrayItem = (sections, setSections, key, arrayId, itemId) => {
        setSections(sections.map(section => {
            if (section.id === arrayId) {
                section[key].splice(itemId, 1);
            }
            return section;
        }))
    }

    const deleteEmploymentArrayItem = (key, arrayId, itemId) => {
        deleteArrayItem(employmentSections, setEmploymentSections, key, arrayId, itemId);
    }

    const deleteEducationArrayItem = (key, arrayId, itemId) => {
        deleteArrayItem(educationSections, setEducationSections, key, arrayId, itemId);
    }

    const deleteEducationItem = (arrayId) => {
        setEducationSections(educationSections.filter(e => e.id != arrayId));
    }

    const deleteEmploymentItem = (arrayId) => {
        setEmploymentSections(employmentSections.filter(e => e.id != arrayId));
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
                title="Professional Experience"
                data={employmentSections} 
                updateData={updateEmploymentData} 
                Section={EmploymentSection}
                addNew={addEmploymentItem}
                deleteItem = {deleteEmploymentItem}
                addArrayItem = {addEmploymentArrayItem}
                deleteArrayItem = {deleteEmploymentArrayItem}
            />
            <InputBlock
                title="Education"
                data={educationSections} 
                updateData={updateEducationData} 
                Section={EducationSection}
                addNew={addEducationItem}
                deleteItem = {deleteEducationItem}
                addArrayItem = {addEducationArrayItem}
                deleteArrayItem = {deleteEducationArrayItem}
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