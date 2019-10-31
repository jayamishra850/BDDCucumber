$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/prctice of java/Selenium/FreeCRMBDDFramework/src/main/java/Features/loginMap.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Login Feature",
  "description": "",
  "id": "facebook-login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 529413,
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
  "line": 5,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "jayamishra850@gmail.com",
        "Ritu@123456"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitionMap.user_is_Present_on_Login_Page()"
});
formatter.result({
  "duration": 131103248835,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionMap.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 100756573,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionMap.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 803675787,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionMap.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 33648588075,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionMap.user_is_on_home_page()"
});
formatter.result({
  "duration": 299241631,
  "status": "passed"
});
formatter.after({
  "duration": 951990602,
  "status": "passed"
});
});