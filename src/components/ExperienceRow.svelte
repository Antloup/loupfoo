<div class="h-full flex flex-col items-center justify-center md:ml-[35%]">
    <ExpBar points={points}/>
</div>

<div class="h-full flex flex-col justify-center md:mr-[35%]">
    <div class="w-full flex flex-row mb-5 space-x-6 flex-wrap justify-center">
        {#each tools as tool}
            <a href="{toolsData[tool].site}" target="_blank" class="tooltip">
                <span class="tooltip-text">{toolsData[tool].name}</span>
                <img class="object-contain max-h-[6rem] min-h-[2rem] w-full" src="{toolsData[tool].src}" alt="{toolsData[tool].name}"/>
            </a>
        {/each}
    </div>
</div>

<script lang="ts">
    import ExpBar from "./ExpBar.svelte";
    import imgTs from "$lib/images/ts.png";
    import imgJs from "$lib/images/js.png";
    import imgGql from "$lib/images/gql.png";
    import imgSql from "$lib/images/sql.png";
    import imgGit from "$lib/images/git.png";
    import imgDocker from "$lib/images/docker.webp";
    import imgPython from "$lib/images/python.png";
    import imgSkl from "$lib/images/skl.png";
    import imgMat from "$lib/images/mat.webp";
    import imgLatex from "$lib/images/latex.png";
    import imgPandas from "$lib/images/pandas.png";
    import imgPhp from "$lib/images/php.png";
    import imgLaravel from "$lib/images/laravel.png";
    import imgSymfony from "$lib/images/symfony.png";
    import imgNetgen from "$lib/images/netgen.png";
    import imgBs from "$lib/images/bs.png";
    import imgVue from "$lib/images/vuejs.png";
    import imgQt from "$lib/images/pyqt.png";
    import imgGis from "$lib/images/postgis.png";
    import imgScrapy from "$lib/images/scrapy.png";

    const toolsData: Record<string, { name: string; src: string; site: string }> = {
        typescript: {
            name: 'Typescript',
            src: imgTs,
            site: 'https://www.typescriptlang.org/',
        },
        javascript: {
            name: 'Javascript',
            src: imgJs,
            site: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        graphql: {
            name: 'GraphQL',
            src: imgGql,
            site: 'https://graphql.org/',
        },
        sql: {
            name: 'SQL',
            src: imgSql,
            site: 'https://fr.wikipedia.org/wiki/Structured_Query_Language',
        },
        git: {
            name: 'git',
            src: imgGit,
            site: 'https://git-scm.com/',
        },
        docker: {
            name: 'Docker',
            src: imgDocker,
            site: 'https://www.docker.com/',
        },
        python: {
            name: 'Python 3',
            src: imgPython,
            site: 'https://www.python.org/',
        },
        scikit: {
            name: 'SciKitLearn',
            src: imgSkl,
            site: 'https://scikit-learn.org/',
        },
        matplot: {
            name: 'MatPlotLib',
            src: imgMat,
            site: 'https://matplotlib.org/',
        },
        latex: {
            name: 'LaTeX',
            src: imgLatex,
            site: 'https://www.latex-project.org/',
        },
        pandas: {
            name: 'Pandas',
            src: imgPandas,
            site: 'https://pandas.pydata.org/',
        },
        php: {
            name: 'PHP',
            src: imgPhp,
            site: 'https://www.php.net/',
        },
        laravel: {
            name: 'Laravel',
            src: imgLaravel,
            site: 'https://laravel.com/',
        },
        symfony: {
            name: 'Symfony 3',
            src: imgSymfony,
            site: 'https://symfony.com/',
        },
        netgen: {
            name: 'Netgen Layouts',
            src: imgNetgen,
            site: 'https://netgen.io',
        },
        bootstrap: {
            name: 'Bootstrap',
            src: imgBs,
            site: 'https://getbootstrap.com/',
        },
        vue: {
            name: 'Vue.js',
            src: imgVue,
            site: 'https://vuejs.org/',
        },
        qt: {
            name: 'QtPy',
            src: imgQt,
            site: 'https://wiki.python.org/moin/PyQt',
        },
        gis: {
            name: 'PostGis',
            src: imgGis,
            site: 'http://postgis.net/',
        },
        scrapy: {
            name: 'Scrapy',
            src: imgScrapy,
            site: 'https://scrapy.org/',
        },
    }

    export let points: number;
    export let tools: (keyof typeof toolsData)[] = [];

</script>