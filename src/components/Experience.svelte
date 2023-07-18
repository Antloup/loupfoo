<Collapse title="{title}" subTitle="{subTitle}">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center divide-y">
        <div class="h-full items-center justify-center md:ml-[35%] md:flex hidden">
            <h2 class="text-4xl">{$lang.techUsage}</h2>
        </div>
        <div class="h-full items-center justify-center md:mr-[35%] md:flex hidden">
            <h2 class="text-4xl">{$lang.techTech}</h2>
        </div>
        <div class="h-full col-span-2 items-center justify-center md:hidden flex">
            <h2 class="text-4xl text-center">{$lang.techUsage} / {$lang.techTech}</h2>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 space-y-6 divide-y justify-center md:gap-0 gap-y-4">
        <slot />
    </div>
</Collapse>

<script lang="ts">
    import {lang} from "../store/language";
    import Collapse from "./Collapse.svelte";

    export let title: string;
    export let subTitle: string;
</script>