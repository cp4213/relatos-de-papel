// src/components/form/PasswordField.jsx
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import './forms.css';

function PasswordField({
                           value,
                           onChange,
                           error = null,
                           showToggle = true,
                           label,
                           id = "password", // ← Mejor usar prop id
                           ...props
                       }) {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="password-field mb-3 position-relative">
            <label htmlFor={id} className="form-label">
                {label || t('auth.password')}
                <span className="text-danger ms-1">*</span>
            </label>

            <input
                id={id}
                type={showPassword ? 'text' : 'password'}
                name="password"
                className={`form-control password-field-input ${error ? 'is-invalid' : ''}`}
                required
                value={value}
                onChange={onChange}
                placeholder=""
                {...props}
            />

            {showToggle && (
                <button
                    type="button"
                    className="password-toggle-btn" // ← Clase CSS en lugar de style inline
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? t('accessibility.hidePassword') : t('accessibility.showPassword')}
                >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
            )}

            {error && (
                <div className="invalid-feedback">
                    {error}
                </div>
            )}
        </div>
    );
}

export default PasswordField;