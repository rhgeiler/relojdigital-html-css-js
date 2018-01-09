(function(){
    var actualizarHora = function(){
        var fecha    = new Date(),
            horas     = fecha.getHours(),
            minutos  = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            ampm,
            diaSemana= fecha.getDay(),
            dia      = fecha.getDate(),
            mes      = fecha.getMonth(),
            year     = fecha.getFullYear();

        

        console.log(horas);
        console.log(minutos);
        console.log(segundos);
        console.log(diaSemana);
        console.log(dia);
        console.log(mes);
        console.log(year);
    

        var pHoras     = document.getElementById('horas'),
            pAMPM      = document.getElementById('ampm'),
            pMinutos   = document.getElementById('minutos'),
            pSegundos  = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia       = document.getElementById('dia'),
            pMes       = document.getElementById('mes'),
            pYear      = document.getElementById('year');
        
            var semana = ['Domingo', 'Lunes', 'martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
            
            pDiaSemana.textContent=semana[diaSemana];
           
            pDia.textContent = dia;
            var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Obtubre', 'Nobiembre', 'Diciembre'];
            pMes.textContent =meses[mes];

            pYear.textContent = year;
            
            if (horas > 12){
                horas=horas-12;
                ampm='PM';
            }else{
                if(horas==12){
                    ampm='PM'
                }else{
                    ampm='AM';
                }
                
            };
           
            if(horas==0){
                horas==12;
            };



            pHoras.textContent = horas;

            pAMPM.textContent = ampm;

            if(minutos < 10){
                minutos= "0" + minutos;
            };
            
            if (segundos < 10){
                segundos='0'+ segundos;
            }

            pMinutos.textContent = minutos;

            pSegundos.textContent = segundos;

            
    }


    actualizarHora();

    var intervalos =setInterval(actualizarHora,1000);
  }())