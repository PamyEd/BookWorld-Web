$(document).ready(function(){
   console.log("hi");
    $.ajax({
                url: "http://localhost:60064/api/book/GetGenreList/",
                type: "GET",
                dataType: 'json',
                success: function(resp){
                    console.log(resp)
                    var $dropdown = $("#ddlGenre");
                    var i = 0;
                    $dropdown.html('');
                    $dropdown.append($("<option />").val("0").text("--Select Genre--"));
                    if(resp !== null) 
                    {
                        $.each(resp, function(index, elm) {
                            $dropdown.append($("<option />").val(elm.Name).text(elm.Name));
                            i++;
                        });
                    }
                },
                error: function(xhr, status, error)
                {
                    //MsgBox("Ajax Error", error.toString());
                }
            });
});



            