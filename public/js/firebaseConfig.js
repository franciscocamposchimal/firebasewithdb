
(function () {
  const config = {
    apiKey: "AIzaSyCMexkZN6BFTQW23_MkkeEr9qsP9lbo5mg",
    authDomain: "wedding-planning-2017.firebaseapp.com",
    databaseURL: "https://wedding-planning-2017.firebaseio.com",
    projectId: "wedding-planning-2017",
    storageBucket: "wedding-planning-2017.appspot.com",
    messagingSenderId: "383924029598"
  }
  firebase.initializeApp(config);
  const email = $('#email').val();
  const pass = $('#pass').val();
  const auth = firebase.auth();
}());