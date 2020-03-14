$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/Testcase.feature");
formatter.feature({
  "line": 2,
  "name": "Yourlogo Website",
  "description": "",
  "id": "yourlogo-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Yourlogo"
    }
  ]
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "Login and Get the profile email",
  "id": "yourlogo-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@TC03_Yourlogo"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the user logged in to the home page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the user click the profile and get the profile email",
  "keyword": "Then "
});
formatter.match({
  "location": "ProfileDefinition.launch_the_chrome_application()"
});
formatter.result({
  "duration": 16327395649,
  "status": "passed"
});
formatter.match({
  "location": "ProfileDefinition.the_user_logged_in_to_the_home_page()"
});
formatter.result({
  "duration": 7780384554,
  "status": "passed"
});
formatter.match({
  "location": "ProfileDefinition.the_user_click_the_profile_and_get_the_profile_email()"
});
formatter.result({
  "duration": 12792883425,
  "status": "passed"
});
});