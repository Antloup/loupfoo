<h1 class="text-4xl text-center mb-4">{$lang.titleExperience}</h1>
<div>
    <Experience title="{$lang.darylExpTitle}" subTitle="{$lang.darylExpTime}">
        <ExperienceRow points="{5}" tools="{['typescript']}" />
        <ExperienceRow points="{4}" tools="{['graphql', 'sql']}" />
        <ExperienceRow points="{3}" tools="{['git', 'docker']}" />
    </Experience>
    <Experience title="{$lang.amadeusExpTitle}" subTitle="{$lang.amadeusExpTime}">
        <ExperienceRow points="{5}" tools="{['python']}" />
        <ExperienceRow points="{4}" tools="{['scikit', 'latex', 'matplot']}" />
        <ExperienceRow points="{3}" tools="{['pandas']}" />
    </Experience>
    <Experience title="{$lang.fiducialSecExpTitle}" subTitle="{$lang.fiducialSecExpTime}">
        <ExperienceRow points="{4}" tools="{['php', 'javascript', 'netgen']}" />
        <ExperienceRow points="{3}" tools="{['symfony', 'git']}" />
    </Experience>
    <Experience title="{$lang.fiducialFirstExpTitle}" subTitle="{$lang.fiducialFirstExpTime}">
        <ExperienceRow points="{5}" tools="{['php']}" />
        <ExperienceRow points="{4}" tools="{['symfony', 'bootstrap']}" />
        <ExperienceRow points="{3}" tools="{['javascript', 'git']}" />
    </Experience>
    <Experience title="{$lang.alfaExpTitle}" subTitle="{$lang.alfaExpTime}">
        <ExperienceRow points="{5}" tools="{['php', 'laravel']}" />
        <ExperienceRow points="{4}" tools="{['sql']}" />
    </Experience>
</div>


<script lang="ts">
    import {lang} from "../store/language";
    import ExpBar from "./ExpBar.svelte";
    import ExperienceRow from "./ExperienceRow.svelte";
    import Experience from "./Experience.svelte";
</script>