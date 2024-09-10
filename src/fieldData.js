const fieldData = {
    'personal': {
        'title': "Personal Details",
        'fields': [
            {'title': "Name", "id":"name", "inputType": "text", "placeholder": "Enter first and last name"},
            {'title': "Email", "id": "email", "inputType": "text", "placeholder": "Enter email"},
            {'title': "Phone", "id": "phone", "inputType": "text", "placeholder": "Enter mobile number"},
            {"title": "Address", "id": "address", "inputType": "text", "placeholder": "Enter address"},
            {"title": "Summary", "id": "summary", "inputType": "textarea", "placeholder": "Enter address"}
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