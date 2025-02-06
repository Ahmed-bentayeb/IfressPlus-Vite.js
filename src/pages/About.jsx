import '../styles/About.css';

function About() {
    return (
        <section className="about">
            <div className="about-content">
                <h1 className="about-title">À propos de SARL IFRESS PLUS</h1>
                <div className="about-wrapper">
                    <div className="about-text">
                        <p className="about-description">
                            <strong>SARL IFRESS PLUS</strong>, fondée en 2004, est une société <strong>Algérienne</strong> leader dans la conception et la fabrication de solutions modulaires pour divers secteurs. 
                            Nous proposons des produits adaptés aux besoins spécifiques de nos clients : bureaux, logements, cantines, vestiaires, entrepôts et bien plus encore. 
                            Nos solutions sont conçues pour être durables, modulaires et flexibles, tout en respectant les normes européennes de qualité.
                        </p>
                        <p className="about-description">
                            Avec notre siège social à <strong>Alger</strong> et notre site de production à Draria, nous avons la capacité de livrer rapidement des projets personnalisés pour répondre aux exigences les plus diverses. 
                            Notre expertise s'étend également aux <u>systèmes bungalows</u>, aux <u>bases de vie fixes</u> , aussi aux <u>travaux industriels</u> et <u>travaux batiments</u>, nous permettant ainsi de répondre à une large gamme de besoins.
                        </p>
                        <p className="about-description">
                            Nous offrons également des possibilités de personnalisation pour chaque module, que ce soit au niveau de l’aspect extérieur, des matériaux ou des spécifications techniques pour des projets uniques, comme des bureaux de vente, des cantines, ou des installations événementielles.
                        </p>
                        <div className="about-values">
                            <h2>Nos valeurs</h2>
                            <ul>
                                <li><i className="fas fa-lightbulb"></i> Innovation continue</li>
                                <li><i className="fas fa-check-circle"></i> Fabrication selon des exigences de qualité strictes</li>
                                <li><i className="fas fa-cogs"></i> Flexibilité des solutions</li>
                                <li><i className="fas fa-leaf"></i> Engagement envers la durabilité</li>
                            </ul>
                        </div>
                        <div className="about-history">
                            <h2>Notre Histoire</h2>
                            <p>
                                Depuis sa création, IFRESS PLUS s'est imposée comme un acteur clé dans la fabrication de solutions modulaires sur mesure en Algérie, contribuant à de nombreux projets industriels et résidentiels à travers le pays.
                            </p>
                        </div>
                    </div>
                    <div className="about-image-container">
                        <img src="/images/ifress3.jpg" alt="IFRESS PLUS" className="about-image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;