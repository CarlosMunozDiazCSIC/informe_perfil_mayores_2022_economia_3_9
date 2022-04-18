
///Si viene desde iframe con altura fija, ejecutamos esta función. Si no, los altos son dinámicos a través de PYMJS
function setChartHeight(iframe) {
    if(iframe == 'fixed') {
        //El contenedor y el main reciben una altura fija
        //La altura del gráfico se ajusta más a lo disponible en el main, quitando títulos, lógica, ejes y pie de gráfico
        document.getElementsByClassName('container')[0].style.height = '438px';
        document.getElementsByClassName('main')[0].style.height = '410px';

        let titleBlock = document.getElementsByClassName('b-title')[0].clientHeight < 65 ? 65 : document.getElementsByClassName('b-title')[0].clientHeight;
        let footerBlock = document.getElementsByClassName('chart__footer')[0].clientHeight;
        let footerTop = 8, containerPadding = 8;

        //Comprobar previamente la altura que le demos al MAIN
        let height = 410;
        document.getElementsByClassName('chart__viz')[0].style.height = height - titleBlock - footerBlock - footerTop - containerPadding + 'px';
    } else {
        document.getElementsByClassName('main')[0].style.height = document.getElementsByClassName('main')[0].clientHeight + 'px';
    }
    pymChild.sendHeight();
}

export { setChartHeight };