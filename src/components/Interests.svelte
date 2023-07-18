<h1 class="text-4xl text-center mb-4">{$lang.titleInterests}</h1>

<div class="max-w-xs mx-auto">
    <div class="grid grid-cols-3 justify-items-center">
        <div class="m-6 opacity-80 hover:opacity-100 flex flex-col items-center tooltip">
            <div class="icon-big tech-icon"></div>
            <span class="tooltip-text">{$lang.interestTech}</span>
        </div>
        <div class="m-6 opacity-80 hover:opacity-100 flex flex-col items-center tooltip">
            <div class="icon-big piano-icon"></div>
            <span class="tooltip-text">{$lang.interestPiano}</span>
        </div>
        <div class="m-6 opacity-80 hover:opacity-100 flex flex-col items-center tooltip">
            <div class="icon-big rubik-icon"></div>
            <span class="tooltip-text">{$lang.interestRubik}</span>
        </div>
    </div>
</div>

<script lang="ts">
    import {lang} from "../store/language";
</script>