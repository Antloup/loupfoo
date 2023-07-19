<h1 class="text-4xl text-center mb-4">{$lang.titleProjects}</h1>

<TechStack techStack="{techStack}"/>

<script lang="ts">
    import {lang} from "../store/language";
    import TechStack from "./TechStack.svelte";
    import type {TechStackType} from "../types/types";

    let techStack: TechStackType;
    $: techStack = [
        {
            title: 'TerrainSympa.fr',
            subTitle: $lang.tsTitle,
            techs: [{
                points: 4,
                tools: ['typescript', 'python', 'vue', 'gis']
            }, {
                points: 3,
                tools: ['graphql', 'docker']
            }]
        },
        {
            title: 'Scrap-E',
            subTitle: $lang.seTitle,
            techs: [{
                points: 5,
                tools: ['python']
            }, {
                points: 4,
                tools: ['scrapy', 'qt']
            }]
        },
    ]
</script>