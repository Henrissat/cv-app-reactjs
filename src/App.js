import './App.css';
import styled from "styled-components";


export default function App() {

  return (
    <Wrapper>
      <div class="resume-wrapper">
        <section class="profile sectionPadding">
                <div class="container">
                    <div class="picture-resume-wrapper">
                <div class="picture-resume">
                <span>
                  <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFU49WjFulk2w/profile-displayphoto-shrink_200_200/0/1618215616853?e=1645056000&v=beta&t=gBEXqy20ZyuCKvf3pwhxTKBcO8C9tgDqWUXX6hyt0jo" alt="Mathieu Henrissat" />
                </span>
                <svg version="1.1" viewBox="0 0 350 350">
        
              <defs>
                  <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
                  </filter>
              </defs>
              
              
              <g filter="url(#goo)" >  
              
              <circle id="main_circle" class="st0" cx="171.5" cy="175.6" r="130"/>
              
              <circle id="circle" class="bubble0 st1" cx="171.5" cy="175.6" r="122.7"/>
              <circle id="circle" class="bubble1 st1" cx="171.5" cy="175.6" r="122.7"/>
              <circle id="circle" class="bubble2 st1" cx="171.5" cy="175.6" r="122.7"/>
              <circle id="circle" class="bubble3 st1" cx="171.5" cy="175.6" r="122.7"/>
              <circle id="circle" class="bubble4 st1" cx="171.5" cy="175.6" r="122.7"/>
              <circle id="circle" class="bubble5 st1" cx="171.5" cy="175.6" r="122.7"/>
              <circle id="circle" class="bubble6 st1" cx="171.5" cy="175.6" r="122.7"/>
              <circle id="circle" class="bubble7 st1" cx="171.5" cy="175.6" r="122.7"/>
              <circle id="circle" class="bubble8 st1" cx="171.5" cy="175.6" r="122.7"/>
              <circle id="circle" class="bubble9 st1" cx="171.5" cy="175.6" r="122.7"/>
              <circle id="circle" class="bubble10 st1" cx="171.5" cy="175.6" r="122.7"/>

              </g>  
              </svg>
                  </div>
                      <div class="clearfix"></div>
              </div>
                  <div class="name-wrapper">
                      <h1>HENRISSAT <br/>Mathieu</h1>
                  </div>
                  <div class="clearfix"></div>
                  <div class="contact-info clearfix">
                      <ul class="list-titles">
                          <li>Call</li>
                          <li>Mail</li>
                          <li>Web</li>
                          <li>Home</li>
                      </ul>
                      <ul class="list-content" style={{listStyle:"none"}}>
                          <li>06 61 81 70 07</li>
                          <li>studio.creatic@gmail.com</li>
                          <li><a href="https://www.facebook.com/StudioCreatic">www.facebook.com/StudioCreatic</a></li>
                          <li>Lyon, France</li>
                      </ul>
                  </div>
                  <div class="contact-presentation"> 
                      <p>Après plus de 15 ans d'expérience dans l'univers de la communication visuelle et digitale en tant que
      WebDesigner, je veux aujourd'hui prendre un nouveau tournant. Ayant déjà une bonne expérience dans le
      l'univers du web je souhaite maintenant élargir le champs de compétences de mon autre passion qu'est
      l'informatique. C'est pourquoi aujourd'hui je me tourne vers le métier de développeur.</p>
                  </div>
                  <div class="contact-social clearfix">
                      <ul class="list-titles">
                          <li>Behance</li>
                          <li>GitHub</li>
                          <li>Codepen</li>
                      </ul>
                      <ul class="list-content" style={{listStyle:"none"}}>
                          <li><a href="https://www.behance.net/mathieuhenriss">Compte Behance</a></li>
                          <li><a href="https://github.com/Henrissat">Compte GitHub</a></li>
                          <li><a href="https://codepen.io/creatic">Compte Codepen</a></li>
                      </ul>
                  </div>
                  <br/>
                  <div class="contact-social clearfix"><h2>Education</h2></div>
                  <div class="contact-social clearfix">
                      <ul class="list-titles">
                          <li>Graduate Développeur Full Stack</li>
                          <li>Alternance de WebDesigner</li>
                          <li>BTS Communication visuelle</li>
                          <li>BT Dessinateur maquettiste</li>
                          </ul>
                      <ul class="list-content" style={{listStyle:"none"}}>
                          <li><a href="https://www.studi.com/fr">Studi Academy</a></li>
                          <li><a href="https://www.cti-formation.fr/">CTI Formation</a></li>
                          <li><a href="https://ecoles-conde.com/">Ecole de Condé</a></li>
                          <li><a href="https://ecoles-conde.com/">Ecole de Condé</a></li>
                      </ul>
                  </div>
                </div>
            </section>
        
        <section class="experience sectionPadding">
            <div class="container">
                <h3 class="experience-title">Experience</h3>
            
                <div class="experience-wrapper">
                    <div class="company-wrapper clearfix">
                        <div class="experience-title">LMC Eurocold</div>
                        <div class="time">/ Oct 2018 à Avril 2021</div>
                    </div>
                    
                    <div class="job-wrapper clearfix">
                        <div class="experience-title">Responsable Com Visuelle</div>
                        <div class="company-description">
                            <p>Gestion de toute la communication interne et externe sous la direction du Directeur Général.
                                Gestion de la relation avec des prestataires, maitrise des budgets et des délais
                                de la communication interne et externe. Réflexion et mise en place de la stratégie de communication en collaboration
                                avec l'équipe commercial et la direction tous les 2 mois. Coordination de toute la chaîne de production, du pôle commerciale jusqu'au
                                transport, pour la vente de produits personnalisé
                            </p>
                        </div>
                    </div>
                    
                    <div class="company-wrapper clearfix">
                        <div class="experience-title">NightSwapping [StartUp]</div>
                    <div class="time">/ Mars 2016 - Mai 2018</div>
                    </div>
                    
                    <div class="job-wrapper clearfix">
                        <div class="experience-title">Webdesigner</div>
                    <div class="company-description">
                        <p>Conception et optimisation UX UI pour Web App. A/B Testing Web app et App mobile, multi-support, scénario,
                            test de charge...  SEM. Outils Emailing, suivi et reporting des projets. Gestion et animation des
                            reseaux sociaux. Maintenance et refonte du site.
                        </p>
                    </div>
                    </div>
                    
                    <div class="company-wrapper clearfix">
                        <div class="experience-title">Groupe LDLC</div>
                    <div class="time">/ 2011 - 2015</div>
                    </div> 
                    
                    <div class="job-wrapper clearfix">
                        <div class="experience-title">Webdesigner - Intégrateur</div>
                    <div class="company-description">
                        <p>Création de sites internet de A à Z et de publicités pour le compte de grandes marques
                            (Apple, Microsoft, ASUS...) en cohérence avec les cahiers des charges clients.
                            Découpage et intégration HTML5, CSS3 et Javascript. Mise en ligne des sites sur FTP.
                            Maintenance du site d'Ecommerce LDLC, bannières, Newsletters.
                        </p> 
                    </div>
                    </div>
                    
                        <div class="company-wrapper clearfix">
                        <div class="experience-title">Création d'un Studio de Com</div> 
                    <div class="time">/ Depuis 2009 à aujourd'hui</div>
                    </div> 
                    
                    <div class="job-wrapper clearfix">
                        <div class="experience-title">CréatiC Studio [auto-entrepreneur]</div> 
                    <div class="company-description">
                        <p>Création de sites Wordpress Création de l'UX UI pour des App Mobile. Réalisation d'études de marché,
                            d'études de faisabilité. Stratégie marketing, marketing relationnel et suivi des performances.
                            Présentation des sites Internet et former le client à sa gestion, sa mise à jour et son référencement naturel.</p>  
                    </div>
                </div>
                
            </div>
            
            <div class="section-wrapper clearfix">
                <h3 class="section-title">Skills</h3> 
                    <ul>
                        <li class="skill-percentage">HTML / HTML5</li>
                        <li class="skill-percentage">CSS / CSS3 / BOOTSTRAP</li>
                        <li class="skill-percentage">Javascript</li>
                        <li class="skill-percentage">Jquery</li>
                        <li class="skill-percentage">AngularJS</li>
                        <li class="skill-percentage">Symphony</li>
                        <li class="skill-percentage">Photoshop</li>
                        <li class="skill-percentage">PHP</li>
                        <li class="skill-percentage">MYSQL</li>
                        <li class="skill-percentage">GIT/GITHUB</li>
                        <li class="skill-percentage">React Native</li>
                        <li class="skill-percentage">ReactJS</li>
                    </ul>  
            </div>
            
            <div class="section-wrapper clearfix">
                <h3 class="section-title">Hobbies</h3> 
                <p>Informatique / Jeux</p>
                <p>Moto</p> 
                <p>Danse</p> 
                <p>Arts</p> 
                <p>Voyages</p>
                <p>Cuisine</p> 
                <p>Ski</p> 
            </div>
            
            </div>
        </section>
        
        <div class="clearfix"></div>
        </div>
    </Wrapper>
  );
}
const Wrapper = styled.div``;