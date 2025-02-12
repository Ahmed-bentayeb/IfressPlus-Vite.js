import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
    
        // Validation des champs
        if (!formData.name || !formData.email || !formData.message) {
            setError('Tous les champs sont obligatoires.');
            return;
        }
    
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError('Veuillez entrer une adresse email valide.');
            return;
        }
    
        setError(''); // Réinitialise les erreurs
    
        // Paramètres EmailJS
        const emailParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };
    
        try {
            const response = await emailjs.send(
                'service_ifress', // Remplace par ton service ID EmailJS
                'template_ifress', // Remplace par ton template ID EmailJS
                emailParams,
                'Nmrd2d06V35Izp4LA' // Remplace par ta clé publique EmailJS
            );
    
            if (response.status === 200) {
                setSuccess('Votre message a été envoyé avec succès.');
                setFormData({ name: '', email: '', message: '' }); // Réinitialise le formulaire
            } else {
                setError('Une erreur est survenue. Veuillez réessayer.');
            }
        } catch (err) {
            console.error("Erreur EmailJS :", err);
            setError('Impossible d\'envoyer votre message. Vérifiez votre connexion.');
        }
    };

    return (
        <section className="contact">
            <div className="contact-content">
                <h1 className="contact-title">Contactez-nous</h1>
                <p className="contact-description">
                    Si vous avez des questions ou souhaitez en savoir plus sur nos solutions modulaires, n'hésitez pas à nous contacter.
                </p>

                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}

                {/* Formulaire de contact */}
                <div className="contact-form">
                    <h2>Envoyez-nous un message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Votre nom"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Votre email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Votre message"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">Envoyer</button>
                    </form>
                </div>

                <div className="contact-container">
                    {/* Section des coordonnées */}
                    <div className="contact-info">
                        <h2>Nos coordonnées</h2>
                        <p><strong>Adresse :</strong> Siège Social: 06, Rue Berlioz Alger <br />Centre Alger - Algérie</p>
                        <p><strong>Téléphone :</strong> +213 561 66 41 99</p>
                        <p><strong>Télephone Fixe :</strong> +213 23 49 26 88</p>
                        <p><strong>Email :</strong> info@ifress-dz.com</p>
                    </div>

                    {/* Section de la carte de localisation */}
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1597.9845235669022!2d3.057956!3d36.77131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb2f62680466b%3A0x7a1c022813b158aa!2sEsc.%20Merouane%20ABBAS%2C%20Alger%20Centre%2016000%2C%20Alg%C3%A9rie!5e0!3m2!1sfr!2sus!4v1738000109955!5m2!1sfr!2sus"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localisation de l'entreprise"
                            className="google-map-iframe"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;