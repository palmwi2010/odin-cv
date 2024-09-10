import { useState } from "react";
import InputBlock from "./components/InputBlock";
import exampleData from "./exampleData.json";
import CV from "./components/CV";

export default function App() {

    const [cvData, updateData] = useState(exampleData);
  
    return (
      <>
          <div className="inputs">
              <InputBlock fieldName="personal" cvData={cvData} updateData={updateData}/>
          </div>
          <CV data={cvData}/>
      </>
    )
  }