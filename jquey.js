function getDataitem() {
    if (localStorage.getItem('Segnotech')) {
        var data = JSON.parse(localStorage.getItem('Segnotech'));
        $('.Head1 select option').remove()
        $('.Head2 select option').remove()
        $('.Head1 select').append("<option value='' > Select Heading </option>")
        $('.Head2 select').append("<option value='' > Select Heading </option>")
        $(data).each(function (index, value) {
            index = index + 1
            $('#main-container').append('<section class="main-forms"><h1>' + value.heading + '</h1><button class="btn-cross"  onclick="deleteitem(this)">X</button></section>')
            $('.Head1 select').append("<option value=" + index + ">" + value.heading + "</option>")
            $('.Head2 select').append("<option value=" + index + ">" + value.heading + "</option>")
            $(value.subheading).each(function (index1, value1) {
                var heading = index
                var subheading = index1 + 3;
                console.log($("#main-container section:nth-child(" + heading + ") div:nth-child(" + subheading + ") ").html())
                $("#main-container section:nth-child(" + heading + ") div:nth-child(" + subheading + ") ").remove()
                $("#main-container section:nth-child(" + heading + ")").append("<div class='container'><h5>" + value1.subtitle + "</h5><button class='btn-cross'  onclick='deleteitem(this)'>X</button></div>");
                $(value1.form).each(function (index2, value2) {
                    index2 = index2 + 1;
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + subheading + ") ").append("<h6>" + value2 + " </h6>");
                })
                $(value1.select).each(function (index3, value3) {
                    index3 = index3 + 1;
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + subheading + ")   ").append("<h4> "+ value3 + "</h4>");
                })
                $(value1.textarea).each(function (index4, value4) {
                    index4 = index4 + 1;
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + subheading + ")    ").append("<p>" + value4 + "</p>");
                })
                console.log($('#main-container').find('p'))
                if ($("p").text() == '') {
                    $("p").remove()
                }
            })
        })
        
    }

}
getDataitem();
$(document).ready(function () {

    $(".Heading_form").submit(function (event) {
        event.preventDefault();
        var textinput = $(".HeadingForm").val();
        console.log(textinput)
        $('#main-container').append('<section><h1>' + textinput + '</h1><button class="btn-cross"  onclick="deleteitem(this)">X</button></section>');
        $('.Subheadform option').remove()
        $('.Head1 select ').append("<option value='' selected disabled>--Select Heading--</option>")
        $('.Head2 select option').remove()
        $('.Head2 select ').append("<option value='' selected disabled>--Select Heading--</option>")
        $('#main-container section h1').each(function (key) {
            key = key + 1
            var SubHead_in_Head = $(this).text()
            $('.Head1 select').append("<option value=" + key + ">" + SubHead_in_Head + " </option>")
            $('.Head2 select').append("<option value=" + key + ">" + SubHead_in_Head + "</option>")
        })
        // Sort();
        Dataitem();
        $('.Heading_form')[0].reset();

    });
    $(".Subheadform").submit(function (event) {

        event.preventDefault();
        var heading = $('.Head_drp').val();
        var textinput = $(".text-1").val();
        console.log(textinput, heading)

        $("#main-container section:nth-child(" + heading + ")").append("<div class='container'><h5>" + textinput + " </h5><button class='btn-cross' id='test' onclick='deleteitem(this)'>X</button></div>");
        $('.Head3 select option').remove()
        $('.Head3 select ').append("<option value='' selected disabled>--Select Heading--</option>")
        Dataitem();
        $('.Subheadform')[0].reset();
        $('main-container .container h5').each(function (key) {
            key = key + 1
            console.log(this)
            var sub_in_form = $(this).text()
            console.log(sub_in_form)
            $('.Head3 select').append("<option value=" + key + ">" + sub_in_form + "</option>")
            // Sort();
            Dataitem();


        })
    });

    $('.HeadForm ').on('change', function (event) {
        var h = $(this).val()
        console.log(h)
        $('.form_Sub option').remove()
        $(".form_Sub").append("<option value='' selected disabled>--Select Sub_H-Heading--</option>")

        $("#main-container section:nth-child(" + h + ") div h5 ").each(function (key) {
            key = key + 3
            console.log(key)
            var sub_heading = $(this).text()
            console.log(sub_heading)
            $('.form_Sub').append("<option value=" + key + ">" + sub_heading + " </option>")
        })



        $(".form-3").submit(function (event) {
            event.preventDefault();
            var heading = $('.HeadForm').val();
            var sub_heading = $('.form_Sub').val();
            var textinput3 = $('.Down').val();
            var clss = $(".clss1").val();
            var idd1 = $(".idad1").val();
            var lab = $(".lab1").val();
            var place = $(".place1").val();
            var value = $(".val1").val();
            var name1 = $(".name1").val();
            var actt = $(".act1").val();
            console.log(textinput3)
            if (textinput3 === "textarea") {
                console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
                if ($('.disabled').is(':checked') && $('.required').is(':checked') && $('.readonly').is(':checked')) {

                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p ><label class='d-block' for=" + lab + ">" + lab + "</label><textarea disabled required readonly class =" + clss + " id =" + idd1 + " placeholder = " + place + " value = " + value + " name = " + name1 + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");

                }
                else if (($('.readonly').is(':checked') && $('.disabled').is(':checked'))) {

                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p ><label class='d-block'for=" + lab + ">" + lab + "</label><textarea disabled  readonly class = " + clss + " id = " + idd1 + " placeholder = " + place + " value = " + value + " name = " + name1 + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");

                }
                else if (($('.disabled').is(':checked') && $('.required').is(':checked'))) {

                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p ><label class='d-block' for=" + lab + ">" + lab + "</label><textarea disabled required readonly class = " + clss + " id = " + idd1 + " placeholder = " + place + " value = " + value + " name = " + name1 + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");

                }

                else if (($('.readonly').is(':checked') && $('.required').is(':checked'))) {

                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p ><label class='d-block' for=" + lab + ">" + lab + "</label><textarea  readonly required class = " + clss + " id = " + idd1 + " placeholder = " + place + " value = " + value + " name = " + name1 + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");

                }

                else if ($('.readonly').is(':checked')) {
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p ><label class='d-block' for=" + lab + ">" + lab + "</label><textarea  readonly  class = " + clss + " id = " + idd1 + " placeholder = " + place + " value = " + value + " name = " + name1 + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");

                }
                else if ($('.disabled').is(':checked')) {
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p ><label class='d-block' for=" + lab + ">" + lab + "</label><textarea  disabled  class = " + clss + " id = " + idd1 + " placeholder = " + place + " value = " + value + " name = " + name1 + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");

                }
                else if ($('.required').is(':checked')) {
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p ><label class='d-block' for=" + lab + ">" + lab + "</label><textarea required  class = " + clss + " id = " + idd1 + " placeholder = " + place + " value = " + value + " name = " + name1 + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");

                }

                else {
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ") ").append("<p ><label class='d-block' for=" + lab + ">" + lab + "</label><textarea r class = " + clss + " id = " + idd1 + " placeholder = " + place + " value = " + value + " name = " + name1 + " ></textarea><button class='btn-cross' onclick='deleteitem(this)'>X</button></p>");

                }


            }
            if (textinput3 === "select") {
              
                if ($('.disabled').is(':checked') && $('.required').is(':checked') && $('.readonly').is(':checked')) {
                    var selection = $('.option1').val();
                    var nik = selection.split(',');
                    var sunil = [];
                    $.each(nik, function (t, v) {
                        t = t + 1;
                        sunil.push('<option value=' + v + '>' + v + '</option>')
                    })
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h4><label class="d-block" for="' + lab + '">' + lab + '</label><select disabled required readonly class="' + clss + '" id="' + idd1 + '" name="' + name1 + '" ></select><button class="btn-cross" onclick="deleteitem(this)">X</button></h4>')
                    for (let t in sunil) {
                        $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(sunil[t])
                    }
                }
                else if (($('.readonly').is(':checked') && $('.disabled').is(':checked'))) {
                    var selection = $('.option1').val();
                    var nik = selection.split(',');
                    var sunil = [];
                    $.each(nik, function (t, v) {
                        t = t + 1;
                        sunil.push('<option value=' + v + '>' + v + '</option>')
                    })
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h4><label class="d-block" for="' + lab + '">' + lab + '</label><select disabled readonly class="' + clss + '" id="' + idd1 + '" name="' + name1 + '"  ></select><button class="btn-cross" onclick="deleteitem(this)">X</button></h4>')
                    for (let t in sunil) {
                        $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(sunil[t])
                    }
                }
                else if (($('.disabled').is(':checked') && $('.required').is(':checked'))) {
                    var selection = $('.option1').val();
                    var nik = selection.split(',');
                    var sunil = [];
                    $.each(nik, function (t, v) {
                        t = t + 1;
                        sunil.push('<option value=' + v + '>' + v + '</option>')
                    })
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h4><label class="d-block" for="' + lab + '">' + lab + '</label><select disabled required  class="' + clss + '" id="' + idd1 + '" name="' + name1 + '" ></select><button class="btn-cross" onclick="deleteitem(this)">X</button></h4>')
                    for (let t in sunil) {
                        $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(sunil[t])
                    }

                }
                else if (($('.readonly').is(':checked') && $('.required').is(':checked'))) {
                    var selection = $('.option1').val();
                    var nik = selection.split(',');
                    var sunil = [];
                    $.each(nik, function (t, v) {
                        t = t + 1;
                        sunil.push('<option value=' + v + '>' + v + '</option>')
                    })
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h4><label class="d-block" for="' + lab + '">' + lab + '</label><select readonly required  class="' + clss + '" id="' + idd1 + '" name="' + name1 + '" ></select><button class="btn-cross" onclick="deleteitem(this)">X</button></h4>')
                    for (let t in sunil) {
                        $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(sunil[t])
                    }
                }
                else if ($('.readonly').is(':checked')) {
                    var selection = $('.option1').val();
                    var nik = selection.split(',');
                    var sunil = [];
                    $.each(nik, function (t, v) {
                        t = t + 1;
                        sunil.push('<option value=' + v + '>' + v + '</option>')
                    })
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h4><label class="d-block" for="' + lab + '">' + lab + '</label><select readonly  class="' + clss + '" id="' + idd1 + '" name="' + name1 + '"  ></select><button class="btn-cross" onclick="deleteitem(this)">X</button></h4>')
                    for (let t in sunil) {
                        $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(sunil[t])
                    }

                }
                else if ($('.disabled').is(':checked')) {
                    var selection = $('.option1').val();
                    var nik = selection.split(',');
                    var sunil = [];
                    $.each(nik, function (t, v) {
                        t = t + 1;
                        sunil.push('<option value=' + v + '>' + v + '</option>')
                    })
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h4><label class="d-block" for="' + lab + '">' + lab + '</label><select disabled class="' + clss + '" id="' + idd1 + '" name="' + name1 + '" ></select><button class="btn-cross" onclick="deleteitem(this)">X</button></h4>')
                    for (let t in sunil) {
                        $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(sunil[t])
                    }
                }
                else if ($('.required').is(':checked')) {
                    var selection = $('.option1').val();
                    var nik = selection.split(',');
                    var sunil = [];
                    $.each(nik, function (t, v) {
                        t = t + 1;
                        sunil.push('<option value=' + v + '>' + v + '</option>')
                    })
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h4><label class="d-block" for="' + lab + '">' + lab + '</label><select  required class="' + clss + '" id="' + idd1 + '" name="' + name1 + '"  ></select><button class="btn-cross" onclick="deleteitem(this)">X</button></h4>')
                    for (let t in sunil) {
                        $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(sunil[t])
                    }

                }
                else {
                    var selection = $('.option1').val();
                    var nik = selection.split(',');
                    var sunil = [];
                    $.each(nik, function (t, v) {
                        t = t + 1;
                        sunil.push('<option value=' + v + '>' + v + '</option>')
                    })
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  ").append('<h4><label class="d-block" for="' + lab + '">' + lab + '</label><select class="' + clss + '" id="' + idd1 + '" name="' + name1 + '"  ></select><button class="btn-cross" onclick="deleteitem(this)">X</button></h4>')
                    for (let t in sunil) {
                        $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")  select  ").append(sunil[t])
                    }
                }
            }
            if ((textinput3 !== "select") && (textinput3 !== "textarea")) {

                if (($('.readonly').is(':checked') && $('.required').is(':checked')) && $('.disabled').is(':checked')) {
                    var data = '<h6><label class = "d-block" for = '+lab+'> ' + lab + '</label><input type = "' + textinput3 + '" class = "' + clss + '" id = "' + idd1 + '" label = "' + lab + '" placeholder = "' + place + '" value = "' + value + '" name = "' + name1 + '" action = "' + actt + '" readonly disabled  required  /><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " </p>");
                }
                else if (($('.readonly').is(':checked') && $('.disabled').is(':checked'))) {
                    var data = '<h6><label class = "d-block" for = '+lab+'> ' + lab + '</label><input type = "' + textinput3 + '" class = "' + clss + '" id = "' + idd1 + '" label = "' + lab + '" placeholder = "' + place + '" value = "' + value + '" name = "' + name1 + '" action = "' + actt + '"  readonly disabled  /><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + "</p>");

                }
                else if (($('.disabled').is(':checked') && $('.required').is(':checked'))) {
                    var data = '<h6><label class = "d-block" for = '+lab+'> ' + lab + '</label><input type = "' + textinput3 + '" class = "' + clss + '" id = "' + idd1 + '" label = "' + lab + '" placeholder = "' + place + '" value = "' + value + '" name = "' + name1 + '" action = "' + actt + '"   disabled  required /><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " </p>");

                }
                else if (($('.readonly').is(':checked') && $('.required').is(':checked'))) {
                    var data = '<h6><label class = "d-block" for = '+lab+'> ' + lab + '</label><input type = "' + textinput3 + '" class = "' + clss + '" id = "' + idd1 + '" label = "' + lab + '" placeholder = "' + place + '" value ="' + value + '" name = "' + name1 + '" action= " ' + actt + '"   readonly required /><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " </p>");

                }
                else if ($('.readonly').is(':checked')) {
                    var data = '<h6><label class = "d-block" for = '+lab+'> ' + lab + '</label><input type = "' + textinput3 + '" class = "' + clss + '" id = "' + idd1 + '" label = "' + lab + '" placeholder = "' + place + '" value = "' + value + '" name = "' + name1 + '" action = "' + actt + '"  readonly   /><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " </p>");
                }

                else if ($('.disabled').is(':checked')) {
                    var data = 'h6><label class = "d-block" for = '+lab+'> ' + lab + '</label><input type = "' + textinput3 + '" class = "' + clss + '" id = "' + idd1 + '" label = "' + lab + '" placeholder = "' + place + '" value = "' + value + '" name = "' + name1 + '" action = "' + actt + '"   disabled  /><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " </p>");
                }
                else if ($('.required').is(':checked')) {
                    var data = '<h6><label class = "d-block" for = '+lab+'> ' + lab + '</label><input type = "' + textinput3 + '" class = "' + clss + '" id = "' + idd1 + '" label = "' + lab + '" placeholder = "' + place + '" value = "' + value + '" name = "' + name1 + '" action = "' + actt + '"  required  /><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " </p>");
                }
                else {
                    var data = '<h6><label class = "d-block" for = '+lab+'> ' + lab + '</label><input type = "' + textinput3 + '" class = "' + clss + '" id = "' + idd1 + '" label = "' + lab + '" placeholder = "' + place + '" value = "' + value + '" name = "' + name1 + '" action = "' + actt + '"    /><button class="btn-cross" onclick="deleteitem(this)">X</button></h6>'
                    $("#main-container section:nth-child(" + heading + ") div:nth-child(" + sub_heading + ")").append("<p class='input'>" + data + " </p>");
                }
                console.log(data)

            }
            $('.form-3')[0].reset();
            // Sort();
            Dataitem();
            
        });
    });
});

function Dataitem() {

    Segnotech = [];
    $('#main-container section').each(function (key) {
        key = key + 1
        var nik = $(this).children('h1').text()
        var hmd = []
        $(this).children('div h5').each(function (event) {
            console.log($(this).text())
        })
        $("#main-container section:nth-child(" + key + ") div").each(function (n) {
            console.log($(this).text(), nik)
            var Sub_H = $(this).children('h5').text()
            var shmd = []
            n = n + 3
            $("#main-container section:nth-child(" + key + ") div:nth-child(" + n + ") h6").each(function (r) {
                shmd.push(([$(this).html()]))
            })

            var select = []

            $("#main-container section:nth-child(" + key + ") div:nth-child(" + n + ") h4 ").each(function (r) {
                select.push(([$(this).html()]))
            })
            var textarea = []

            $("#main-container section:nth-child(" + key + ") div:nth-child(" + n + ") p ").each(function (p) {
                textarea.push(([$(this).html()]))
            })
            hmd.push({ subtitle: Sub_H, form: shmd, select: select, textarea: textarea })
        })
        console.log(hmd[0])
        Segnotech.push({ 'heading': nik, 'subheading': hmd })
        localStorage.setItem('Segnotech', JSON.stringify(Segnotech));
        JSON.parse(localStorage.getItem('Segnotech'));
    })
}


// function Sort(event){
$(function (event) {

    $("#main-container").sortable({

        change: function (event, ui) {
            Dataitem();
            // $('form section').remove()
            // getDataitem();
        },
        update: function (event, ui) {
            Dataitem();
            $('#main-container section').remove()
            getDataitem();
            // location.reload();
        },
    });

    $("section").sortable({

        change: function (event, ui) {
            Dataitem();
        },
        update: function (event, ui) {
            Dataitem();
            // $('form section').remove();
            // getDataitem();
            // getDataitem();  
        },
        cancel: "#main-container",

    });

    // $(".container").sortable({

    //   change:function(event,ui){
    //     getDataitem();
    //     $('form section').remove();
    //   },

    //   update: function (event, ui) {
    //   $('form section').remove();
    //   getDataitem();
    //     Dataitem();
    //     // getDataitem();

    //   },
    //   connectWith:"div",
    //   cancel:"h5,.btn-cross",

    // });
    $('#main-container').disableSelection();
    getDataitem();
    Dataitem();
})
// };

function deleteitem(s) {
    $(s).parent().remove();
    window.localStorage.clear();
    Dataitem();
}
