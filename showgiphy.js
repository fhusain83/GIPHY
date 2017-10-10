
$(document).ready(
	function(){
   

$(document).on("click",".btn",function(e)
{
  var name=  $(this).attr('id');
 


  
if($(this).attr("id")==="submit")
{
  var searchparam=$("#SearchPara").val();
  CallGiphy(searchparam);
}

    if($(this).attr('id')==="AddText")
    {
      
    
     var NewDivCol=$("<div class='col-sm-2'></div>");
     var NewBtnName=$("#NewButtonText").val();
     var NewButton=$("<BUTTON class='btn btn-default'>"+NewBtnName+"</BUTTON>");

   
        NewButton.attr("id","btn"+NewBtnName);
        NewDivCol.append(NewButton);
         $("#MainArea").append(NewDivCol);
     
        
    }

  
    if(name.indexOf("btn")!==-1)
    {
      e.preventDefault();
      var searchparam=$(this).text();
      CallGiphy(searchparam);
        
    }

function CallGiphy(searchparam)
{
  var res=[];

  
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=UQF9YtOQCvRFU8xzWyP5xVUi2JyE81uh&q="+searchparam+"&limit=25&offset=0&rating=G&lang=en";
  
      $.ajax({
        url: queryURL,
        method: 'GET',
        error:function(response)
        {}
      }).done(function(response) {
        for(var res=1;res<5;res++)
        {
          var giphyURL = response.data[res].embed_url;
         $("#abc_frame"+res).attr("src", giphyURL); 
  
        }
      });


}
    e.preventDefault();
});
});

