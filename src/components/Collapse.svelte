<div class="p-4 bg-white">
    <div class="flex justify-between items-center cursor-pointer" on:click={() => isOpen = !isOpen}>
        <div class="w-full {isOpen ? 'text-sky-600' : 'text-black'}">
            <h2 class="text-lg font-bold text-center">{title}</h2>
            {#if subTitle}
                <p class="text-sm text-center">{subTitle}</p>
            {/if}
        </div>
        <svg class="w-6 h-6 transition {isOpen ? 'rotate-90' : 'rotate-0'} duration-300"
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
    </div>
    <div class="flex justify-center items-center mt-4 transition-all ease-out overflow-hidden duration-[300ms]"
         style="{isOpen ? `height: ${contentHeight}px` : 'height: 0px'}">
        <div class="w-full" bind:clientHeight={contentHeight}>
            <slot/>
        </div>
    </div>
</div>

<script lang="ts">
    export let title: string;
    export let subTitle: string;

    let isOpen = false;
    let contentHeight = 0;
</script>