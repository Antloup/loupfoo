<h1 class="text-4xl text-center mb-4">{$lang.titleProjects}</h1>

<div>
    <Experience i={1} title="TerrainSympa.fr" subTitle="{$lang.tsTitle}">
        <ExperienceRow points="{4}" tools="{['typescript', 'python', 'vue', 'gis']}" />
        <ExperienceRow points="{3}" tools="{['graphql', 'docker']}" />
    </Experience>
    <Experience i={2} title="Scrap-E" subTitle="{$lang.seTitle}">
        <ExperienceRow points="{5}" tools="{['python']}" />
        <ExperienceRow points="{4}" tools="{['scrapy', 'qt']}" />
    </Experience>
</div>
<script lang="ts">
    import {lang} from "../store/language";
    import Experience from "./Experience.svelte";
    import ExperienceRow from "./ExperienceRow.svelte";
</script>