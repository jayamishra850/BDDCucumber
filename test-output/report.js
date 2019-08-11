$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/prctice of java/Selenium/FreeCRMBDDFramework/src/main/java/Features/loginMap.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Login Feature",
  "description": "",
  "id": "facebook-login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 334839,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Facebook Login Test Scenario",
  "description": "",
  "id": "facebook-login-feature;facebook-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "jayamishra850@gmail.com",
        "Ritu@123456"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitionMap.user_is_Present_on_Login_Page()"
});
formatter.result({
  "duration": 16105160368,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionMap.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 20905408,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionMap.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 635315539,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionMap.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 30156276967,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionMap.user_is_on_home_page()"
});
formatter.result({
  "duration": 390852782,
  "status": "passed"
});
formatter.after({
  "duration": 6673460660,
  "status": "passed"
});
});