const fieldData = {
    'personal': {
        'title': "Personal Details",
        'fields': [
            {'title': "Name", "value": "James Smith", "inputType": "text", "placeholder": "Enter first and last name"},
            {'title': "Email", "value": "james_smith@hotmail.com", "inputType": "text", "placeholder": "Enter email"},
            {'title': "Phone", "value": "+447731 126 132", "inputType": "text", "placeholder": "Enter mobile number"},
            {"title": "Address", "value": "London, UK", "inputType": "text", "placeholder": "Enter address"}
        ]        
    },
    'work': {
        'title': "Professional experience",
        'fields': [
            {'title': "Company", "value": "Mycompany", "inputType": "text", "placeholder": "Enter company"},
            {'title': "Role", "value": "Janitor", "inputType": "text", "placeholder": "Enter role"},
            {'title': "Description", "value": "+447731 126 132", "inputType": "textarea", "placeholder": "Enter mobile number"},
        ]        
    },
}

export default fieldData;