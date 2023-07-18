<div class="flex tooltip">
    {#each {length: points} as _, i}
        <div class="{getProgressClass(i)} rounded-full h-3 w-8 mr-2"></div>
    {/each}
    {#each {length: 5 - points} as _, i}
        <div class="bg-gray-300 rounded-full h-3 w-8 mr-2"></div>
    {/each}
    <span class="tooltip-text">
        {#if points === 1}
            {$lang.expOne}
        {:else if points === 2}
            {$lang.expTwo}
        {:else if points === 3}
            {$lang.expThree}
        {:else if points === 4}
            {$lang.expFour}
        {:else}
            {$lang.expFive}
        {/if}
    </span>
</div>

<script lang="ts">
    import {lang} from "../store/language";

    export let points: number;

    function getProgressClass(i: number): string {
        // return "bg-green-" + String((i * 100) + 300); // Svelte doesnt like dynamic class name :(
        switch (i) {
            case 0:
                return "bg-green-300";
            case 1:
                return "bg-green-400";
            case 2:
                return "bg-green-500";
            case 3:
                return "bg-green-600";
            case 4:
                return "bg-green-700";
            default:
                return "bg-green-800";
        }
    }
</script>
