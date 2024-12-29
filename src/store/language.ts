import { writable } from 'svelte/store';

// English content
let enContent = {
    italicSentence: "Typescript backend developer",
    titleExperience: "Professional experience",
    titleEducation: "Education",
    titleProjects: "Personal projets",
    titleInterests: "Interests",

    interestTech: "Technology",
    interestPiano: "Piano / Musical composition",
    interestRubik: "Rubik cube",

    jokeOnMe: 'It\'s me !',
    highlightExp: '5+ years of experience',
    highlightSchool: 'Graduated from prestigious university - INSA Lyon',
    highlightCar: 'Driving licence',
    highlightFr: 'French - Native',
    highlightEn: 'English - TOEIC 920',

    eduInsa: 'Master’s Degree (“Diplôme d’ingénieur”) - Computer Science',
    eduLyon1: '2 years technical degree (DUT) - Computer Science',
    eduHs: 'High School Diploma - Science in Engineering',

    darylExpTime: '{lastExpTime} (Dec 2020 - Now) - Annecy, France',
    darylExpTitle: 'Backend Typescript Developer - Daryl Social Software',
    iutExpTime: '2 months (March - April 2024) - Bourg-en-Bresse, France',
    iutExpTitle: 'Part-time Instructor - IUT Lyon 1',
    amadeusExpTime: '6 months (March - August 2019) - Sophia Antipolis, France',
    amadeusExpTitle: 'Data Scientist - Amadeus',
    fiducialSecExpTitle: 'PHP Developer - Fiducial',
    fiducialSecExpTime: '4 months (May - August 2018) - Lyon',
    fiducialFirstExpTitle: 'PHP Developer - Fiducial',
    fiducialFirstExpTime: '3 months (June - august 2017) - Lyon',
    alfaExpTitle: 'PHP Developer - Alfa3a',
    alfaExpTime: '2 months (May - June 2016)',

    expOne: 'Rarely Used',
    expTwo: 'Occasionally Used',
    expThree: 'Regularly Used',
    expFour: 'Frequently Used',
    expFive: 'Daily Use',
    techUsage: 'Usage',
    techTech: 'Tech',

    tsTitle: 'Cadastral plot search engine in France',
    seTitle: 'Web scraper for computer parts on second hand market',
};

// French content
let frContent = {
    italicSentence: "Développeur backend Typescript",
    titleExperience: "Expérience professionnelle",
    titleEducation: "Formation",
    titleProjects: "Projets personnels",
    titleInterests: "Centres d’intérêt ",

    interestTech: "Technologie",
    interestPiano: "Piano / Composition",
    interestRubik: "Rubik cube",

    jokeOnMe: 'Ça, c\'est moi !',
    highlightExp: "+5 ans d'expérience",
    highlightSchool: "Diplomé d'une grande école - INSA Lyon",
    highlightCar: 'Permis B - Véhiculé',
    highlightFr: 'Français - langue maternelle',
    highlightEn: 'Anglais - TOEIC 920',

    eduInsa: 'Diplôme d’ingénieur en informatique',
    eduLyon1: 'DUT - Informatique',
    eduHs: 'Bac S - Sciences de l\'Ingénieur',

    darylExpTime: '{lastExpTime} (Dec 2020 - Auj.) - Annecy',
    darylExpTitle: 'Développeur backend Typescript - Daryl Social Software',
    iutExpTime: '2 mois (Mars - Avril 2024) - Bourg-en-Bresse, France',
    iutExpTitle: 'Enseignant vacataire - IUT Lyon 1',
    amadeusExpTime: '6 mois (Mars - Aout 2019) - Sophia Antipolis',
    amadeusExpTitle: 'Data Scientist - Amadeus',
    fiducialSecExpTitle: 'Développeur PHP - Fiducial',
    fiducialSecExpTime: '4 mois (Mai - Aout 2018) - Lyon',
    fiducialFirstExpTitle: 'Développeur PHP - Fiducial',
    fiducialFirstExpTime: '3 mois (Juin - Aout 2017) - Lyon',
    alfaExpTitle: 'Développeur PHP - Alfa3a',
    alfaExpTime: '2 mois (Mai - Juin 2016)',

    expOne: 'Utilisation rare',
    expTwo: 'Utilisation occasionnelle',
    expThree: 'Utilisation régulière',
    expFour: 'Utilisation fréquente',
    expFive: 'Utilisation quotidienne',
    techUsage: 'Utilisation',
    techTech: 'Tech',

    tsTitle: 'Moteur de recherche de parcelle cadastrale',
    seTitle: 'Scraper web de composant informatique sur le marché de l\'occasion',
};

// Set dynamic variables

const elapsedTime = getElapsedTime(2020, 12);
let yearsText = {fr: '', en: ''};
let mounthsText = {fr: '', en: ''};
let andText = {fr: '', en: ''};
if (elapsedTime.years > 0) {
    yearsText.fr = elapsedTime.years + ' ' + (elapsedTime.years > 1 ? 'ans' : 'an');
    yearsText.en = elapsedTime.years + ' ' + (elapsedTime.years > 1 ? 'years' : 'year');
}
if (elapsedTime.months > 0) {
    mounthsText.fr = elapsedTime.months + ' mois';
    mounthsText.en = elapsedTime.months + ' ' + (elapsedTime.months > 1 ? 'months' : 'mouth');
}
if (elapsedTime.years > 0 && elapsedTime.months > 0) {
    andText.fr = 'et ';
    andText.en = 'and ';
}
frContent.darylExpTime = frContent.darylExpTime.replace('{lastExpTime}', `${yearsText.fr} ${andText.fr} ${mounthsText.fr}`).trim()
enContent.darylExpTime = enContent.darylExpTime.replace('{lastExpTime}', `${yearsText.en} ${andText.en} ${mounthsText.en}`).trim()


export const selectedLanguage = writable<'fr' | 'en'>('fr');
export const lang = writable(frContent);

// Function to update the content based on the selected language
selectedLanguage.subscribe(selectedLang => {
    lang.set(selectedLang === 'en' ? enContent : frContent);
});

// Compute elaspedTime
function getElapsedTime(year: number, month: number) {
    const currentDate = new Date();
    const targetDate = new Date(year, month - 1); // Month is zero-based (0-11)

    const elapsedMilliseconds = currentDate.getTime() - targetDate.getTime();
    const fullYear = (1000 * 60 * 60 * 24 * 365.25);
    const elapsedYears = Math.floor(elapsedMilliseconds / fullYear);
    const elapsedMonths = Math.floor((elapsedMilliseconds % fullYear) / (fullYear / 12));

    return {years: elapsedYears, months: elapsedMonths};
}
