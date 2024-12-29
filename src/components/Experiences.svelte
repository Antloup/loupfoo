<h1 class="text-4xl text-center mb-4">{$lang.titleExperience}</h1>
<TechStack techStack="{techStack}"/>

<script lang="ts">
    import {lang} from "../store/language";
    import TechStack from "./TechStack.svelte";
    import type {TechStackType} from "../types/types";

    let techStack: TechStackType;
    $: techStack = [
        {
            title: $lang.darylExpTitle,
            subTitle: $lang.darylExpTime,
            techs: [{
                points: 5,
                tools: ['typescript']
            }, {
                points: 4,
                tools: ['graphql', 'sql']
            }, {
                points: 3,
                tools: ['git', 'docker']
            }]
        },
        {
            title: $lang.iutExpTitle,
            subTitle: $lang.iutExpTime,
            techs: [{
                points: 5,
                tools: ['typescript', 'javascript', 'vue']
            }]
        },
        {
            title: $lang.amadeusExpTitle,
            subTitle: $lang.amadeusExpTime,
            techs: [{
                points: 5,
                tools: ['python']
            }, {
                points: 4,
                tools: ['scikit', 'latex', 'matplot']
            }, {
                points: 3,
                tools: ['pandas']
            }]
        },
        {
            title: $lang.fiducialSecExpTitle,
            subTitle: $lang.fiducialSecExpTime,
            techs: [{
                points: 4,
                tools: ['php', 'javascript', 'netgen']
            }, {
                points: 3,
                tools: ['symfony', 'git']
            }]
        },
        {
            title: $lang.fiducialFirstExpTitle,
            subTitle: $lang.fiducialFirstExpTime,
            techs: [{
                points: 5,
                tools: ['php']
            }, {
                points: 4,
                tools: ['symfony', 'bootstrap']
            }, {
                points: 3,
                tools: ['javascript', 'git']
            }]
        },
        {
            title: $lang.alfaExpTitle,
            subTitle: $lang.alfaExpTime,
            techs: [{
                points: 5,
                tools: ['php', 'laravel']
            }, {
                points: 4,
                tools: ['sql']
            }]
        },
    ]
</script>