
/*********************************************/
/*      For the four tab like Courses       */
/*******************************************/


function show_hide_courses(){
    var wholeCoursesDropdown = document.querySelector(".main-courses-dropdown-div");
    var click = document.getElementById("dropdownForCourses");
    var wholeDropdown = document.querySelector(".main-courses-dropdown-div");

    //Tuition tab
    var tuitioAndFeesDropdown = document.querySelector(".main-content-tuition-and-fees");
    

    //how to apply
    var howToApplyDropdown = document.querySelector(".main-content-how-to-apply");
    

    var scholarshipDropdown = document.querySelector(".main-content-scholarship");
    

    //btn
    var coursesBtn = document.querySelector(".courses-blue");
    var tuitionAndFeedBtn = document.querySelector(".tuition-and-fees-tab");
    var howToApplyBtn = document.querySelector(".how-to-apply-tab");
    var scholarshipBtn = document.querySelector(".scholarship-tab");



    if(wholeCoursesDropdown.classList.contains("slide-up")){
        wholeCoursesDropdown.classList.remove("slide-up");
        wholeCoursesDropdown.classList.add("slide-down");

        //hide the rest of the tabs
        tuitioAndFeesDropdown.classList.remove("display-block");
        tuitioAndFeesDropdown.classList.add("display-none");

        howToApplyDropdown.classList.remove("display-block");
        howToApplyDropdown.classList.add("display-none");

        scholarshipDropdown.classList.remove("display-block");
        scholarshipDropdown.classList.add("display-none");


        //add active
        coursesBtn.classList.add("four-tabs-active-1");

        tuitionAndFeedBtn.classList.remove("four-tabs-active-2");
        howToApplyBtn.classList.remove("four-tabs-active-3");
        scholarshipBtn.classList.remove("four-tabs-active-4");

        
    }
    else{
        wholeCoursesDropdown.classList.remove("display-block");
        wholeCoursesDropdown.classList.add("display-none");
        coursesBtn.classList.remove("four-tabs-active-1");
        
    }
}


function show_hide_tuition_and_fees(){
    var wholeCoursesDropdown = document.querySelector(".main-courses-dropdown-div");
    var click = document.getElementById("dropdownForCourses");
    var wholeDropdown = document.querySelector(".main-courses-dropdown-div");

    //Tuition tab
    var tuitioAndFeesDropdown = document.querySelector(".main-content-tuition-and-fees");
    

    //how to apply
    var howToApplyDropdown = document.querySelector(".main-content-how-to-apply");
    

    var scholarshipDropdown = document.querySelector(".main-content-scholarship");
    

    //btn
    var coursesBtn = document.querySelector(".courses-blue");
    var tuitionAndFeedBtn = document.querySelector(".tuition-and-fees-tab");
    var howToApplyBtn = document.querySelector(".how-to-apply-tab");
    var scholarshipBtn = document.querySelector(".scholarship-tab");

    if(tuitioAndFeesDropdown.classList.contains("display-none")){
        tuitioAndFeesDropdown.classList.remove("display-none");
        tuitioAndFeesDropdown.classList.add("display-block");

        //hide the rest of the tabs
        wholeCoursesDropdown.classList.remove("display-block");
        wholeCoursesDropdown.classList.add("display-none");

        howToApplyDropdown.classList.remove("display-block");
        howToApplyDropdown.classList.add("display-none");

        scholarshipDropdown.classList.remove("display-block");
        scholarshipDropdown.classList.add("display-none");

        //add active
        coursesBtn.classList.remove("four-tabs-active-1");

        tuitionAndFeedBtn.classList.add("four-tabs-active-2");
        howToApplyBtn.classList.remove("four-tabs-active-3");
        scholarshipBtn.classList.remove("four-tabs-active-4");

    }
    else{
        tuitioAndFeesDropdown.classList.remove("display-block");
        tuitioAndFeesDropdown.classList.add("display-none");
        tuitionAndFeedBtn.classList.remove("four-tabs-active-2");
    }
}

function show_hide_how_to_apply(){
    var wholeCoursesDropdown = document.querySelector(".main-courses-dropdown-div");
    var click = document.getElementById("dropdownForCourses");
    var wholeDropdown = document.querySelector(".main-courses-dropdown-div");

    //tuition fees
    var tuitioAndFeesDropdown = document.querySelector(".main-content-tuition-and-fees");
    

    //how to apply
    var howToApplyDropdown = document.querySelector(".main-content-how-to-apply");
    

    var scholarshipDropdown = document.querySelector(".main-content-scholarship");
    

    //btn
    var coursesBtn = document.querySelector(".courses-blue");
    var tuitionAndFeedBtn = document.querySelector(".tuition-and-fees-tab");
    var howToApplyBtn = document.querySelector(".how-to-apply-tab");
    var scholarshipBtn = document.querySelector(".scholarship-tab");


    if(howToApplyDropdown.classList.contains("display-none")){
        howToApplyDropdown.classList.remove("display-none");
        howToApplyDropdown.classList.add("display-block");

        //hide the rest of the tabs
        wholeCoursesDropdown.classList.remove("display-block");
        wholeCoursesDropdown.classList.add("display-none");

        tuitioAndFeesDropdown.classList.remove("display-block");
        tuitioAndFeesDropdown.classList.add("display-none");
        
        scholarshipDropdown.classList.remove("display-block");
        scholarshipDropdown.classList.add("display-none");

        //add active
        coursesBtn.classList.remove("four-tabs-active-1");

        tuitionAndFeedBtn.classList.remove("four-tabs-active-2");
        howToApplyBtn.classList.add("four-tabs-active-3");
        scholarshipBtn.classList.remove("four-tabs-active-4");
    }
    else{
        howToApplyDropdown.classList.remove("display-block");
        howToApplyDropdown.classList.add("display-none");
        howToApplyBtn.classList.remove("four-tabs-active-3");
    }
}

function show_hide_scholarship(){
    //courses tabs
    var wholeCoursesDropdown = document.querySelector(".main-courses-dropdown-div");
    var click = document.getElementById("dropdownForCourses");
    var wholeDropdown = document.querySelector(".main-courses-dropdown-div");

    //tuition fees
    var tuitioAndFeesDropdown = document.querySelector(".main-content-tuition-and-fees");
    

    //how to apply
    var howToApplyDropdown = document.querySelector(".main-content-how-to-apply");
    

    //scholarsihp tabs
    var scholarshipDropdown = document.querySelector(".main-content-scholarship");
    

    //btn
    var coursesBtn = document.querySelector(".courses-blue");
    var tuitionAndFeedBtn = document.querySelector(".tuition-and-fees-tab");
    var howToApplyBtn = document.querySelector(".how-to-apply-tab");
    var scholarshipBtn = document.querySelector(".scholarship-tab");

    if(scholarshipDropdown.classList.contains("display-none")){
        scholarshipDropdown.classList.remove("display-none");
        scholarshipDropdown.classList.add("display-block");

        //hide the rest of the tabs
        wholeCoursesDropdown.classList.remove("display-block");
        wholeCoursesDropdown.classList.add("display-none");

        tuitioAndFeesDropdown.classList.remove("display-block");
        tuitioAndFeesDropdown.classList.add("display-none");

        howToApplyDropdown.classList.remove("display-block");
        howToApplyDropdown.classList.add("display-none");

        //add active
        coursesBtn.classList.remove("four-tabs-active-1");

        tuitionAndFeedBtn.classList.remove("four-tabs-active-2");
        howToApplyBtn.classList.remove("four-tabs-active-3");
        scholarshipBtn.classList.add("four-tabs-active-4");
    }
    else{
        scholarshipDropdown.classList.remove("display-block");
        scholarshipDropdown.classList.add("display-none");
        scholarshipBtn.classList.remove("four-tabs-active-4");
    }
}

/**********************************************/
/*      For the Main Contents Dropdown       */
/********************************************/

function overviewBtnClicked(){
    var overviewDropdown = document.getElementById("overviewDropDown"); //the object being modified
    

    var whatYouWillLearnDropdown = document.getElementById("whatYouWillLearnDropDown");//What you will learn
    
    var careerOppotunitiesDropdown = document.getElementById("careerOpportunitiesDropDown");
    var certificationDropdown = document.getElementById("certificationDropDown");//certification 
    var contactsDropdown = document.getElementById("contactsDropDown");//Contacts
      

    //BTN
    var overviewBtn = document.getElementById("overviewBtn"); //BTN
    var whatYouWillLearnBtn = document.getElementById("whatYouWillLearnBtn");
    var careerOpportunitiesBtn = document.getElementById("careerOpportunitiesBtn");
    var certificationBtn = document.getElementById("certificationBtn");
    var contactsBtn = document.getElementById("contactsBtn");
    
    if (overviewDropdown.classList.contains("display-none")){
        overviewDropdown.classList.remove("display-none");
        overviewDropdown.classList.add("display-flex");

        //hide What You Will Learn Tabs tabs
        whatYouWillLearnDropdown.classList.remove("display-block");
        whatYouWillLearnDropdown.classList.add("display-none"); //What You Will Learn

        //hide career opportunities tabs
        careerOppotunitiesDropdown.classList.remove("display-block");
        careerOppotunitiesDropdown.classList.add("display-none");

        //Hide certification tabs
        certificationDropdown.classList.remove("display-block");
        certificationDropdown.classList.add("display-none");

        //hide Contacts Tabs
        contactsDropdown.classList.remove("display-block");
        contactsDropdown.classList.add("display-none");

        //add active
        overviewBtn.classList.add("overview-things-like-that-active");

        //remove active
        whatYouWillLearnBtn.classList.remove("overview-things-like-that-active");

        careerOpportunitiesBtn.classList.remove("overview-things-like-that-active");

        certificationBtn.classList.remove("overview-things-like-that-active");

        contactsBtn.classList.remove("overview-things-like-that-active");
    }
    else{
          //Do nothing
    }
}

function whatYouWillLearnBtnClicked(){

    var overviewDropdown = document.getElementById("overviewDropDown");
    var whatYouWillLearnDropdown = document.getElementById("whatYouWillLearnDropDown");
    var careerOppotunitiesDropdown = document.getElementById("careerOpportunitiesDropDown");
    var certificationDropdown = document.getElementById("certificationDropDown");//certification 
    var contactsDropdown = document.getElementById("contactsDropDown");//Contacts

    //BTN
    var overviewBtn = document.getElementById("overviewBtn"); //BTN
    var whatYouWillLearnBtn = document.getElementById("whatYouWillLearnBtn");
    var careerOpportunitiesBtn = document.getElementById("careerOpportunitiesBtn");
    var certificationBtn = document.getElementById("certificationBtn");
    var contactsBtn = document.getElementById("contactsBtn");

    if(whatYouWillLearnDropdown.classList.contains("display-none")){
        whatYouWillLearnDropdown.classList.remove("display-none");
        whatYouWillLearnDropdown.classList.add("display-block");

        //hide Overview tabs
        overviewDropdown.classList.remove("display-flex");
        overviewDropdown.classList.add("display-none");

        //hide career opportunities tabs
        careerOppotunitiesDropdown.classList.remove("display-block");
        careerOppotunitiesDropdown.classList.add("display-none");

        //Hide certification tabs
        certificationDropdown.classList.remove("display-block");
        certificationDropdown.classList.add("display-none");

        //hide Contacts Tabs
        contactsDropdown.classList.remove("display-block");
        contactsDropdown.classList.add("display-none");

        //add active
        overviewBtn.classList.remove("overview-things-like-that-active");

        //remove active
        whatYouWillLearnBtn.classList.add("overview-things-like-that-active");

        careerOpportunitiesBtn.classList.remove("overview-things-like-that-active");

        certificationBtn.classList.remove("overview-things-like-that-active");

        contactsBtn.classList.remove("overview-things-like-that-active");
    }
    else{
        //Do nothin
    }
    
}

function careerOpportunitiesBtnClicked(){

    //DropDowns
    var overviewDropdown = document.getElementById("overviewDropDown"); //Overview
    var whatYouWillLearnDropdown = document.getElementById("whatYouWillLearnDropDown"); //What You Will Learn
    var careerOppotunitiesDropdown = document.getElementById("careerOpportunitiesDropDown"); //Career Opportunities
    var certificationDropdown = document.getElementById("certificationDropDown");//certification 
    var contactsDropdown = document.getElementById("contactsDropDown");//Contacts

    //BTN
    var overviewBtn = document.getElementById("overviewBtn"); //BTN
    var whatYouWillLearnBtn = document.getElementById("whatYouWillLearnBtn");
    var careerOpportunitiesBtn = document.getElementById("careerOpportunitiesBtn");
    var certificationBtn = document.getElementById("certificationBtn");
    var contactsBtn = document.getElementById("contactsBtn");

    if(careerOppotunitiesDropdown.classList.contains("display-none")){
        careerOppotunitiesDropdown.classList.remove("display-none");
        careerOppotunitiesDropdown.classList.add("display-block");

        //hide Overview Tabs
        overviewDropdown.classList.remove("display-flex");
        overviewDropdown.classList.add("display-none");
        
        //Hide What You Will Learn
        whatYouWillLearnDropdown.classList.remove("display-block");
        whatYouWillLearnDropdown.classList.add("display-none");

        //Hide certification tabs
        certificationDropdown.classList.remove("display-block");
        certificationDropdown.classList.add("display-none");

        //hide Contacts Tabs
        contactsDropdown.classList.remove("display-block");
        contactsDropdown.classList.add("display-none");

        //add active
        overviewBtn.classList.remove("overview-things-like-that-active");

        //remove active
        whatYouWillLearnBtn.classList.remove("overview-things-like-that-active");

        careerOpportunitiesBtn.classList.add("overview-things-like-that-active");

        certificationBtn.classList.remove("overview-things-like-that-active");

        contactsBtn.classList.remove("overview-things-like-that-active");
    }

}

function certificationBtnClicked(){
    //DropDowns
    var overviewDropdown = document.getElementById("overviewDropDown"); //Overview
    var whatYouWillLearnDropdown = document.getElementById("whatYouWillLearnDropDown"); //What You Will Learn
    var careerOppotunitiesDropdown = document.getElementById("careerOpportunitiesDropDown"); //Career Opportunities
    var certificationDropdown = document.getElementById("certificationDropDown");//certification 
    var contactsDropdown = document.getElementById("contactsDropDown");//Contacts

    //BTN
    var overviewBtn = document.getElementById("overviewBtn"); //BTN
    var whatYouWillLearnBtn = document.getElementById("whatYouWillLearnBtn");
    var careerOpportunitiesBtn = document.getElementById("careerOpportunitiesBtn");
    var certificationBtn = document.getElementById("certificationBtn");
    var contactsBtn = document.getElementById("contactsBtn");

    if(certificationDropdown.classList.contains("display-none")){
        certificationDropdown.classList.remove("display-none");
        certificationDropdown.classList.add("display-block");

        //hide Overview Tabs
        overviewDropdown.classList.remove("display-flex");
        overviewDropdown.classList.add("display-none");
        
        //Hide What You Will Learn
        whatYouWillLearnDropdown.classList.remove("display-block");
        whatYouWillLearnDropdown.classList.add("display-none");

        //hide career opportunities tabs
        careerOppotunitiesDropdown.classList.remove("display-block");
        careerOppotunitiesDropdown.classList.add("display-none");

        //hide Contacts Tabs
        contactsDropdown.classList.remove("display-block");
        contactsDropdown.classList.add("display-none");

        //add active
        overviewBtn.classList.remove("overview-things-like-that-active");

        //remove active
        whatYouWillLearnBtn.classList.remove("overview-things-like-that-active");

        careerOpportunitiesBtn.classList.remove("overview-things-like-that-active");

        certificationBtn.classList.add("overview-things-like-that-active");

        contactsBtn.classList.remove("overview-things-like-that-active");
    }

}

function contactsBtnClicked(){
    //DropDowns
    var overviewDropdown = document.getElementById("overviewDropDown"); //Overview
    var whatYouWillLearnDropdown = document.getElementById("whatYouWillLearnDropDown"); //What You Will Learn
    var careerOppotunitiesDropdown = document.getElementById("careerOpportunitiesDropDown"); //Career Opportunities
    var certificationDropdown = document.getElementById("certificationDropDown");//certification 
    var contactsDropdown = document.getElementById("contactsDropDown");//Contacts

    //BTN
    var overviewBtn = document.getElementById("overviewBtn"); //BTN
    var whatYouWillLearnBtn = document.getElementById("whatYouWillLearnBtn");
    var careerOpportunitiesBtn = document.getElementById("careerOpportunitiesBtn");
    var certificationBtn = document.getElementById("certificationBtn");
    var contactsBtn = document.getElementById("contactsBtn");

    if(contactsDropdown.classList.contains("display-none")){
        contactsDropdown.classList.remove("display-none");
        contactsDropdown.classList.add("display-block");

        //hide Overview Tabs
        overviewDropdown.classList.remove("display-flex");
        overviewDropdown.classList.add("display-none");
        
        //Hide What You Will Learn
        whatYouWillLearnDropdown.classList.remove("display-block");
        whatYouWillLearnDropdown.classList.add("display-none");

        //hide career opportunities tabs
        careerOppotunitiesDropdown.classList.remove("display-block");
        careerOppotunitiesDropdown.classList.add("display-none");

        //hide Certification tabs
        certificationDropdown.classList.remove("display-block");
        certificationDropdown.classList.add("display-none");

        //add active
        overviewBtn.classList.remove("overview-things-like-that-active");

        //remove active
        whatYouWillLearnBtn.classList.remove("overview-things-like-that-active");

        careerOpportunitiesBtn.classList.remove("overview-things-like-that-active");

        certificationBtn.classList.remove("overview-things-like-that-active");

        contactsBtn.classList.add("overview-things-like-that-active");
    }
}


/************************************************/
/*      Four All the programs Drop Downs       */
/**********************************************/

function tableDropDown_1(){
    var click = document.getElementById("tableDropDown_1");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_2(){
    var click = document.getElementById("tableDropDown_2");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
        
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_3(){
    var click = document.getElementById("tableDropDown_3");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_4(){
    var click = document.getElementById("tableDropDown_4");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_5(){
    var click = document.getElementById("tableDropDown_5");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_6(){
    var click = document.getElementById("tableDropDown_6");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_7(){
    var click = document.getElementById("tableDropDown_7");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_8(){
    var click = document.getElementById("tableDropDown_8");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_9(){
    var click = document.getElementById("tableDropDown_9");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_10(){
    var click = document.getElementById("tableDropDown_10");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_11(){
    var click = document.getElementById("tableDropDown_11");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_12(){
    var click = document.getElementById("tableDropDown_12");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_13(){
    var click = document.getElementById("tableDropDown_13");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_14(){
    var click = document.getElementById("tableDropDown_14");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_15(){
    var click = document.getElementById("tableDropDown_15");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_16(){
    var click = document.getElementById("tableDropDown_16");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_17(){
    var click = document.getElementById("tableDropDown_17");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_18(){
    var click = document.getElementById("tableDropDown_18");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}
function tableDropDown_19(){
    var click = document.getElementById("tableDropDown_19");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_20(){
    var click = document.getElementById("tableDropDown_20");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_21(){
    var click = document.getElementById("tableDropDown_21");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_22(){
    var click = document.getElementById("tableDropDown_22");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_23(){
    var click = document.getElementById("tableDropDown_23");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_24(){
    var click = document.getElementById("tableDropDown_24");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_25(){
    var click = document.getElementById("tableDropDown_25");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}

function tableDropDown_26(){
    var click = document.getElementById("tableDropDown_26");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "172px";
        click.style.padding = "20px 40px";
    }
    else{
        click.style.maxHeight = "0px";
        click.style.padding = "0px 40px";
        
    }
}


////////////////////////////////

function click_1(){
    var click = document.querySelector(".hidden-1");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function click_2(){
    var click = document.querySelector(".hidden-2");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function click_3(){
    var click = document.querySelector(".hidden-3");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function click_4(){
    var click = document.querySelector(".hidden-4");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function click_5(){
    var click = document.querySelector(".hidden-5");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function click_6(){
    var click = document.querySelector(".hidden-6");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function click_7(){
    var click = document.querySelector(".hidden-7");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function click_8(){
    var click = document.querySelector(".hidden-8");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function click_9(){
    var click = document.querySelector(".hidden-9");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function click_10(){
    var click = document.querySelector(".hidden-10");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function click_11(){
    var click = document.querySelector(".hidden-11");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function click_12(){
    var click = document.querySelector(".hidden-12");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function click_13(){
    var click = document.querySelector(".hidden-13");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}
function click_14(){
    var click = document.querySelector(".hidden-14");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function click_15(){
    var click = document.querySelector(".hidden-15");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}


//////////////

function gC_1(){
    var click  = document.querySelector(".gc-1");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function gC_2(){
    var click  = document.querySelector(".gc-2");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function gC_3(){
    var click  = document.querySelector(".gc-3");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function gC_4(){
    var click  = document.querySelector(".gc-4");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function gC_5(){
    var click  = document.querySelector(".gc-5");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function gC_6(){
    var click  = document.querySelector(".gc-6");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function gC_7(){
    var click  = document.querySelector(".gc-7");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function gC_8(){
    var click  = document.querySelector(".gc-8");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function gC_9(){
    var click  = document.querySelector(".gc-9");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}

function gC_10(){
    var click  = document.querySelector(".gc-10");

    if(click.classList.contains("slide-up")){
        click.classList.remove("slide-up");
        click.classList.add("slide-down");
    }
    else{
        click.classList.remove("slide-down");
        click.classList.add("slide-up");
    }
    
}
