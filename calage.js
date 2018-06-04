function Age()
 {

	var bday=parseInt(document.forms[0].bdate.value);
	var bmo=(parseInt(document.forms[0].bmonth.value));
	var byr=parseInt(document.forms[0].byear.value);
	var tdyears;
	var i;
	var tlpyr = 0, tnlpyr = 0;
	var tl, tdayslp, tdaysnlp;
	var tby31 = 0, tby30 = 0;
	var tdby31, tdby30, tdby;
	var nbf, npf;
	var tdbm = 0, tdpm = 0;
	var tpy31 = 0, tpy30 = 0;
	var tdpy31 ,tdpy30, tdpy;
  var tdOfAge;
	var now = new Date();
	tday=now.getDate();
	tmo=(now.getMonth()+1);
	tyr=(now.getFullYear());

  alert(bday + " " + bmo + " " + byr);
   

 if((bday >=1 && bday <= 31) && (bmo >= 1 && bmo <= 12) && (byr >=1800 && byr <= tyr))
  
{   
	var isLeapYear = function(year)
	{
		return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
	}
  
	for(i = byr+1; i < tyr; i++)
	 {
	 	if (isLeapYear(i))
	 	{
	 		tlpyr++;
	 	}
	 	else
	 	{
	 		tnlpyr++;
	 	}
     }   
       tdayslp=(366*tlpyr);
       tdaysnlp=(365*tnlpyr);

       tdyears=tdaysnlp+tdayslp;
    
 
    var is31Month = function(month)
    {
    	return ((month == 1) || (month == 3) || (month==5) || (month==7) || (month==8) || (month==10) || (month==12));
    }

    var is30Month = function(month)
    {
    	return ((month==4) || (month==6) || (month==9) || (month==11));
    }


    for(i=bmo+1; i <= 12; i++)
      {
       	if(is31Month(i))
       	{
       		tby31++;
       	}
       	else if (is30Month(i))
       	{
       		tby30++;
       	}
      }
         
       tdby31=(31*tby31);
       tdby30=(30*tby30);

     //  tdby=tdby30+tdby31;

    if(isLeapYear(byr))
      {
      	nbf=29;
      }
      else
      {
      	nbf=28;
      }
     
      if (bmo >= 2) 
       {
       	tdby=tdby30+tdby31;
       }
       else
       {
       	tdby=tdby30+tdby31+nbf;
       }
    
      //alert(tdby);

   for(i = 1; i < tmo; i++)
    {
      
       	if(is31Month(i))
       	{
       		tpy31++;
       	}
       	else if (is30Month(i))
       	{
       		tpy30++;
       	}
    }

       tdpy31=(31*tpy31);
       tdpy30=(30*tpy30);
       
       tdpy=tdpy31+tdpy30;

       //alert(tdpy);
    
     if(isLeapYear(tyr))
      {
      	npf=29;
      }
      else
      {
      	npf=28;
      }

      //alert(nf);
    
    if (tmo < 2) 
      
       {
       	tdpy=tdpy30+tdpy31;
       }
         else
       {
       	 tdpy=tdpy30+tdpy31+npf;
       }


    if(is31Month(bmo))
    {
    	for(i=bday+1; i<=31; i++)
    	{
    		tdbm++;
    	}
    }


   else if (is30Month(bmo)) 
    {
    	for(i=bday+1; i<=30; i++)
    	{
    		tdbm++;
    	}
    }

    if(isLeapYear(byr))
    {
    	if(bmo==2)
    	{
    		for(i=bday+1; i<=29; i++)
    		{
    			tdbm++;
    		}
    	}
    }
    else
    {
    	if(bmo==2)
    	{
    		for(i=bday+1; i<=28; i++)
    		{
    			tdbm++;
    		}
    	}
    }

     
    {
    	for(i=1; i<=tday; i++)
    	{
    		tdpm++;
    	}
    }

   tdOfAge = tdyears+tdby+tdpy+tdbm+tdpm;
	
	

    alert("Wohooo !!! You have spend "+tdOfAge+ " days of your life  .. MAY YOU LIVE LONG");
	   
}
	
	else 
   {
    alert("INVALID DATE OF BIRTH");
   }
   
}
