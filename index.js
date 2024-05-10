        //--------------- clear -----------
        document.querySelector("#clear").addEventListener("click",() =>{
            document.querySelector("#display").value = " ";

        })

    //------------- Back space--------------
    const backSpace = () => {
    const num = document.querySelector("#display").value.slice(0, -1);
        document.querySelector("#display").value = num ;  
    }

    // -------------fonction addition---------
            const addition= () =>{
                document.calculator.display.value+= '+'
                    }

    // ------ fonction soustraction -----------
            const soustraction = () => {
                document.calculator.display.value += '-'
                }
    // -----------function multiplication-----------
            const multiplication = () =>{
                document.calculator.display.value += '*'
            }
    // -----------fonction modulo -----------------
    const modulo = () =>{
        document.calculator.display.value += '%'
    }
    //--------- fonction division-------------------
     const division = () =>{
        document.calculator.display.value += '/'
     }

  

    //-------------- FONCTION ONE ou Un -----------
    const one = () => {
        document.querySelector("#display").value = document.querySelector("#display").value +"1"
    }
    //-------------- FONCTION two ou deux -----------
    const two = () => {
            document.querySelector("#display").value = document.querySelector("#display").value + "2";
    }

    //-------------- FONCTION three ou trois -----------
    const three = () => {
            document.querySelector("#display").value = document.querySelector("#display").value + "3";
    }
    //-------------- FONCTION four ou quatre -----------
    const four = () => {
            document.querySelector("#display").value = document.querySelector("#display").value + "4";
    }
    //-------------- FONCTION FIVE ou CINQUE -----------
    const five = () => {
            document.querySelector("#display").value = document.querySelector("#display").value + "5";
    }

    /* const five = () => {
        if(document.querySelector("#display").value == " "){
            document.querySelector("#display").value == "5" ;
        }
        else{
            document.querySelector("#display").value = document.querySelector("#display").value + "5";
        }
    }*/
    //-------------- FONCTION six ou  -----------
    const six = () => {
            document.querySelector("#display").value = document.querySelector("#display").value + "6";
    }
    //-------------- FONCTION seven ou sept -----------
    const seven = () => {
            document.querySelector("#display").value = document.querySelector("#display").value + "7";
    }
    //-------------- FONCTION eight ou huite -----------
    const eight = () => {
            document.querySelector("#display").value = document.querySelector("#display").value + "8";

    }
    //-------------- FONCTION NINE ou NEUF -----------
    const nine = () => {
            document.querySelector("#display").value = document.querySelector("#display").value + "9";
    }
    //-------------- FONCTION zero ou zero -----------
    const zero = () => {
            document.querySelector("#display").value = document.querySelector("#display").value + "0";
    }
    //-------------- FONCTION point ou point -----------
    const point = () => {
            document.querySelector("#display").value = document.querySelector("#display").value + ".";
    }

   //------------- fonction egal--------------
   const egal = () => {
        document.calculator.display.value = eval(calculator.display.value)     
    }