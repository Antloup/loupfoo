<div class="flex flex-col min-h-screen">
    <main class="flex-grow">
        <div class="font-mono grid place-content-top">
            <h1 class="text-5xl text-center mb-5 align-middle">
                Anthony Loup
            </h1>
            <div class="flex justify-center">
                <div class="aspect-w-1 aspect-h-1 mb-1">
                    <img class="mb-5 object-cover rounded-[5px]" style="max-width: 8rem;" src="{imgPp}" alt="Its me !"/>
                </div>
            </div>

            <h2 class="text-2xl text-center mb-4 italic">{$lang.italicSentence}</h2>

            <div class="max-w-xs mx-auto">
                <div class="grid grid-cols-3 justify-items-center">
                    <div class="m-6 opacity-80 hover:opacity-100 flex flex-col items-center tooltip">
                        <div class="icon-big exp-icon" style=""></div>
                        <span class="tooltip-text">{$lang.highlightExp}</span>
                    </div>
                    <div class="m-6 opacity-80 hover:opacity-100 flex flex-col items-center tooltip">
                        <div class="icon-big school-icon"></div>
                        <span class="tooltip-text">{$lang.highlightSchool}</span>
                    </div>
                    <div class="m-6 opacity-80 hover:opacity-100 flex flex-col items-center tooltip">
                        <div class="icon-big car-icon"></div>
                        <span class="tooltip-text">{$lang.highlightCar}</span>
                    </div>
                </div>
            </div>

            <div class="flex justify-center">
                <div class="tooltip">
                    <button id="fr-btn"
                            class="flex items-center justify-center border-none cursor-pointer p-0 bg-transparent"
                            on:click={() => selectLang('fr')}>
                        <img class="opacity-transition w-16 mr-2 {currentLang === 'fr' ? '' : 'opacity-50'}"
                             src="{imgFr}" alt="French">
                    </button>
                    <span class="tooltip-text">{$lang.highlightFr}</span>
                </div>
                <div class="tooltip">
                    <button id="en-btn"
                            class="flex items-center justify-center border-none cursor-pointer p-0 bg-transparent "
                            on:click={() => selectLang('en')}>
                        <img class="opacity-transition w-16 ml-2 {currentLang === 'fr' ? 'opacity-50' : ''}"
                             src="{imgUk}" alt="English">
                    </button>
                    <span class="tooltip-text">{$lang.highlightEn}</span>
                </div>
            </div>

            <Experiences/>
            <Projects />
            <Education/>
            <Interests/>
        </div>

    </main>
    <Footer/>
</div>

<script lang="ts">
    import {lang, selectedLanguage} from "../store/language";
    import Education from "../components/Education.svelte"
    import Projects from "../components/Projects.svelte";
    import Interests from "../components/Interests.svelte";
    import Experiences from "../components/Experiences.svelte";
    import Footer from "../components/Footer.svelte";
    import imgPp from "$lib/images/pp.png";
    import imgFr from "$lib/images/fr.svg";
    import imgUk from "$lib/images/uk.svg";

    let currentLang = 'fr';

    function selectLang(selectedLang: 'fr' | 'en') {
        selectedLanguage.set(selectedLang);
        currentLang = selectedLang;
    }

    console.log('Hello fellow dev ! (*^_^*)')
</script>
