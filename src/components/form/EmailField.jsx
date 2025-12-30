// components/form/EmailField.jsx
import React from 'react';
import { useTranslation } from "react-i18next";
import InputField from './InputField';

function EmailField({ value, onChange, error = null, label, placeholder, ...props }) {
    const { t } = useTranslation();
    
    return (
        <InputField
            label={label || t('auth.email')}
            type="email"
            name="email"
            value={value}
            onChange={onChange}
            required
            placeholder={placeholder || t('auth.emailPlaceholder')}
            error={error}
            {...props}
        />
    );
}

export default EmailField;