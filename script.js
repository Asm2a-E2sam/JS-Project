//---------------------------------------------------------register---------------------------------------------------------

try{
    const start =document.getElementById("start")
    
    start.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "register.html";
    });
}
catch{}

try{
    const reg =document.getElementById("signup");
        
    reg.addEventListener("click",function(event){
        event.preventDefault();
        window.location.href = "index.html";

    });
}
catch{}

//--------------------------------------------------------------check answer1--------------------------------------------------
try{
    const form = document.getElementById("page1");


    form.addEventListener("submit", function(event) {
    event.preventDefault();
    const selectedAnswer1 = form.querySelector("input[name='q1']:checked");
    const selectedAnswer2 = form.querySelector("input[name='q2']:checked");
    const selectedAnswer3 = form.querySelector("input[name='q3']:checked");
    const selectedAnswer4 = form.querySelector("input[name='q4']:checked");
    const selectedAnswer5 = form.querySelector("input[name='q5']:checked");

        try {
            if (
                selectedAnswer1.value === "a1_1" &&
                selectedAnswer2.value === "a2_1" &&
                selectedAnswer3.value === "a3_2" &&
                selectedAnswer4.value === "a4_1" &&
                selectedAnswer5.value === "a5_2"  
            
            ) 
        
            {
            window.location.href = "success1.html";
            } 
            
            else {
                selectedAnswer1.value;selectedAnswer2.value;selectedAnswer3.value;selectedAnswer4.value;selectedAnswer5
                window.location.href = "failing1.html";
            }
        }
        catch {alert("جاوب على جميع الاسئله قبل الانتهاء")}

    
    });
}
catch{}
//--------------------------------------------------------------check answer2--------------------------------------------------
try{
    const form = document.getElementById("page2");


    form.addEventListener("submit", function(event) {
    event.preventDefault();
    const selectedAnswer1 = form.querySelector("input[name='q1']:checked");
    const selectedAnswer2 = form.querySelector("input[name='q2']:checked");
    const selectedAnswer3 = form.querySelector("input[name='q3']:checked");
    const selectedAnswer4 = form.querySelector("input[name='q4']:checked");
    const selectedAnswer5 = form.querySelector("input[name='q5']:checked");

        try {
            if (
                selectedAnswer1.value === "a1_1" &&
                selectedAnswer2.value === "a2_1" &&
                selectedAnswer3.value === "a3_2" &&
                selectedAnswer4.value === "a4_1" &&
                selectedAnswer5.value === "a5_2"  
            
            ) 
        
            {
            window.location.href = "success2.html";
            } 
            
            else {
                selectedAnswer1.value;selectedAnswer2.value;selectedAnswer3.value;selectedAnswer4.value;selectedAnswer5
                window.location.href = "failing2.html";
            }
        }
        catch {alert("جاوب على جميع الاسئله قبل الانتهاء")}

    
    });
}
catch{}
//--------------------------------------------------------------check answer3--------------------------------------------------
try{
    const form = document.getElementById("page3");


    form.addEventListener("submit", function(event) {
    event.preventDefault();
    const selectedAnswer1 = form.querySelector("input[name='q1']:checked");
    const selectedAnswer2 = form.querySelector("input[name='q2']:checked");
    const selectedAnswer3 = form.querySelector("input[name='q3']:checked");
    const selectedAnswer4 = form.querySelector("input[name='q4']:checked");
    const selectedAnswer5 = form.querySelector("input[name='q5']:checked");

        try {
            if (
                selectedAnswer1.value === "a1_1" &&
                selectedAnswer2.value === "a2_1" &&
                selectedAnswer3.value === "a3_2" &&
                selectedAnswer4.value === "a4_1" &&
                selectedAnswer5.value === "a5_2"  
            
            ) 
        
            {
            window.location.href = "success3.html";
            } 
            
            else {
                selectedAnswer1.value;selectedAnswer2.value;selectedAnswer3.value;selectedAnswer4.value;selectedAnswer5
                window.location.href = "failing3.html";
            }
        }
        catch {alert("جاوب على جميع الاسئله قبل الانتهاء")}

    
    });
}
catch{}
//--------------------------------------------------------------check answer4--------------------------------------------------
try{
    const form = document.getElementById("page4");


    form.addEventListener("submit", function(event) {
    event.preventDefault();
    const selectedAnswer1 = form.querySelector("input[name='q1']:checked");
    const selectedAnswer2 = form.querySelector("input[name='q2']:checked");
    const selectedAnswer3 = form.querySelector("input[name='q3']:checked");
    const selectedAnswer4 = form.querySelector("input[name='q4']:checked");
    const selectedAnswer5 = form.querySelector("input[name='q5']:checked");

        try {
            if (
                selectedAnswer1.value === "a1_1" &&
                selectedAnswer2.value === "a2_1" &&
                selectedAnswer3.value === "a3_2" &&
                selectedAnswer4.value === "a4_1" &&
                selectedAnswer5.value === "a5_2"  
            
            ) 
        
            {
            window.location.href = "success4.html";
            } 
            
            else {
                selectedAnswer1.value;selectedAnswer2.value;selectedAnswer3.value;selectedAnswer4.value;selectedAnswer5
                window.location.href = "failing4.html";
            }
        }
        catch {alert("جاوب على جميع الاسئله قبل الانتهاء")}

    
    });
}
catch{}
//--------------------------------------------------------------check answer5--------------------------------------------------
try{
    const form = document.getElementById("page5");


    form.addEventListener("submit", function(event) {
    event.preventDefault();
    const selectedAnswer1 = form.querySelector("input[name='q1']:checked");
    const selectedAnswer2 = form.querySelector("input[name='q2']:checked");
    const selectedAnswer3 = form.querySelector("input[name='q3']:checked");
    const selectedAnswer4 = form.querySelector("input[name='q4']:checked");
    const selectedAnswer5 = form.querySelector("input[name='q5']:checked");

        try {
            if (
                selectedAnswer1.value === "a1_2" &&
                selectedAnswer2.value === "a2_1" &&
                selectedAnswer3.value === "a3_2" &&
                selectedAnswer4.value === "a4_1" &&
                selectedAnswer5.value === "a5_2"  
            
            ) 
        
            {
            window.location.href = "success5.html";
            } 
            
            else {
                selectedAnswer1.value;selectedAnswer2.value;selectedAnswer3.value;selectedAnswer4.value;selectedAnswer5
                window.location.href = "failing5.html";
            }
        }
        catch {alert("جاوب على جميع الاسئله قبل الانتهاء")}

    
    });
}
catch{}
//--------------------------------------------------------------check answer6--------------------------------------------------
try{
    const form = document.getElementById("page6");


    form.addEventListener("submit", function(event) {
    event.preventDefault();
    const selectedAnswer1 = form.querySelector("input[name='q1']:checked");
    const selectedAnswer2 = form.querySelector("input[name='q2']:checked");
    const selectedAnswer3 = form.querySelector("input[name='q3']:checked");
    const selectedAnswer4 = form.querySelector("input[name='q4']:checked");
    const selectedAnswer5 = form.querySelector("input[name='q5']:checked");

        try {
            if (
                selectedAnswer1.value === "a1_1" &&
                selectedAnswer2.value === "a2_1" &&
                selectedAnswer3.value === "a3_2" &&
                selectedAnswer4.value === "a4_1" &&
                selectedAnswer5.value === "a5_2"  
            
            ) 
        
            {
            window.location.href = "success6.html";
            } 
            
            else {
                selectedAnswer1.value;selectedAnswer2.value;selectedAnswer3.value;selectedAnswer4.value;selectedAnswer5
                window.location.href = "failing6.html";
            }
        }
        catch {alert("جاوب على جميع الاسئله قبل الانتهاء")}

    
    });
}
catch{}
//--------------------------------------------------------------success page1--------------------------------------------------

try{
const next =document.getElementById("next1")
const main =document.getElementById("main")

next.addEventListener("click",function(event){
    event.preventDefault();

    window.location.href = "sura2.html";
});
main.addEventListener("click",function(event){
    event.preventDefault();

    window.location.href = "index.html";
});
}
catch{}

    //--------------------------------------------------------------success page2--------------------------------------------------

try{
    const next =document.getElementById("next2")
    const main =document.getElementById("main")
    
    next.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "sura3.html";
    });
    main.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "index.html";
    });
    }
    catch{}
    //--------------------------------------------------------------success page3--------------------------------------------------

try{
    const next =document.getElementById("next3")
    const main =document.getElementById("main")
    
    next.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "sura4.html";
    });
    main.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "index.html";
    });
    }
    catch{}
    //--------------------------------------------------------------success page4--------------------------------------------------

try{
    const next =document.getElementById("next4")
    const main =document.getElementById("main")
    
    next.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "sura5.html";
    });
    main.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "index.html";
    });
    }
    catch{}
    //--------------------------------------------------------------success page5--------------------------------------------------

    try{
        const next =document.getElementById("next5")
        const main =document.getElementById("main")
        
        next.addEventListener("click",function(event){
            event.preventDefault();
        
            window.location.href = "sura6.html";
        });
        main.addEventListener("click",function(event){
            event.preventDefault();
        
            window.location.href = "index.html";
        });
        }
        catch{}
//--------------------------------------------------------------goto sura5 page--------------------------------------------------

try{
    const next =document.getElementById("sura1")

next.addEventListener("click",function(event){
    event.preventDefault();

    window.location.href = "sura1.html";
});

}
catch{}
//--------------------------------------------------------------failing page1--------------------------------------------------


try{
    const next =document.getElementById("sura2")

next.addEventListener("click",function(event){
    event.preventDefault();

    window.location.href = "sura2.html";
});

}
catch{}
//--------------------------------------------------------------failing page1--------------------------------------------------


try{
    const next =document.getElementById("sura2")

next.addEventListener("click",function(event){
    event.preventDefault();

    window.location.href = "sura2.html";
});

}
catch{}
//--------------------------------------------------------------failing page--------------------------------------------------


try{
    const next =document.getElementById("sura3")

next.addEventListener("click",function(event){
    event.preventDefault();

    window.location.href = "sura3.html";
});

}
catch{}
//--------------------------------------------------------------failing page--------------------------------------------------


try{
    const next =document.getElementById("sura4")

next.addEventListener("click",function(event){
    event.preventDefault();

    window.location.href = "sura4.html";
});

}
catch{}
//--------------------------------------------------------------failing page--------------------------------------------------


try{
    const next =document.getElementById("sura5")

next.addEventListener("click",function(event){
    event.preventDefault();

    window.location.href = "sura5.html";
});

}
catch{}
//--------------------------------------------------------------failing page--------------------------------------------------


try{
    const next =document.getElementById("sura6")

next.addEventListener("click",function(event){
    event.preventDefault();

    window.location.href = "sura6.html";
});

}
catch{}
//--------------------------------------------------------------try1 page--------------------------------------------------

try{
    const next =document.getElementById("try1")
    const main =document.getElementById("main")
    
    next.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "exam1.html";
    });
    main.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "index.html";
    });
    }
catch{}
//--------------------------------------------------------------try2 page--------------------------------------------------

try{
    const next =document.getElementById("try2")
    const main =document.getElementById("main")
    
    next.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "exam2.html";
    });
    main.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "index.html";
    });
    }
catch{}
//--------------------------------------------------------------try3 page--------------------------------------------------

try{
    const next =document.getElementById("try3")
    const main =document.getElementById("main")
    
    next.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "exam3.html";
    });
    main.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "index.html";
    });
    }
catch{}
//--------------------------------------------------------------try4 page--------------------------------------------------

try{
    const next =document.getElementById("try4")
    const main =document.getElementById("main")
    
    next.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "exam4.html";
    });
    main.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "index.html";
    });
    }
catch{}
//--------------------------------------------------------------try5 page--------------------------------------------------

try{
    const next =document.getElementById("try5")
    const main =document.getElementById("main")
    
    next.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "exam5.html";
    });
    main.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "index.html";
    });
    }
catch{}
//--------------------------------------------------------------try6 page--------------------------------------------------

try{
    const next =document.getElementById("try6")
    const main =document.getElementById("main")
    
    next.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "exam6.html";
    });
    main.addEventListener("click",function(event){
        event.preventDefault();
    
        window.location.href = "index.html";
    });
    }
catch{}
//--------------------------------------------------------------goto exam1 page--------------------------------------------------

try{
    const next =document.getElementById("exam1")

next.addEventListener("click",function(event){
    event.preventDefault();

    window.location.href = "exam1.html";
});

}
catch{}
//--------------------------------------------------------------goto exam2 page--------------------------------------------------

try{
    const next =document.getElementById("exam2")

next.addEventListener("click",function(event){
    event.preventDefault();

    window.location.href = "exam2.html";
});

}
catch{}
//--------------------------------------------------------------goto exam3 page--------------------------------------------------

try{
    const next =document.getElementById("exam3")

next.addEventListener("click",function(event){
    event.preventDefault();

    window.location.href = "exam3.html";
});

}
catch{}
//--------------------------------------------------------------goto exam4 page--------------------------------------------------

try{
    const next =document.getElementById("exam4")

next.addEventListener("click",function(event){
    event.preventDefault();

    window.location.href = "exam4.html";
});

}
catch{}
//--------------------------------------------------------------goto exam5 page--------------------------------------------------

try{
    const next =document.getElementById("exam5")

next.addEventListener("click",function(event){
    event.preventDefault();

    window.location.href = "exam5.html";
});

}
catch{}
//--------------------------------------------------------------goto exam6 page--------------------------------------------------

try{
    const next =document.getElementById("exam6")

next.addEventListener("click",function(event){
    event.preventDefault();

    window.location.href = "exam6.html";
});

}
catch{}