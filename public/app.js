 $('#articles').append($('<p>',{text:'You have no articles'}));
 var span = document.getElementsByClassName("close")[0];


$(document).on('click','#scrapebtn',function() {

            if($("#modal-1").is(':visible'))
            {
                // $("#h1").remove();
                $("#modal-1").empty()
                $('#modal-1').hide(); 
            }
            else
            {
              $("#modal-1").show(); 
              $.getJSON("/scrape", function(data){});
              $.getJSON("/articles", function(num) 
                {
                  var p = $("<h1>",{text:"  You have "+num.length +" Articles", id:"h1"});
                  $('#modal-1').append(p);
                });
            }
});

$(document).on('click','span',function() {
    $("#modal-1").empty()
    $("#modal-1").hide();
});


$(document).on('click','#okbtn',function() {

    $("#modal-1").empty()
    $("#modal-1").hide();


    $.getJSON('/articles', function(data){
        $('#articles').empty();

        for (var i = 0; i < data.length; i++) {

                var newdiv = $("<div>",{ class:"textsize"});
                var pitem = $("<p>",{id : data[i]._id, text: data[i].title});
                var pbutton = $("<button>",{id: data[i]._id, class:"save-articles", title:data[i].title, text:"Save Article"});
                newdiv.append(pitem);
                newdiv.prepend(pbutton);
              
                $('#articles').append(newdiv);
            }

        });
});

$(document).on('click','.save-articles',function()
{
              var pitem=this.title;
              var pid =this.id;

              $('#articles').empty();

              var newdiv = $("<div>",{id:"newdiv"});
              
              var newp = $('<p>',{text:pitem, id:pid});
              var tbutton = $("<button>",{id:pid, 'data-id':pid, title:pitem, class:"save-articles", text:"Save Article"});   
              
              newdiv.append(newp);
              newdiv.prepend(tbutton);
              $('#articles').append(newdiv);
})

$(document).on('click','#save-art',function()
{
            // $('#articles').empty(); 
            var title = $('#newdiv').find('p').text();
            var tid = $('#newdiv').find('button').data('id');

            $('#scrapebtn').hide();

            $('#articles').empty();

            var newdiv = $('<div>');
            var newp = $('<p>',{text:title, id:tid});

            var nbtn = $("<button>",{id:tid, title:title, text:"Article Notes", class:"s-art"});   
            var pbtn = $("<button>",{id:tid, text:"Delete From Saved", class:"d-art"})
            newdiv.append(newp);
            newdiv.prepend(pbtn,nbtn);
            $('#articles').append(newdiv);
});

$(document).on('click','.s-art',function(){
          // $("#mymodal-2").empty();
          $("#mymodal-2").show();
          var xbtn = $("<button>",{text:"x", id:'closenote', class:"closenote"});
          var dataid = this.id;
          var notecontent =$('<div>',{id:"note-content"});
          
          var h1 = $("<h4>",{text:"Note for Article: "+ dataid, id:dataid});
          var textarea1 = $("<div>",{name:'input', id:"notetitle", text:'no note for this article yet'});
          var textarea2 = $("<textarea>",{id:'notes', text:" ", name:'note', placeholder:'New Note'});
          var savenote = $("<button data-id='" + dataid + "' id='savenotebtn'>Save Note</button>"); 

          $(notecontent).append(xbtn,h1,textarea1,textarea2,savenote)
          $("#mymodal-2").append(notecontent);
});

$(document).on('click','.closenote',function(){
            $("#mymodal-2").empty();
            $("#mymodal-2").hide();
});

$(document).on('click','#savenotebtn', function(){

            // var textnote =$('<div>',{ id:"notedb", text:'no note for this article yet'});

            $(textarea1).append('#notes'.val());
            $.ajax({
                url: '/api/note/',
                type: 'post',
                headers: {
                        "Accept": "application/json",
                        "contentType": "application/json; charset=utf-8"
                            },
                dataType: 'json',
                data: {id:'data', note:'MY Name'},
                success: (result)=>{}
                });
    

});

// $(document).on("click", ".sart", function() {
// var dataid = $(this).attr('data-id');

// $.ajax({
// method: "DELETE",
// url: "/api/articles/delete/fromnote/"+dataid,
// headers: {
//   "Accept": "application/json",
//   "Content-Type": "application/json"
//  },
// data: JSON.stringify({
//   id:dataid
// // })
// })


