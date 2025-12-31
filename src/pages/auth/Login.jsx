import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import EmailField from '../../components/form/EmailField';
import PasswordField from '../../components/form/PasswordField';
import ForgotPassword from './ForgotPassword'; // Asegúrate de que la ruta sea correcta

export default function Login({ handleLoginSubmit, handleLoginChange, loginData }) {
    const { t } = useTranslation();
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!loginData.email) {
            newErrors.email = t('validation.emailRequired');
        } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
            newErrors.email = t('validation.emailInvalid');
        }

        if (!loginData.password) {
            newErrors.password = t('validation.passwordRequired');
        } else if (loginData.password.length < 6) {
            newErrors.password = t('validation.passwordMinLength');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            handleLoginSubmit(loginData);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <EmailField
                    value={loginData.email}
                    onChange={handleLoginChange}
                    error={errors.email}
                />

                <PasswordField
                    value={loginData.password}
                    onChange={handleLoginChange}
                    error={errors.password}
                    showToggle={true}
                />

                <button type="submit" className="btn btn-dark w-100 mt-3">
                    {t('auth.login')}
                </button>

                <div className="text-center mt-3">
                    <button 
                        type="button" 
                        className="btn btn-link text-decoration-none p-0"
                        onClick={() => setShowModal(true)}
                    >
                        {t('auth.forgotPassword')}
                    </button>
                </div>
            </form>

            {/* Modal de recuperar contraseña */}
            {showModal && (
                <>
                    <div 
                        className="modal-backdrop fade show"
                        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1040 }}
                        onClick={handleCloseModal}
                    ></div>
                    <div 
                        className="modal fade show" 
                        style={{ display: 'block', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1050 }} 
                        tabIndex="-1"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                handleCloseModal();
                            }
                        }}
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <div className="modal-header">
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={handleCloseModal}
                                        aria-label={t('common.close')}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <ForgotPassword onClose={handleCloseModal} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}