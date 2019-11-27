
/*********************************************/
/*      For the four tab like Courses       */
/*******************************************/


function show_hide(){
    var click = document.getElementById("dropdownForCourses");
    var wholeDropdown = document.getElementById("dropdown");
   
    if (click.style.maxHeight === "0px"){
        click.style.maxHeight = "4000px";
        click.style.paddingBottom = "40px";
        wholeDropdown.style.paddingBottom = "40px";
        
    }
    else{
        click.style.maxHeight = "0px";
        click.style.paddingBottom = "0px";
        wholeDropdown.style.paddingBottom = "0px";
        click.style.marginTop = "0px";
        
    }
}

/**********************************************/
/*      For the Main Contents Dropdown       */
/********************************************/

function overviewBtnClicked(){
    var overviewDropdown = document.getElementById("overviewDropDown"); //the object being modified
    var whatYouWillLearnDropdown = document.getElementById("whatYouWillLearnDropDown");
    var careerOppotunitiesDropdown = document.getElementById("careerOpportunitiesDropDown");
    var certificationDropdown = document.getElementById("certificationDropDown");//certification 
    var contactsDropdown = document.getElementById("contactsDropDown");//Contacts
      
    
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
    }

}

function certificationBtnClicked(){
    //DropDowns
    var overviewDropdown = document.getElementById("overviewDropDown"); //Overview
    var whatYouWillLearnDropdown = document.getElementById("whatYouWillLearnDropDown"); //What You Will Learn
    var careerOppotunitiesDropdown = document.getElementById("careerOpportunitiesDropDown"); //Career Opportunities
    var certificationDropdown = document.getElementById("certificationDropDown");//certification 
    var contactsDropdown = document.getElementById("contactsDropDown");//Contacts

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
    }

}

function contactsBtnClicked(){
    //DropDowns
    var overviewDropdown = document.getElementById("overviewDropDown"); //Overview
    var whatYouWillLearnDropdown = document.getElementById("whatYouWillLearnDropDown"); //What You Will Learn
    var careerOppotunitiesDropdown = document.getElementById("careerOpportunitiesDropDown"); //Career Opportunities
    var certificationDropdown = document.getElementById("certificationDropDown");//certification 
    var contactsDropdown = document.getElementById("contactsDropDown");//Contacts

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
/*
function tableDropDown_2(){
    var click = document.getElementById("tableDropDown_2");
    if (click.style.display === "none"){
        click.style.display = "block";
    }
    else{
        click.style.display = "none";
    }
}

function tableDropDown_3(){
    var click = document.getElementById("tableDropDown_3");
    if (click.style.display === "none"){
        click.style.display = "block";
    }
    else{
        click.style.display = "none";
    }
}
function tableDropDown_4(){
    var click = document.getElementById("tableDropDown_4");
    if (click.style.display === "none"){
        click.style.display = "block";
    }
    else{
        click.style.display = "none";
    }
}

function tableDropDown_5(){
    var click = document.getElementById("tableDropDown_5");
    if (click.style.display === "none"){
        click.style.display = "block";
    }
    else{
        click.style.display = "none";
    }
}

function tableDropDown_6(){
    var click = document.getElementById("tableDropDown_6");
    if (click.style.display === "none"){
        click.style.display = "block";
    }
    else{
        click.style.display = "none";
    }
}



function show_hide_inside_courses(){  
    var show = document.getElementById("dmit-1001-dropdowns");
    
    show.style.display = "table-cell";
}

*/