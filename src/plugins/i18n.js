import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        homeTitle: 'Register book',
        evidenceTitle: 'Gathering Evidence',
        toolsTitle: 'Tools',
        nameGhostTitle: 'Name ghosts',
        websTitle: 'Related websites',
        languajeTitle: 'Languaje',
        nameGhost: 'Ghost',
        evidences: {
            title: {
                selectTrack:            'Select a track',
                emf:                    'EMF level 5',
                ghostWriting:           'Ghost writing Book',
                fingerprints:           'Fingerprints',
                ghostOrb:               'Ghost Orb',
                freezingTemperatures:   'Freezing Temperatures',
                spiritBox:              'Spirit Box',
                dots:                   'D.O.T.S Projector'
            },
            desc: {
                emf: 'Some ghosts will leave EMF traces near them that will show up on an EMF Reader as level 5.',
                ghostWriting: 'Some ghosts are able to write inside this book if placed nearby.',
                fingerprints: 'Fingerprints can be found on doors, windows and light switches which are only revealed with a UV Light.',
                ghostOrb: 'Small, floating orbs of light that are only visible when using a camera.',
                freezingTemperatures: 'All ghosts make areas cold however some ghosts have been known to drop temperatures even further.',
                spiritBox: 'Only certain ghosts will talk through a Spirit Box when asked a question with your voice. Make sure the lights are off.',
                dots: 'A laser grid of light that can reveal the silhouette of a ghost.',
            }
        },
        cards: {
            fortress: 'Unique Strengths',
            weakness: 'Weaknesses',
            ghost: {
                type: {
                    spirit: 'spirit',
                    wraith: 'wraith',
                    phantom: 'phantom',
                    poltergeist: 'poltergeist',
                    banshee: 'banshee',
                    jinn: 'jinn',
                    mare: 'mare',
                    revenant: 'revenant',
                    shade: 'shade',
                    demon: 'demon',
                    yurei: 'yurei',
                    oni: 'oni',
                    hantu: 'hantu',
                    yokai: 'yokai',
                    goryo: 'goryo',
                    myling: 'myling',
                },
                fortress: {
                    spirit: 'Nothing',
                    wraith: "Wraiths almost never touch the ground meaning it can't be tracked by footsteps.",
                    phantom: 'Looking at a Phantom will considerably drop your sanity.',
                    poltergeist: 'A Poltergeist can throw huge amounts of objects at once.',
                    banshee: 'A Banshee will only target one person at a time.',
                    jinn: 'A jinn will travel at a faster speed if its victim is far away.',
                    mare: 'A Mare will have an increased chance to attack in the dark.',
                    revenant: 'A Revenant will travel at a significantly faster speed when hunting a victim.',
                    shade: 'Being shy means the Ghost will be harder to find.',
                    demon: 'Demons will attack more often than any other Ghost. ',
                    yurei: 'Yurei have been known to have a stronger effect on people sanity. ',
                    oni: "Oni's are more active when people are nearby and have been seen moving objects at great speed.",
                    hantu: 'Lower temperatures can cause the Hantu to move at faster speeds.',
                    yokai: 'Talking near a Yokai will anger it and increase its chance of attacking.',
                    goryo: 'A Goryo will usually only show itself on camera if there are no people nearby.',
                    myling: 'A Myling is known to be quieter when hunting.',
                },
                weakness: {
                    spirit: 'Using Smudge Sticks on a Spirit will stop it attacking for a long period of time.',
                    wraith: 'Wraiths have a toxic reaction to Salt.',
                    phantom: 'Taking a photo of the Phantom will make it temporarily disappear.',
                    poltergeist: 'A Poltergeist is almost ineffective in an empty room.',
                    banshee: 'Banshees fear the Crucifix and will be less aggressive when near one.',
                    jinn: 'Turning off the locations power source will prevent the Jinn from using its ability.',
                    mare: 'Turning the lights on around the Mare will lower its chance to attack.',
                    revenant: 'Hiding from the Revenant will cause it to move very slowly.',
                    shade: 'The Ghost will not enter hunting mode if there is multiple people nearby.',
                    demon: "Asking a Demon successful questions on the Ouija Board won't lower the users sanity.",
                    yurei: "Smudging the Yurei's room will cause it to not wander around the location for a long time.",
                    oni: 'Being more active will make the Oni easier to find and identify. ',
                    hantu: 'A Hantu will move slower in warmer areas.',
                    yokai: 'When hunting, a Yokai can only hear voices close to it.',
                    goryo: 'They are rarely seen far from their place of death.',
                    myling: 'Mylings more frequently make paranormal sounds.',
                }
            }
        },
        actions: {
            init: 'Click here for new research.'
        }
    },
    'es': {
        homeTitle: 'Libro de registro',
        evidenceTitle: 'Reuniendo pruebas',
        toolsTitle: 'Instrumentos',
        nameGhostTitle: 'Nombre fantasmas',
        websTitle: 'Webs relacionadas',
        languajeTitle: 'Idioma',
        nameGhost: 'Fantasmas',
        evidences: {
            title: {
                selectTrack: 'Selecciona una pista',
                emf: 'EMF nivel 5',
                ghostWriting: 'Escritura fantasma',
                fingerprints: 'Huellas dactilares',
                ghostOrb: 'Orbes',
                freezingTemperatures: 'Temperatura bajo cero',
                spiritBox: 'Spirit Box',
                dots: 'Proyector D.O.T.S'
            },
            desc: {
                emf: 'El medidor de campos electromagnéticos (también llamado medidor EMF) detecta el rastro que dejan los fantasmas y podría alcanzar el nivel 5.',
                ghostWriting: 'Algunos fantasmas pueden escribir en estos cuadernos cuando se les coloca uno cerca.',
                fingerprints: 'Se conoce que algunos fantasmas pueden dejar huellas dactilares en puertas, ventanas e interruptores de la luz. Dichas huellas dactilares se mostrarán bajo una luz ultravioleta.',
                ghostOrb: 'La evidencia paranormal más clásica, aunque no todos los fantasmas la presentan. Los orbes espectrales serán visibles a través de una cámara de vídeo.',
                freezingTemperatures: 'Todos los fantasmas hacen que una estancia esté fría, pero algunos de ellos pueden hacer que las temperaturas desciendan más de lo normal.',
                spiritBox: 'Solo algunos fantasmas hablarán a través de una Spirit Box cuando les realices preguntas con tu voz. Asegúrate de que las luces están apagadas antes de usarlo.',
                dots: 'Una red láser proyectada que puede revelar, la silueta de un fantasma.',
            }
        },
        cards: {
            fortress: 'Fortaleza',
            weakness: 'Debilidad',
            ghost: {
                type: {
                    spirit: 'espiritu',
                    wraith: 'espectro',
                    phantom: 'ente',
                    poltergeist: 'poltergeist',
                    banshee: 'banshee',
                    jinn: 'jinn',
                    mare: 'pesadilla',
                    revenant: 'revenant',
                    shade: 'sombra',
                    demon: 'demonio',
                    yurei: 'yurei',
                    oni: 'oni',
                    hantu: 'hantu',
                    yokai: 'yokai',
                    goryo: 'goryo',
                    myling: 'myling',
                },
                fortress: {
                    spirit: 'Ninguno.',
                    wraith: 'No deja pisadas rastreables en el suelo.',
                    phantom: 'Disminuye mucho la cordura de los jugadores que lo miran.',
                    poltergeist: 'Puede lanzar muchos objetos a la vez.',
                    banshee: 'Marca a los jugadores de uno en uno.',
                    jinn: 'Es más rápido cuando está lejos de su víctima.',
                    mare: 'Más probabilidad de ataque a oscuras.',
                    revenant: 'Se mueve a mayor velocidad cuando va tras su presa.',
                    shade: 'Es tímida y difícil de encontrar.',
                    demon: 'Son los fantasmas que atacan con mayor frecuencia.',
                    yurei: 'Dañan especialmente la cordura de los jugadores.',
                    oni: 'Mientras más jugadores hay cerca de él se vuelve más activo y agresivo.',
                    hantu: 'Más rápido con temperaturas bajas',
                    yokai: 'Hablar cerca de él aumenta las posibilidades de que ataque.',
                    goryo: 'Se mostrará en una camara solo si no hay nadie cerca',
                    myling: 'Son silenciosos atacando',
                },
                weakness: {
                    spirit: 'Las varitas de incienso impiden que ataque durante un tiempo.',
                    wraith: 'Reaccion tóxica ante la sal.',
                    phantom: 'Desaparece temporalmente al hacerle una fotografía.',
                    poltergeist: 'Prácticamente Inútil cuando la habitación está vacía.',
                    banshee: 'Temen al crucifijo y se vuelven menos agresivas.',
                    jinn: 'Si el cuadro eléctrico está apagado no puede usar su habilidad.',
                    mare: 'Menos probabilidad de ataque cuando hay luz.',
                    revenant: 'Se vuelve lento cuando su presa se esconde.',
                    shade: 'No ataca cuando hay varios jugadores juntos.',
                    demon: 'Si hacemos preguntas exitosas con la Ouija no perderemos cordura.',
                    yurei: 'Las varitas de incienso evitan su presencia durante un gran tiempo',
                    oni: 'Al ser más activos son más fáciles de identificar.',
                    hantu: 'Más lento con temperaturas calientes',
                    yokai: 'Atacando, solo escucha las voces cercanas a él.',
                    goryo: 'Raramente se les ve lejos del lugar donde murieron',
                    myling: 'Suelen hacer muscho ruido',
                }
            },
        },
        actions: {
            init: 'Pulse aquí para una nueva investigación.'
        }
    }
};

const i18n = new VueI18n({
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;