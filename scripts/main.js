let wallet=[];
  function submit(){
        let name=document.getElementById("name");
        let email=document.getElementById("email");
        let address=document.getElementById("address");
        let amount=document.getElementById("amount");
        // console.log(name,email,address,wallet)

        if(name==""||email==""||address==""||amount==""){
            alert("all data field maindotary")
        }else{
        wallet.push(amount.value);
        let sum=0;
        for(let i=0;i<wallet.length;i++){
            sum+=Number(wallet[i]);
        }

        let user= {
            name:name.value,
            email:email.value,
            address:address.value,
            wallet:sum,
        }
        localStorage.setItem("user",JSON.stringify(user))
    }
        name.value='';
        email.value='';
        address.value='';
        amount.value='';
    }