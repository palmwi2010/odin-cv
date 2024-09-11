import Field from "./Field";

function PersonalSection({data, updateData, isEditing}) {

    const {name, address, phone, email, summary} = data;

    return (
        <div className="block-fields">
        <Field
            title="Name"
            inputType="text"
            placeholder="Enter first and second name"
            data={name}
            updateData={updateData}
            isEditing={isEditing}
            dataKey="name"
            key="name"
        />
        <Field
            title="Address"
            key="address"
            inputType="text"
            placeholder="Enter address"
            data={address}
            updateData={updateData}
            isEditing={isEditing}
            dataKey="address"
        />
        <Field
            title="Phone number"
            key="phone"
            inputType="text"
            placeholder="Enter phone number"
            data={phone}
            updateData={updateData}
            isEditing={isEditing}
            dataKey="phone"
        />
        <Field
            title="Email address"
            key="email"
            inputType="text"
            placeholder="Enter email"
            data={email}
            updateData={updateData}
            isEditing={isEditing}
            dataKey="email"
        />
        <Field
            title="Professional summary"
            key="summary"
            inputType="textarea"
            placeholder="Enter a professional summary"
            data={summary}
            updateData={updateData}
            isEditing={isEditing}
            dataKey="summary"
        />                                                
        </div>
    )
}

export default PersonalSection;