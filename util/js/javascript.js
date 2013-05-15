$(document).ready(function() {



    $.fn.carrito = function(opciones) {
        var defec = {productos: [],
            cesta: []};
        $.extend(defec, opciones);

        $(this).html(llena_productos() + paginator());


        function llena_productos() {

            var object = '';
            for (var i in defec.productos) {
                var style = "";

                if (i > 5) {
                    style = " item-off";
                }

                object += '<div class="items' + style + '" >';

                //Imagen del Producto
                object += '<div class="detalle-producto" rel="' + i + '">';
                object += '<div style="background:url(img/' + defec.productos[i][1] + ');background-position: -1px -20px;" class="img-producto"></div>';
                object += '<div class="btn-vrapida">Vista Rapida</div>';
                object += '</div>';

                //Caracteristicas del Producto
                object += '<div class="caracteristicas">';
                object += '<span><b>' + defec.productos[i][2] + '</b></span><br>';
                object += '<span>' + defec.productos[i][3] + '</span><br>';
                object += '<span class="price-product">S/.' + defec.productos[i][4] + '</span><br>';
                object += '</div>';

                //Boton agregar al carrito
                object += '<div class="btn-carrito" rel="' + i + '">Agregar a Carrito</div>';

                object += '</div>';
            }
            return object;
        }


        function paginator() {
            var count_rows = defec.productos.length;
            var links = "";
            var cont = 0;
            var style = "";
            var pos1 = 0;
            var pos2 = 1;
            var pos3 = 2;
            var pos4 = 3;
            var pos5 = 4;
            var pos6 = 5;


            for (var i = 0; i < count_rows; i++) {

                if (i == 0) {
                    style = "num_page_off";
                }
                else {
                    style = "num_page_on";
                }
                if (i % 6 == 0) {
                    cont++;
                    links += "&nbsp;<a class='lnk-pag1 lnk " + style + " ' id='w" + pos1 + "-" + pos2 + "-" + pos3 + "-" + pos4 + "-" + pos5 + "-" + pos6 + "' rel='" + pos1 + "-" + pos2 + "-" + pos3 + "-" + pos4 + "-" + pos5 + "-" + pos6 + "'>" + cont + "</a>&nbsp;";
                    if (parseInt(cont % 29) == 0) {
                        links += "<br>";
                    }
                    pos1 = pos1 + 6;
                    pos2 = pos2 + 6;
                    pos3 = pos3 + 6;
                    pos4 = pos4 + 6;
                    pos5 = pos5 + 6;
                    pos6 = pos6 + 6;
                }

            }
            return "<div id='num_link'><span class='indice_page'>1</span> de " + cont + "&nbsp;&nbsp;-&nbsp;&nbsp;" + links + "</div>";
        }


        $(".lnk-pag1").bind("click", function() {
            var cadena_pos = $(this).attr("rel");

            var id = $(this).attr("id");
            var posiciones = cadena_pos.split("-");

            $(".items").removeClass("item-off");
            $(".items").addClass("item-off");

            for (var num in posiciones) {

                $(".items").eq(posiciones[num]).removeClass("item-off");

            }
            $(".indice_page").html($("#" + id).html());
            $(".lnk").removeClass("num_page_on");
            $(".lnk").removeClass("num_page_off");
            $(".lnk").addClass("num_page_on");

            $("#" + $(this).attr("id")).removeClass("num_page_on");
            $("#" + $(this).attr("id")).addClass("num_page_off");


        });

        $(".btn-carrito").bind("click", function() {
            var position = $(this).attr("rel");
            defec.cesta.push(defec.productos[position]);
            var content_carrito = "";
            var style = "";
            for (var i in defec.cesta) {
                if (i > 6) {
                    style = "row-off";
                }

                content_carrito += "<div class='row-car " + style + "'>";
                content_carrito += "<div class='column-car' style='left:5px; width:20px;text-align:center;'>" + (parseInt(i) + 1) + "</div>";
                content_carrito += "<div class='column-car' style='left:34px; width:80px;'>" + defec.cesta[i][3] + "</div>";
                content_carrito += "<div class='column-car' style='left:233px;'>S/.</div>";
                content_carrito += "<div class='column-car' style='left:250px; width:40px;text-align:left;'>" + defec.cesta[i][4] + "</div>";
                content_carrito += "</div>";
            }
            content_carrito += paginator2();
            $(".content-product").html(content_carrito);
            $(".row-car:odd").addClass("rows-carrito-par");
            $(".row-car:even").addClass("rows-carrito-impar");

            $(".lnk-pag2").bind("click", function() {
                var cadena_pos = $(this).attr("rel");
                var id = $(this).attr("id");
                var posiciones = cadena_pos.split("-");

                $(".row-car").removeClass("row-off");
                $(".row-car").addClass("row-off");

                for (var num in posiciones) {
                    $(".row-car").eq(posiciones[num]).removeClass("row-off");
                }
                $(".indice_page2").html($("#" + id).html());
                $(".lnk2").removeClass("num_page_on");
                $(".lnk2").removeClass("num_page_off");
                $(".lnk2").addClass("num_page_on");

                $("#" + $(this).attr("id")).removeClass("num_page_on");
                $("#" + $(this).attr("id")).addClass("num_page_off");
            });


        });
        function paginator2() {
            var count_rows = defec.cesta.length;
            var links = "";
            var cont = 0;
            var style = "";
            var pos1 = 0;
            var pos2 = 1;
            var pos3 = 2;
            var pos4 = 3;
            var pos5 = 4;
            var pos6 = 5;
            var pos7 = 6;


            for (var i = 0; i < count_rows; i++) {

                if (i == 0) {
                    style = "num_page_off";
                }
                else {
                    style = "num_page_on";
                }
                if (i % 7 == 0) {
                    cont++;
                    links += "&nbsp;<a class='lnk-pag2 lnk2 " + style + " ' id='q" + pos1 + "-" + pos2 + "-" + pos3 + "-" + pos4 + "-" + pos5 + "-" + pos6 + "-" + pos7 + "' rel='" + pos1 + "-" + pos2 + "-" + pos3 + "-" + pos4 + "-" + pos5 + "-" + pos6 + "-" + pos7 + "'>" + cont + "</a>&nbsp;";
                    if (parseInt(cont % 29) == 0) {
                        links += "<br>";
                    }
                    pos1 = pos1 + 7;
                    pos2 = pos2 + 7;
                    pos3 = pos3 + 7;
                    pos4 = pos4 + 7;
                    pos5 = pos5 + 7;
                    pos6 = pos6 + 7;
                    pos7 = pos7 + 7;
                }

            }


            return "<div id='num_link2'><span class='indice_page2'>1</span> de " + cont + "&nbsp;&nbsp;-&nbsp;&nbsp;" + links + "</div>";
        }


        $(".status").bind("click", function() {
            if ($(this).attr("rel") == "1") {
                $(".enabled").css("display", "none");
                $(this).attr("rel","0");
            } else {
                $(".enabled").css("display", "block");
                $(this).attr("rel","1");
            }


        });

        $(".detalle-producto").mouseover(function() {
            var position = $(this).attr("rel");
            $(".btn-vrapida").eq(position).css("display", "block");
        }).mouseout(function() {
            var position = $(this).attr("rel");
            $(".btn-vrapida").eq(position).css("display", "none");
        });

    }



    var array_response = [];
    var carrito_product = [];

    var row = ["123", "pc-prueba.jpg", "Sony", "Netbook AMD E2-1800...", "1392", "descripcion"];
    var row2 = ["345", "pc-prueba2.jpg", "Apple", "Macbook Pro...", "1392", "descripcion"];

    array_response.push(row);
    array_response.push(row2);
    array_response.push(row);
    array_response.push(row2);
    array_response.push(row);

    array_response.push(row);
    array_response.push(row2);
    array_response.push(row);
    array_response.push(row2);
    array_response.push(row);




    $(".carrito-productos").html("");
    $(".carrito-productos").carrito({productos: array_response, cesta: carrito_product});










});