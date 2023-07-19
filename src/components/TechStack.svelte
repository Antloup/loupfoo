<div>
    {#each techStack as {title, subTitle, techs}}
        <Experience title="{title}" subTitle="{subTitle}">
            {#each techs as {points, tools}}
                <ExperienceRow points="{points}" tools="{tools}"/>
            {/each}
        </Experience>
    {/each}
</div>

<script lang="ts">
    import Experience from "./Experience.svelte";
    import ExperienceRow from "./ExperienceRow.svelte";
    import type {TechStackType} from "../types/types";

    export let techStack: TechStackType;
</script>
