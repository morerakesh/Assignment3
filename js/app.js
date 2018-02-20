 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {
    
	$('#about').hide();
	$('#feeds').hide();
    var myFacebookToken = 'EAACEdEose0cBAF55gMHz8OZCua5uLTZBNLZCSrcitj21qosHXA5G5IFYtVimuhnj5PIcZChpgyoMWyjnYj9cFnmBLtVIgLyYlCRXqYka3mfDvpsEiazjL0JYha4twZC6hHohKEtudogEEVxYYmAodKZBILCoXEj57KYQdfMs3jmfdis2nk4fTtgKlFLT4eAoAkzdoZCPPWgBQZDZD';
    
    function getFacebookInfo(){
		

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
					$("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    //$("#myWork").text(response.work.employer.name);
                    $("#myEducation").text(response.education);
                    $("#myBirthday").text(response.birthday);
					$("#myHomeTown").text(response.hometown);

                }
            }//end argument list 



        );// end ajax call 
		
		$('#about').show();


    }// end get facebook info
	
	function getFeedData(data){
		var messages = '<br>';
		for (x in data)
		{
		if(data[x].message != undefined)
		{
		messages = messages + data[x].message + "<br><br>";
		}
		
		}
		return messages;
	}
	function getFacebookFeedInfo(){

        $.ajax('https://graph.facebook.com/me/feed?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
					$("#myMessages").html(getFeedData(response.data));
                    

                }
            }//end argument list 



        );// end ajax call 
		
		$('#feeds').show();


    }// end get facebook info

    $("#aboutme").on('click',getFacebookInfo)
	$("#myfeeds").on('click',getFacebookFeedInfo)



  });