<h1 class="text-4xl text-center mb-4">{$lang.titleEducation}</h1>

<div class="grid grid-cols-1 md:grid-cols-2 items-center divide-y">
    <div class="h-full flex items-center justify-center md:ml-[35%]">
        <h2 class="text-4xl">2016-2019</h2>
    </div>
    <div class="h-full flex flex-col items-center md:mr-[35%]">
        <a href="https://www.insa-lyon.fr/" target="_blank"><img class="object-contain max-h-[6rem] min-h-[2rem] w-full"
                                                                 src="{imgInsa}" alt="Insa Lyon"/></a>
        <h3 class="text-3xl text-center">{$lang.eduInsa}</h3>
    </div>
    <div class="h-full flex items-center justify-center md:ml-[35%]">
        <h2 class="text-4xl text-center align-middle">2014-2016</h2>
    </div>
    <div class="h-full flex flex-col items-center md:mr-[35%]">
        <a href="https://www.univ-lyon1.fr/" target="_blank"><img
                class="object-contain max-h-[6rem] min-h-[2rem] w-full"
                src="{imgLyon}" alt="Lyon1"/></a>
        <h3 class="text-3xl text-center align-middle">{$lang.eduLyon1}</h3>
    </div>
    <div class="h-full flex items-center justify-center md:ml-[35%]">
        <h2 class="text-4xl text-center align-middle">2014</h2>
    </div>
    <div class="h-full md:mr-[35%]">
        <h3 class="text-3xl text-center align-middle">{$lang.eduHs}</h3>
    </div>
</div>

<script lang="ts">
    import {lang} from "../store/language";
    import imgInsa from "$lib/images/insa.png";
    import imgLyon from "$lib/images/lyon1.png";
</script>