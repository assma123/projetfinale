jQuery(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 5000
        });
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDdPWPHUEJmMnfO214Pt7yT4dEsJvSxUEQ",
    authDomain: "projet-finale.firebaseapp.com",
    databaseURL: "https://projet-finale.firebaseio.com",
    projectId: "projet-finale",
    storageBucket: "projet-finale.appspot.com",
    messagingSenderId: "16601268764"
  };
  firebase.initializeApp(config);

document.getElementById("contactForm").addEventListener("submit",submitForm);

function getInputVal(id){
    return document.getElementById(id).value;
}
function submitForm(e){
    e.preventDefault;
    var fname = getInputVal("fname");
    var lname = getInputVal("lname");
    var email = getInputVal("email");
    var password = getInputVal("password");
    console.log(email,fname,lname,password);
    saveMessage(fname,lname,email,password);
}
var messageRef = firebase.database().ref("messages")
function saveMessage(fname,lname,email,password){
    var newMessageRef = MesageRef.push();
    newMessageRef.set({
        fname : fname,
        lname:lname,
        email:email,
        password:password
    });

}