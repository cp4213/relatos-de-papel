import React from 'react';
import { useTranslation } from "react-i18next";
import EmailField from '../../components/form/EmailField.jsx';
import PasswordField from '../../components/form/PasswordField.jsx';
import CheckboxField from '../../components/form/CheckboxField.jsx';

export default function Register({
                                     handleRegisterSubmit,
                                     handleRegisterChange,
                                     registerData,
                                     errors = {}  // errors como prop
                                 }) {
    const { t } = useTranslation();
    return (
        <form onSubmit={handleRegisterSubmit}>
            {/* Campo de Email */}
            <EmailField
                value={registerData.email}
                onChange={handleRegisterChange}
                error={errors.email}
                label={t('auth.email')}
                placeholder={t('auth.emailPlaceholder')}
            />

            {/* Campo de Password */}
            <PasswordField
                value={registerData.password}
                onChange={handleRegisterChange}
                error={errors.password}
                label={t('auth.password')}
                showToggle={true}
                placeholder=""
            />

            {/* Campo de Confirmar Password */}
            <PasswordField
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                error={errors.confirmPassword}
                label={t('auth.confirmPassword')}
                name="confirmPassword"
                id="confirmPassword"
                placeholder=""
                showToggle={true}
            />

            {/* Checkbox de Términos y Condiciones */}
            <CheckboxField
                name="terms"
                id="terms"
                checked={registerData.terms || false}
                onChange={handleRegisterChange}
                label={t('auth.acceptTerms')}
                error={errors.terms}
                required={true}
            />

            <button type="submit" className="btn btn-dark w-100 mt-4">
                {t('auth.register')}
            </button>
        </form>
    );
}