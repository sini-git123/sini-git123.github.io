

function validFormFieldInput() 
{
    //Validate trip type
    var triptype=document.getElementsByName('triptype');
    if (!(triptype[0].checked || triptype[1].checked)) {
        alert("Please Select Your Trip Type");
        return false;
    }   


   //Validate From and To Field
  let from=document.getElementById('from');
  if (!(from.value)>0) {
      alert("Please select From City");
      return false;
  }   
  
  //Validate destination
  let to=document.getElementById('to');
  if (!(to.value)>0) {
      alert("Please select To City");
      return false;
  }   

  //Validate date
  let dateval1=document.getElementById('date-picker-example');
  let date1 = new Date(dateval1.value);
  
  if(isFutureDate(date1))
   {
     alert('Departure date is not greater than the current date.');
     return false;
   }

  if (!(dateval1.value)>0) {
      alert("Please select To Departure date");
      return false;
  }  
  let dateval2=document.getElementById('date-picker-example1');
  let date2 = new Date(dateval2.value);
  
   if(isFutureDate(dateval2.value))
   {
      alert('Return date is not greater than the current date.');
      return false;
    }
 
  if (!(dateval2.value)>0 && (triptype[1].checked)) {
      alert("Please select To Return date");
      return false;
  }  
  if(date1 >date2) {
    alert("Return date should be greater than departure date");
      return false;
  }
 

  //Validate no of passengers
  let kid=document.getElementById('kids');
  let adult=document.getElementById('adult')

  if  (!(adult.value>0) || !(kid.value>0) ) {
      alert("Please select number of passengers");
      return false;
  }   
 

    //Validate username
    let username=document.getElementById('username').value;
   
    if((username.length) === 0)
    {
        alert("Please enter the name");
        return false;
    }
    else if((username.length)<5) {
        alert("Please enter the minimum five characters for name");
        return false;
    }
    else{

    }   


      //Validate gender
      let gender=document.getElementsByName('gender');
      if (!(gender[0].checked || gender[1].checked)) {
          alert("Please select  gender");
          return false;
      }   

      //Validate age

      let age = parseInt(document.myform.age.value);
    
        if(isNaN(age)) {
         alert("Please enter a number for age");
          return false;
        }    
     
      //Validate email

      let emailid =document.getElementById('email').value;
    
        if(emailid.length === 0) {
         alert("Please enter valid email");
          return false;
        }  
        
       
        //validate a phone number of 10 digits with no comma, 
        //no spaces, no punctuation and there will be no + sign in front the number. 

      let phoneno =document.getElementById('phoneno').value;
      let phonenovalid = /^\d{10}$/;

      if(phoneno.length === 0) {
        alert("Please enter valid phonenumber");
        return false;
      }  
     
      else if (!(phoneno.match(phonenovalid))){
        alert("Please enter valid phonenumber");
        return false;
        
      }
      else
      {
         
      }
    alert("Flight details are send to your email.Thank you !! ");
    return false;
}

    
//Future date checking

function isFutureDate(idate){
    let CurrentDate = new Date();
    idate = new Date(idate);
    console.log(CurrentDate);
    console.log(idate);
    if(idate < CurrentDate){
        
        return true;
    }
    else{
        return false;
    }
}


//Update the passenger form according to number of passenger selection
function passenger() {
    document.getElementById('passdet').style.display = "none";
    
    let kids=document.getElementById("kids").value;
    
     
    let adults=document.getElementById("adult").value;
    if( kids === '')
   
    {
        kids=0;
       
    }
    if (adults === '')
    {
       
        adults=0;
    }
     console.log(kids);
     console.log(adults);
    
     //console.log(typeof adults);
     //console.log(typeof kids);
    
    let selectedIndex=parseInt(kids)+parseInt(adults);
    

    console.log(selectedIndex);
    if(selectedIndex!=0) 
           document.getElementById('passdet').style.display = "inline";
           
           const kidsInt=parseInt(kids);
           let count =kidsInt;
            
           if(parseInt(kidsInt) > 0){
            
            addNewPassenger((selectedIndex-kidsInt),count); 
            

           }
           else{
            
            addNewPassenger(selectedIndex,count); 

           }
           
           
           //document.getElementById("numpass").innerHTML=`Add All ${selectedIndex} passenger details` ;

 


}
//dynamically add new passenger details


function addNewPassenger(nopass,count) {
 
  const passdet=document.querySelector('.passdet');
  
  
  for(i=0;i<nopass;i++)
  {
    
        var heading = document.createElement("H6");
        heading.innerHTML=`Passenger Details:${count}`;
        var name = document.createElement("DIV");
        name.className='col-sm-4';
        var  nameLabel = document.createElement("label");
        nameLabel.innerHTML='Name:';
        var nametext = document.createElement("INPUT");
        nametext.setAttribute("type", "text");

        var gender = document.createElement("DIV");
        gender.className='col-sm-4';
        var genderLabel = document.createElement("label");
        genderLabel.innerHTML='Gender:'
        genderLabel.className='col-sm-4';

        var maleLabel = document.createElement("label");
        maleLabel.innerHTML='Male'
        var m = document.createElement("INPUT");
            m.setAttribute("type", "radio");

        var femaleLabel = document.createElement("label");

        femaleLabel.innerHTML='Female'
        var f = document.createElement("INPUT");
        f.setAttribute("type", "radio");
        
        var age = document.createElement("DIV");
        age.className='col-sm-4';
        var  ageLabel = document.createElement("label");
        ageLabel.className='col-sm-4';
        ageLabel.innerHTML='Age:'
        var ageval = document.createElement("INPUT");
        ageval.setAttribute("type", "text");
            
        passdet.appendChild(heading);
        passdet.appendChild(name);
        name.appendChild(nameLabel);
        name.appendChild(nametext);

        passdet.appendChild(gender);
        gender.appendChild(genderLabel);
        gender.appendChild(maleLabel);
        gender.appendChild(m);
        gender.appendChild(femaleLabel);
        gender.appendChild(f);

        passdet.appendChild(age);
        age.appendChild(ageLabel);
        age.appendChild(ageval);
        count++;
  }

}

