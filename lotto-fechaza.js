$(document).ready(function(){
    
	var array_jugadas=[];
    var id_value;
    var option_calendar="";  
    var array_calendar=[];
    var precio_total=0;
    var precio_unit=0;
    var combo_sorteos=$(".selectBox").html();
    var tot_apuestas=1;
    var multiplicador=1;
    
    function formatNumber(number){
        if(number.length<2){
            number="0"+number; 
        }
        return number;
    }    
    function optioncalendar(option,array_number){
        
        var result="";
        
        switch(option){
            case "DMA":
                result=option+" ";
                if(array_number[0]){
                    result+=array_number[0];
                }
                if(array_number[1]){
                    result+="/"+array_number[1];
                }
                if(array_number[2]){
                    result+="/"+array_number[2];
                }
                if(array_number[3]){
                    if(array_number[2]==""){
                        result+="/";    
                    }
                    result+=array_number[3];
                }
                if(array_number[4]){
                    result+=" x "+array_number[4];
                }
                break;
                
            case "DM":
                result=option+" ";
                
                if(array_number[0]){
                    result+=array_number[0];
                }  
                if(array_number[1]){
                    result+="/"+array_number[1];
                }
                if(array_number[4]){
                    result+=" x "+array_number[4];
                }
                break;
                    
            case "D":
            	result=option+" ";
            	if(array_number[0]){
                result+=array_number[0];
            	}
                if(array_number[4]){
                    result+=" x "+array_number[4];
                }
                break;
                
            case "M":
            	result=option+" ";
            	if(array_number[1]){
                 result+=array_number[1];
            	}
                if(array_number[4]){
                    result+=" x "+array_number[4];
                }
                break;
                
            case "A":
                result=option+" ";
                
                if(array_number[2]){
                    result+=array_number[2];
                }
                    
                if(array_number[3]){
                    result+=array_number[3];
                }
                if(array_number[4]){
                    result+=" x "+array_number[4];
                }
                break;
        }
        
        $(".attribute-textarea").html(result);
    }
    
  
    $(".option").click(function(){
        desmarcar();
        multiplicador=1;
        if($(this).attr("rel")=="off"){
            $(".clear").click();
            $(".option").attr("rel","off");
            $(this).attr("rel","on");
            id_value = $(this).attr("id");
            var ide=id_value.substring(0,1);
            $(".option").removeClass("botom-cli");			
            $(this).addClass("botom-cli");		
           
            precio_unit=1;
            array_calendar=[];
            var num_apuestas=0;
            
            //BEGIN ESTADOS VELADOS Y NO VELADOS    
            switch(ide){
                case "1":	
                    option_calendar="DMA"; 
                    num_apuestas=15000;
                    
                    $(".day-number").removeClass("botom2");    
                    $(".month-number").removeClass("botom2");   
                    $(".year-number").removeClass("botom2");
                    $(".year-number2").removeClass("botom2");
                    
                    $("#title-day").removeClass("title-number2");
                    $("#title-month").removeClass("title-number2");
                    $("#title-year").removeClass("title-number2");
                    
                    $("#text-day").removeClass("text-number2");
                    $("#text-month").removeClass("text-number2");
                    $("#text-year").removeClass("text-number2");
                
                
                    $(".day-number").unbind("click");    
                    $(".month-number").unbind("click");   
                    $(".year-number").unbind("click");
                    $(".year-number2").unbind("click");
                
                
                    $(".day-number").bind("click",function(){
                    
                        if($(this).attr("rel")=="off"){    
                            $(".day-number").removeClass("botom-cli");
                            $(this).addClass("botom-cli");
                            array_calendar[0]=formatNumber(trim($(this).html()));
                            optioncalendar(option_calendar,array_calendar);
                            $(".day-number").attr("rel","off");
                            $(this).attr("rel","on");
                        }else{
                            $(this).removeClass("botom-cli");
                            $(this).attr("rel","off");
                            array_calendar[0]="";
                            optioncalendar(option_calendar,array_calendar);
                        }
                    });
    
                    $(".month-number").bind("click",function(){
                        if($(this).attr("rel")=="off"){ 
                            $(".month-number").removeClass("botom-cli");
                            $(this).addClass("botom-cli");
                            array_calendar[1]=formatNumber(trim($(this).html()));
                            optioncalendar(option_calendar,array_calendar);
                            $(".month-number").attr("rel","off");
                            $(this).attr("rel","on");
                        }else{
                            $(this).removeClass("botom-cli");
                            $(this).attr("rel","off");
                            array_calendar[1]="";
                            optioncalendar(option_calendar,array_calendar);
                        }
                    });
        
                    $(".year-number").bind("click",function(){
                        if($(this).attr("rel")=="off"){ 
                            $(".year-number").removeClass("botom-cli");
                            $(this).addClass("botom-cli");
                            array_calendar[2]=trim($(this).html());
                            optioncalendar(option_calendar,array_calendar);
                            $(".year-number").attr("rel","off");
                            $(this).attr("rel","on");
                        }else{
                            $(this).removeClass("botom-cli");
                            $(this).attr("rel","off");
                            array_calendar[2]="";
                            optioncalendar(option_calendar,array_calendar);   
                        }
                    });
                
                    $(".year-number2").bind("click",function(){
                        if($(this).attr("rel")=="off"){ 
                            $(".year-number2").removeClass("botom-cli");
                            $(this).addClass("botom-cli");
                            array_calendar[3]=trim($(this).html());
                            optioncalendar(option_calendar,array_calendar);
                            $(".year-number2").attr("rel","off");
                            $(this).attr("rel","on");
                        }else{
                            $(this).removeClass("botom-cli");
                            $(this).attr("rel","off");
                            array_calendar[3]="";
                            optioncalendar(option_calendar,array_calendar);   
                        }
                    });
                 
                    break;
	
                case "2":
                    option_calendar="DM"; 
                    num_apuestas=200;
                    
                    $(".day-number").removeClass("botom2");    
                    $(".month-number").removeClass("botom2");   
                    $(".year-number").removeClass("botom2");
                    $(".year-number2").removeClass("botom2");
                    
                    $("#title-day").removeClass("title-number2");
                    $("#title-month").removeClass("title-number2");
                    $("#title-year").removeClass("title-number2");
                    
                    $("#text-day").removeClass("text-number2");
                    $("#text-month").removeClass("text-number2");
                    $("#text-year").removeClass("text-number2");
                    
                    $(".year-number").addClass("botom2");
                    $(".year-number2").addClass("botom2");
                    $("#title-year").addClass("title-number2");
                    $("#text-year").addClass("text-number2");
                    
                    
                 
                    
                    $(".day-number").unbind("click");
                    $(".day-number").bind("click",function(){
                        if($(this).attr("rel")=="off"){ 
                            $(".day-number").removeClass("botom-cli");
                            $(this).addClass("botom-cli");
                            array_calendar[0]=formatNumber(trim($(this).html()));
                            optioncalendar(option_calendar,array_calendar);
                            $(".day-number").attr("rel","off");
                            $(this).attr("rel","on");
                        }else{
                            $(this).removeClass("botom-cli");
                            $(this).attr("rel","off");
                            array_calendar[0]="";
                            optioncalendar(option_calendar,array_calendar);   
                        }
                    });
                
                    $(".month-number").unbind("click");
                    $(".month-number").bind("click",function(){
                        if($(this).attr("rel")=="off"){ 
                            $(".month-number").removeClass("botom-cli");
                            $(this).addClass("botom-cli");
                            array_calendar[1]=formatNumber(trim($(this).html()));
                            optioncalendar(option_calendar,array_calendar);
                            $(".month-number").attr("rel","off");
                            $(this).attr("rel","on");
                        }else{
                            $(this).removeClass("botom-cli");
                            array_calendar[1]="";
                            optioncalendar(option_calendar,array_calendar);
                            $(this).attr("rel","off");
                        }
                    });
        
                    $(".year-number").unbind("click");
                    $(".year-number2").unbind("click");
                
                    break;
                
                case "3":
                    option_calendar="D"; 
                    num_apuestas=20;
                    
                    $(".day-number").removeClass("botom2");    
                    $(".month-number").removeClass("botom2");   
                    $(".year-number").removeClass("botom2");
                    $(".year-number2").removeClass("botom2");
                    
                    $("#title-day").removeClass("title-number2");
                    $("#title-month").removeClass("title-number2");
                    $("#title-year").removeClass("title-number2");
                    
                    $("#text-day").removeClass("text-number2");
                    $("#text-month").removeClass("text-number2");
                    $("#text-year").removeClass("text-number2");
                    
                    
                    $(".month-number").addClass("botom2");   
                    $(".year-number").addClass("botom2");
                    $(".year-number2").addClass("botom2");
                    
                    $("#title-month").addClass("title-number2");
                    $("#title-year").addClass("title-number2");
                    
                    $("#text-month").addClass("text-number2");
                    $("#text-year").addClass("text-number2");
                    
                    $(".day-number").unbind("click");
                    $(".day-number").bind("click",function(){
                        if($(this).attr("rel")=="off"){ 
                            $(".day-number").removeClass("botom-cli");
                            $(this).addClass("botom-cli");
                            array_calendar[0]=formatNumber(trim($(this).html()));
                            optioncalendar(option_calendar,array_calendar);
                            $(".day-number").attr("rel","off");
                            $(this).attr("rel","on");
                        }else{
                            $(this).removeClass("botom-cli");
                            array_calendar[0]="";
                            optioncalendar(option_calendar,array_calendar);
                            $(this).attr("rel","off");
                        }
                    
                    });
    
                    $(".month-number").unbind("click");
                    $(".year-number").unbind("click");
                    $(".year-number2").unbind("click");
                    break;

                case "4":
                    option_calendar="M"; 
                    num_apuestas=6;
                                
                    $(".day-number").removeClass("botom2");    
                    $(".month-number").removeClass("botom2");   
                    $(".year-number").removeClass("botom2");
                    $(".year-number2").removeClass("botom2");
                    
                    $("#title-day").removeClass("title-number2");
                    $("#title-month").removeClass("title-number2");
                    $("#title-year").removeClass("title-number2");
                    
                    $("#text-day").removeClass("text-number2");
                    $("#text-month").removeClass("text-number2");
                    $("#text-year").removeClass("text-number2");                    
                   
                    $(".day-number").addClass("botom2");  
                    $(".year-number").addClass("botom2");
                    $(".year-number2").addClass("botom2");
                    
                    $("#title-day").addClass("title-number2");
                    $("#title-year").addClass("title-number2");
                    
                    $("#text-day").addClass("text-number2");
                    $("#title-year").addClass("title-number2");
                    $("#text-year").addClass("text-number2");
                
                
                    $(".day-number").unbind("click");
                
                    $(".month-number").unbind("click");
                    $(".month-number").bind("click",function(){
                        if($(this).attr("rel")=="off"){ 
                            $(".month-number").removeClass("botom-cli");
                            $(this).addClass("botom-cli");
                            array_calendar[1]=formatNumber(trim($(this).html()));
                            optioncalendar(option_calendar,array_calendar);
                            $(".month-number").attr("rel","off");
                            $(this).attr("rel","on");
                        }else{
                            $(this).removeClass("botom-cli");
                            array_calendar[1]="";
                            optioncalendar(option_calendar,array_calendar);
                            $(this).attr("rel","off");   
                        }
                    });
        
                    $(".year-number").unbind("click");
                    $(".year-number2").unbind("click");
                    break;

                case "5":
                    option_calendar="A"; 
                    num_apuestas=60;
                    
                    $(".day-number").removeClass("botom2");    
                    $(".month-number").removeClass("botom2");   
                    $(".year-number").removeClass("botom2");
                    $(".year-number2").removeClass("botom2");
                    
                    $("#title-day").removeClass("title-number2");
                    $("#title-month").removeClass("title-number2");
                    $("#title-year").removeClass("title-number2");
                    
                    $("#text-day").removeClass("text-number2");
                    $("#text-month").removeClass("text-number2");
                    $("#text-year").removeClass("text-number2");
                    
                    
                    $(".day-number").addClass("botom2");    
                    $(".month-number").addClass("botom2");
                    $("#title-day").addClass("title-number2");
                    $("#title-month").addClass("title-number2");
                    $("#text-day").addClass("text-number2");
                    $("#text-month").addClass("text-number2");
                                        
                
                    $(".day-number").unbind("click");    
                    $(".month-number").unbind("click");   
                
                    $(".year-number").unbind("click");
                    $(".year-number").bind("click",function(){
                        if($(this).attr("rel")=="off"){ 
                            $(".year-number").removeClass("botom-cli");
                            $(this).addClass("botom-cli");
                            array_calendar[2]=trim($(this).html());
                            optioncalendar(option_calendar,array_calendar);
                            $(".year-number").attr("rel","off");
                            $(this).attr("rel","on");
                            
                        }else{
                            $(this).removeClass("botom-cli");
                            array_calendar[2]="";
                            optioncalendar(option_calendar,array_calendar);
                            $(this).attr("rel","off");  
                         
                        }
                    });
                
                    $(".year-number2").unbind("click");
                    $(".year-number2").bind("click",function(){
                        if($(this).attr("rel")=="off"){ 
                            $(".year-number2").removeClass("botom-cli");
                            $(this).addClass("botom-cli");
                            array_calendar[3]=trim($(this).html());
                            optioncalendar(option_calendar,array_calendar);
                            $(".year-number2").attr("rel","off");
                            $(this).attr("rel","on");
                        }else{             
                            $(this).removeClass("botom-cli");
                            array_calendar[3]="";
                            optioncalendar(option_calendar,array_calendar);
                            $(this).attr("rel","off");    
                        }
                    });
                    break;
            
                default:
                	num_apuestas=0;
                    multiplicador=1;
                    $(".day-number").unbind("click");    
                    $(".month-number").unbind("click");   
                    $(".year-number").unbind("click");
                    $(".year-number2").unbind("click");
                    break;
            }
            tot_apuestas=parseFloat(num_apuestas);
          
        //END ESTADOS VELADOS Y NO VELADOS     
        
        }else{
        	tot_apuestas=0;
        	multiplicador=1;
            $(this).attr("rel","off");
            $(this).removeClass("botom-cli");
            option_calendar=""; 
            array_calendar=[];
            precio_unit=0;
            
            
            $(".day-number").addClass("botom2");    
            $(".month-number").addClass("botom2");   
            $(".year-number").addClass("botom2");
            $(".year-number2").addClass("botom2");
                    
            $("#title-day").addClass("title-number2");
            $("#title-month").addClass("title-number2");
            $("#title-year").addClass("title-number2");
                    
            $("#text-day").addClass("text-number2");
            $("#text-month").addClass("text-number2");
            $("#text-year").addClass("text-number2");
            
            
            $(".day-number").unbind("click");    
            $(".month-number").unbind("click");   
            $(".year-number").unbind("click");
            $(".year-number2").unbind("click");
         
            desmarcar();
        }
        $("#num-apuestas").html(tot_apuestas*parseFloat($("#mySelectBox").val()));  
        precio_total=precio_unit*parseFloat($("#mySelectBox").val());
        $("#total-game").html(precio_total);
    });

    
    
    
    $(".azar").click(function(){
       var num_item= Math.floor(Math.random() * (5-1+1)) + 1;
        $(".option").removeClass("botom-cli");
        $(".option").attr("rel","off");
        $("#"+num_item+"F").click();
       $("#nano").html(num_item); 
        var dia,mes,anio1,anio2;
       
        switch(option_calendar){
                            
            case "DMA":
                               
                dia=ramdon_calendar("D");
                mes=ramdon_calendar("M");
                anio1=ramdon_calendar("A");
                anio2=ramdon_calendar("A");
                desmarcar();           
                $("#"+dia+"D").click();
                $("#"+mes+"M").click();
                $("#"+anio1+"Y").click();
                $("#"+anio2+"YT").click();
                
                
                break;
                                
            case "DM":
                         
                dia=ramdon_calendar("D");
                mes=ramdon_calendar("M");
                desmarcar(); 
                
                $("#"+dia+"D").click();
                $("#"+mes+"M").click();
                
                break;
                
            case "D":
                
                dia=ramdon_calendar("D");
                desmarcar(); 
                
                $("#"+dia+"D").click();
                
                break;
 
            case "M":
                desmarcar(); 
                
                mes=ramdon_calendar("M");
                $("#"+mes+"M").click();
                
                break;
                
            case "A":
                desmarcar();     
                
                anio1=ramdon_calendar("A");
                anio2=ramdon_calendar("A");
                                
                $("#"+anio1+"Y").click();
                $("#"+anio2+"YT").click();
                
                break;                
                
        }
        $("#nano").html(dia+"-"+mes+"-"+anio1+anio2); 
    });
        
        
    $(".clear").live("click",function(){
    	precio_unit=0;
    	$(".day-number").addClass("botom2");    
        $(".month-number").addClass("botom2");   
        $(".year-number").addClass("botom2");
        $(".year-number2").addClass("botom2");
                
        $("#title-day").addClass("title-number2");
        $("#title-month").addClass("title-number2");
        $("#title-year").addClass("title-number2");
                
        $("#text-day").addClass("text-number2");
        $("#text-month").addClass("text-number2");
        $("#text-year").addClass("text-number2");
        
        
        $(".day-number").unbind("click");    
        $(".month-number").unbind("click");   
        $(".year-number").unbind("click");
        $(".year-number2").unbind("click");
     
    	
    	$(".botom").removeClass("botom-cli");
    	$(".botom").attr("rel","off");
        $(".multi-item").attr("rel","off");
        option_calendar="";  
        array_calendar=[];
        precio_total=0;
        $("#total-game").html(precio_total);
        $(".attribute-textarea").html("");
    });    
    
    
    function ramdon_calendar(option){
        var MIN=0;
        var MAX=0;
        switch(option){
            case "D":
                MIN=1;
                MAX=31;
                break;
            case "M":
                MIN=1;
                MAX=12;
                break;
            case "A":
                MIN=0;
                MAX=9;
                break;
        }
        var option_num= Math.floor(Math.random() * (MAX-MIN+1)) + MIN;
        return option_num;
    }
    
    function desmarcar(){
        $(".day-number").attr("rel","off");    
        $(".month-number").attr("rel","off");
        $(".year-number").attr("rel","off");
        $(".year-number2").attr("rel","off");
        
        $(".day-number").removeClass("botom-cli");    
        $(".month-number").removeClass("botom-cli");
        $(".year-number").removeClass("botom-cli");
        $(".year-number2").removeClass("botom-cli");
        
        $(".attribute-textarea").html("");
    }
    
    $(".multi-item").click(function(){
    $(".multi-item").removeClass("botom-cli");  
    	if($(this).attr("rel")=="off"){
    		var total=0;
    		multiplicador=parseFloat($(this).html());
    	    total=tot_apuestas*multiplicador;
  	    		if(total<=300000){
  	    			multiplicador=parseFloat($(this).html());
  	      	        total=tot_apuestas*multiplicador;
  	    			$(".multi-item").attr("rel","off");
  	    			$(this).addClass("botom-cli");
  	    			array_calendar[4]=trim($(this).html());
  	    	    	$(this).attr("rel","on");
  	    	    	optioncalendar(option_calendar,array_calendar);
  	    	    	precio_total=precio_unit*parseFloat(array_calendar[4])*parseFloat($("#mySelectBox").val());
  	    	    	$("#total-game").html(precio_total);
  	    		}else{
  	    			multiplicador=1;
  	    			total=tot_apuestas*multiplicador;
  	    			$(".multi-item").attr("rel","off");
  	    			array_calendar[4]=null;
  	    			optioncalendar(option_calendar,array_calendar);
  	    			precio_total=precio_unit*parseFloat($("#mySelectBox").val());
  	    			$("#total-game").html(precio_total);
  	    		}
  	    		$("#num-apuestas").html(total*parseFloat($("#mySelectBox").val())); 
    	}else{
    		multiplicador=1;
    		array_calendar[4]=null;
    		$("#num-apuestas").html(tot_apuestas*multiplicador*parseFloat($("#mySelectBox").val()));
    		optioncalendar(option_calendar,array_calendar);
    	    $(".multi-item").attr("rel","off");
    	    precio_total=precio_unit*parseFloat($("#mySelectBox").val());
    	    $("#total-game").html(precio_total);
    	   
    	}
    	
    	
    });
    
    
    $("#mySelectBox").live("change",function(){
   	var val=0;
    if(array_calendar[4]){
    precio_total=precio_unit*parseFloat(array_calendar[4])*parseFloat($(this).val());
    
    }else{
    precio_total=precio_unit*parseFloat($(this).val());
    }
    $("#total-game").html(precio_total);	
    val=tot_apuestas*parseFloat($(this).val())*multiplicador;	
    $("#num-apuestas").html(val);
    });
     
 var mensaje_error="";
 function valida_jugada(optioncalendar,arraycalendar){
    	var respuesta=false;
    	if(optioncalendar!=""){
    	switch(optioncalendar){
    	case "DMA":
    		for(var i=0;i<=3;i++){
    			if(arraycalendar[i]!="" && arraycalendar[i]!=null){
    				respuesta=true;
    				mensaje_error="";
    			}else{
    				respuesta=false;
    				mensaje_error="Formato incorrecto. El formato correcto es: dd/mm/aa.";
    				break;
    			}
    		}
    	break;
    	case "DM":
    		for(var i=0;i<=1;i++){
    			if(arraycalendar[i]!="" && arraycalendar[i]!=null){
    				respuesta=true;
    				mensaje_error="";
    			}else{
    				mensaje_error="Formato incorrecto. El formato correcto es: dd/mm.";
    				respuesta=false;break;
    			}
    		}
    	break;
    	case "D":
    		if(arraycalendar[0]!="" && arraycalendar[0]!=null){
				respuesta=true;
				mensaje_error="";
			}else{
				mensaje_error="Formato incorrecto. Marque opción del día.";
				respuesta=false;
			}
    	break;
    	case "M":
    		if(arraycalendar[1]!="" && arraycalendar[1]!=null){
				respuesta=true;
				mensaje_error="";
			}else{
				mensaje_error="Formato incorrecto. Marque opción del Mes.";
				respuesta=false;break;
			}
    	break;
    	case "A":
    		for(var i=2;i<=3;i++){
    			if(arraycalendar[i]!="" && arraycalendar[i]!=null){
    				respuesta=true;
    				mensaje_error="";
    			}else{
    				mensaje_error="Formato incorrecto. Marque opción del Año.";
    				respuesta=false;break;
    			}
    		}
    	break;
    	}
    		
    	}else{
    	respuesta=false;
    	mensaje_error="Error. Elige tu apuesta.";
    	}
    	return respuesta;
    }
    
    $("#btn-jugar").click(function(){
    	
    	
    if(valida_jugada(option_calendar,array_calendar)){
    	$("#panel-transition").removeClass("transition-one");
    	$("#panel-transition").addClass("transition-two");
    	
    	$(".zona-juego").css("display","none");
    	$(".finalize-purchase").css("display","block");
    	var jugada=[];
    	var num_jugados=$(".attribute-textarea").html();
    	var num_sorteos=parseFloat($("#mySelectBox").val());
    	jugada=[num_jugados,num_sorteos,precio_total];
    	array_jugadas.push(jugada);
    	option_calendar="";  
    	array_calendar=[];
    	precio_total=0;
    	precio_unit=0;    	
    	grilla_boletos(array_jugadas);
    	grilla_paginada(array_jugadas);
    	
    	
    	var costo_total=0;
		for(var i in array_jugadas){
			costo_total+=parseFloat(array_jugadas[i][2]);
		}
		$(".result1").html("S/."+costo_total);
		$(".class_more_plays").css("display","block");
    	$(".class-keep-playing").css("display","none");
    	$(".class-game-history").css("display","none");
    	
    	$(".selectBox").html("");
    	$(".selectBox").html(combo_sorteos);
    	$(".clear").click();
    }else{
    	jalert(mensaje_error);
    }
    	
    });
        
    $("#more_plays").click(function(){
    	$("#panel-transition").removeClass("transition-two");
    	$("#panel-transition").addClass("transition-one");
    	
    	$(".zona-juego").css("display","block");
    	$(".finalize-purchase").css("display","none");
    	$(".clear").click();
    });
    
    function grilla_boletos2(data){
    	var no_process_message_count=0;	
    	var grilla="<div id='grilla_boleto'>"
    	                    +"<div class='boleto_cabecera'>"
    	                         +"<div class='head_title_1'>N.</div>"
    	                         +"<div class='head_title_2'>BOLETOS</div>"
    	                         +"<div class='head_title_3'>VER</div>"
    	                    +"</div>";
    	              +"<div id='total_filas'>";    
    	  for(var i in data){
    		  var style="row_grid";
              if(i%2!=0){
              style+=" row_grid_mouseover";
              }
              
              if(i>2){
                  style+=" row_null";
              }
              
              var process_resp="";
              if(data[i][3]=="null"){
              	process_resp="<div class='column3-no-process'>No procesado&nbsp;&nbsp;<span class='no-process' rel='"+no_process_message_count+"#"+data[i][4]+"'>[?]</span> </div>";
              	process_resp+="<div class='tooltip-no-process'></div><div class='tooltip-no-process-arrow-img'></div></div>";
              	no_process_message_count++;
              	
              	var game_no_process_info= "<div class='title-text'><b>Jugadas pendientes</b></div>"
						+"<div class='font-text'>Tienes apuestas que no se han podido procesar.</div>"
						+"<div class='buttom-go' id='btn-no-process'></div>";
              	
				$("#game-no-process-info").html(game_no_process_info);
                $("#game-no-process-info").css("display","block");		

              	
              }else{

                	process_resp="<div class='column3-codigo'>"+data[i][3]+"</div><div class='column3-search' onclick='openPreviewWindow("+data[i][8]+",\""+data[i][7]+"\","+data[i][3]+")'></div>";	

              }
              
              
    			  grilla += "<div class='"+style+"'>"
                      +"<div class='column_1'>"+(parseInt(i)+1)+"</div>"
                      +"<div class='column_2'>"+data[i][0]+"</div>"
                      +process_resp
                      +"</div>";  
    		  
    	  }      
    	 grilla +="</div></div>";
    	    
    	$('#content-grid-result').html(grilla);
    	}
    
    function grilla_boletos(data){
 	   var grilla="<div id='grilla_boleto'>"
 	                    +"<div class='boleto_cabecera'>"
 	                         +"<div class='head_title_1'>N.</div>"
 	                         +"<div class='head_title_2'>BOLETOS</div>"
 	                         +"<div class='head_title_3'>ANULAR</div>"
 	                    +"</div>";
 	              +"<div id='total_filas'>";    
 	  for(var i in data){
 		  var style="row_grid";
           if(i%2!=0){
           style+=" row_grid_mouseover";
           }
           
           if(i>2){
               style+=" row_null";
           }
 			  grilla += "<div class='"+style+"'>"
                   +"<div class='column_1'>"+(parseInt(i)+1)+"</div>"
                   +"<div class='column_2'>"+data[i][0]+"</div>"
                   +"<div class='column_3'>"
                   +"<div class='delete process-delete1' rel='"+i+"'></div>"
                   +"</div>"
                   +"</div>";  
 		  
 	  }      
 	 grilla +="</div></div>";
 	    
 	$('#content-grid-result').html(grilla);
 	} 
    $("#btn-no-process").live("click",function(){
    	var contador=0;
    	var array_no_procesados=[];
    	for(var i in array_jugadas){
    		if(array_jugadas[i][3]=="null"){
    			array_no_procesados.push(array_jugadas[i]);
    			contador++;
    			}	
    		}
    	array_jugadas=[];
    	array_jugadas=array_no_procesados;
    	grilla_boletos(array_jugadas);
    	grilla_paginada(array_jugadas);
    	
    	var costo_total=0;
		for(var i in array_jugadas){
			costo_total+=parseFloat(array_jugadas[i][2]);
		}
		$(".result1").html("S/."+costo_total);
    	
    	$("#game-no-process-info").css("display","none");
    	$(".class_more_plays").css("display","block");
    	$("#sub_panel").css("display","block");
    	$(".btn_finaliza_compra").css("display","block");
    	$(".class-game-history").css("display","none");
    	$(".label-top").html("");	
    	$(".label_resu3").html("");
    	$(".label_resu4").html("");
    	$(".label_resu1").html("TOTAL A PAGAR:");
    });
    
    
    function grilla_paginada(data){
        var count_rows= data.length;
        var links="";
        var cont=0;
        var style="";
        var posx=0;
        var posy=1;
        var posz=2;
        
        for(var i=0;i<count_rows;i++){
            
        if(i==0){
        style="num_page_off"; 
        }
        else{
        style="num_page_on"; 
        }
            if(i%3==0){
                cont++;
                links+="&nbsp;<a class='lnk-pag1 lnk "+style+" ' id='"+posx+"-"+posy+"-"+posz+"' rel='"+posx+"-"+posy+"-"+posz+"' >"+cont+"</a>&nbsp;";
                posx=posx+3;
                posy=posy+3;
                posz=posz+3;
                
            }
        }
       $('#num_link').html("<span class='indice_page'>1</span> de "+cont+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<"+links+">");
    }
    
    $(".lnk-pag1").live("click",function(){
        var cadena_pos=$(this).attr("rel");
        var id=$(this).attr("id");
        var posiciones=cadena_pos.split("-");
        
        $(".row_grid").removeClass("row_null");
        $(".row_grid").addClass("row_null");
        
        for(var num in posiciones){
        $(".row_grid").eq(posiciones[num]).removeClass("row_null");    
        }
        grilla_paginada(array_jugadas);
        $(".indice_page").html($("#"+id).html());
        $(".lnk").removeClass("num_page_on");
    	$(".lnk").removeClass("num_page_off");
    	$(".lnk").addClass("num_page_on");
    	$("#"+$(this).attr("id")).removeClass("num_page_on");
        $("#"+$(this).attr("id")).addClass("num_page_off");
    });
    
    $(".process-delete1").live("click",function(){
        var pos=parseInt($(this).attr("rel"));
        array_jugadas.splice(pos,1) ;
        grilla_boletos(array_jugadas);
        grilla_paginada(array_jugadas);
        
            var costo_total=0;
    		for(var i in array_jugadas){
    			costo_total+=parseFloat(array_jugadas[i][2]);
    		}
    		$(".result1").html("S/."+costo_total);
    });
    
    $("#btn_finaliza_compra").click(function(){
    	if(array_jugadas.length!=0){
    	$("#sub_panel").css("display","none");
    	$(".btn_finaliza_compra").css("display","none");
    	
    	
    	$(".left-panel").html("");
    	   var content_grid_2="<div class='label-top'></div>"
    		   		+"<div class='label_1'>FECHAZA</div>"
    		   		+"<div id='ajax-loader'>"
    		   		+"<img src='layer-view-image/common/ajax-loader.gif'>"
    		   		+"</div><div id='content-grid-result'></div>"
    		   		+"<div id='num_link'></div>";
          content_grid_2+="<div id='game-no-process-info'></div>";
    	  $(".left-panel").html(content_grid_2);
    	  $(".window-message").css("display","block");
    	  $(".window-message").html('<div class="tooltip-title">Intralot</div><div class="loading"></div>PROCESANDO');
    	  $("#dhtmlwindowoverlay").css("display","block");
    	$(".class_more_plays").css("display","none");
    	$(".class-keep-playing").css("display","block");
    	$(".class-game-history").css("display","block");
    	
    	
    	var result_ticket="";
    	for(var i in array_jugadas){
    		if(i!=0){
    			result_ticket+="#";
    		}
    			for(var j in array_jugadas[i]){
    				if(j!=0){
    	    			result_ticket+="|";
    	    		}
    				
    				result_ticket+=array_jugadas[i][j];
    				
    			}	
       }
    	
 	$.ajax({
    	   	type:"POST",
    	   	url:"ajaxFechaza.html",
    	   	dataType: "text",
    	   	data:"dato="+result_ticket,
    	   	success:function(e){
    	   		array_jugadas=[];
    	   		var cadena_array=(e+"").split("#");
    	   		for(var v in cadena_array){
    	   			var fila=(cadena_array[v]+"").split("|");
    	   			var row_object=[];
    	   			for(var w in fila){
    	   				row_object.push(fila[w]);
        	   		}
    	   			array_jugadas.push(row_object);
    	   		}
    	   		$("#ajax-loader").css("display","none"); 
    	   		$(".window-message").html("");
    	   		$(".window-message").css("display","none");
    	    	$("#dhtmlwindowoverlay").css("display","none");
    	   		grilla_boletos2(array_jugadas);
    	   		grilla_paginada(array_jugadas);
    	   		
    	   		$(".label_resu3").html("<b>Saldo Disponible: S/. </b>"+array_jugadas[(array_jugadas.length-1)][5]);
    	   		$(".label_resu4").html("<b>Saldo Promocional: S/. </b>"+array_jugadas[(array_jugadas.length-1)][6]);
    	   		$("#clientSale-amount").html(array_jugadas[(array_jugadas.length-1)][5]);

    	   		
    	   		var costo_total=0;
    	    	for(var t in array_jugadas){
    	    		if(array_jugadas[t][3]!="null"){
    	    		$(".label-top").html("¡GRACIAS POR TU COMPRA!");	
    	    		costo_total+=parseFloat(procesos[t][2]);
    	    		}	
    	    	}
    	    	$(".result1").html("S/."+costo_total);
    	    	$(".label_resu1").html("TOTAL PAGADO:");
    	   	}
    	});  
    	}else{
    		jalert("No se tiene jugadas por procesar");
    	}
    });
    
    $(".no-process").live("mouseover",function(){
    	
    	var contenido_total=$(this).attr("rel");
    	var contenido_temp=(contenido_total+"").split("#");
    	var posicion=parseInt(contenido_temp[0]);
    	var mensaje=contenido_temp[1]+"";

    		$(".tooltip-no-process").eq(posicion).css("display","block");
    	    $(".tooltip-no-process").eq(posicion).html(mensaje); 
    	    $(".tooltip-no-process-arrow-img").eq(posicion).css("display","block");	

    }).live("mouseout",function(){
    		var contenido_total=$(this).attr("rel");
    		var contenido_temp=contenido_total.split("#");
    		var posicion=parseInt(contenido_temp[0]);
    		var mensaje=contenido_temp[1];
       	
            $(".tooltip-no-process").eq(posicion).css("display","none");
            $(".tooltip-no-process").eq(posicion).html(mensaje); 
            $(".tooltip-no-process-arrow-img").eq(posicion).css("display","none");  
     });
    
            
    $("#keep-playing").live("click",function(){
    	location.href="juega_fechaza.html";
    });
    
    
    $("#numbersMore").click(function(){
    	var massalieron=trim($("#fechazaNumbersMore").val())+"";
    	var arraymassalieron=massalieron.split("/");
    	var dia=parseInt(trim(arraymassalieron[0]));
    	var mes=parseInt(trim(arraymassalieron[1]));
    	var anio=(trim(arraymassalieron[2])+"").split("");
    	var anio1=trim(anio[0]);
    	var anio2=trim(anio[1]);
    	
    	$(".botom").attr("rel","off");
        $(".botom").removeClass("botom-cli");
        
        $("#1F").click();
    	$("#"+dia+"D").click();
    	$("#"+mes+"M").click();
    	$("#"+anio1+"Y").click();
    	$("#"+anio2+"YT").click();
    
    });
    
    $("#numbersLess").click(function(){
    	var menossalieron=trim($("#fechazaNumbersLess").val())+"";
    	var arraymenossalieron=menossalieron.split("/");
    	var dia=parseInt(trim(arraymenossalieron[0]));
    	var mes=parseInt(trim(arraymenossalieron[1]));
    	var anio=(trim(arraymenossalieron[2])+"").split("");
    	var anio1=trim(anio[0]);
    	var anio2=trim(anio[1]);
    	
    	$(".botom").attr("rel","off");
        $(".botom").removeClass("botom-cli");    	
    	$("#1F").click();
    	$("#"+dia+"D").click();
    	$("#"+mes+"M").click();
    	$("#"+anio1+"Y").click();
    	$("#"+anio2+"YT").click();
    
    });
    /*SESSION JUEGOS*/
    $("#btningresar").click(function(){
      $(".window-message").css("display","block");
  	  $(".window-message").html('<div class="tooltip-title">Intralot</div><div class="loading"></div>PROCESANDO');
  	  $("#dhtmlwindowoverlay").css("display","block");
    	$.ajax({
    		type:"POST",
    		url:"login.html",
    		data:$("#frmLoginClient").serialize(),
    		success:function(e){
    			var resp = trim(e);
    			var arrresp = resp.split("|");
    			var valida_session = arrresp[0];
    			$(".window-message").html("");
    	   		$(".window-message").css("display","none");
    	    	$("#dhtmlwindowoverlay").css("display","none");    	    	  
    			if(valida_session == 'OK') {
    				var username = arrresp[1];
    				var useramount = arrresp[2];
    				$("#clientSale-name").html(username);
    				$("#clientSale-amount").html(useramount);
    				$("#payments_section").css("display","block");
    				$("#login_section").css("display","");
    				$("#btn_finaliza_compra").css("display","block");
    			} else {
    				$("#payments_section").css("display","");
    				$("#login_section").css("display","block");
    				jalert(valida_session);
    			}
    		}
    	});
    });

    	var idsession=($("#idClient").val()+"").split("|");
    	if(idsession[0]==""){
    	$("#login_section").css("display","block");
    	}else{
    	$("#btn_finaliza_compra").css("display","block");	
    	$("#payments_section").css("display","block");
    	}
    function fecha_actual(){
    	var f = new Date();
    	var mes="";
    	var dia="";
    	var temp_mes=f.getMonth()+"";
    	var temp_dia=f.getDate()+"";
    	
    	if(temp_mes.length==1){
    		mes="0"+(f.getMonth()+1)+"";
    	}
    	else{mes=(f.getMonth()+1)+"";}
    	
    	if(temp_dia.length==1){
    		dia="0"+f.getDate()+"";
    	}
    	else{dia=f.getDate()+"";}
    	
    	
    	return dia+ "/" + mes + "/" + f.getFullYear();
    }
    $(".label_2").html(fecha_actual());

        
    function trim(string)
    {
        for(i=0; i<string.length; )
        {
            if(string.charAt(i)==" ")
            {
                string=string.substring(i+1, string.length);
            }
            else
            {
                break;
            }
        }
        for(i=string.length-1; i>=0; i=string.length-1)
        {
            if(string.charAt(i)==" ")
            {
                string=string.substring(0,i);
            }
            else
            {
                break;
            }
        }
        return string;
    }        
        
});