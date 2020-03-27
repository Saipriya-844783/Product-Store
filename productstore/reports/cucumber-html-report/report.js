$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/product.feature");
formatter.feature({
  "line": 2,
  "name": "Product_Store Website",
  "description": "",
  "id": "product-store-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with valid and invalid details",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "product-store-website;login-into-product-store-website;;1"
    },
    {
      "cells": [
        "gsaipriya",
        "sai@12"
      ],
      "line": 14,
      "id": "product-store-website;login-into-product-store-website;;2"
    },
    {
      "cells": [
        "saipriyag",
        "sai@123"
      ],
      "line": 15,
      "id": "product-store-website;login-into-product-store-website;;3"
    },
    {
      "cells": [
        "gunneri",
        "1234"
      ],
      "line": 16,
      "id": "product-store-website;login-into-product-store-website;;4"
    },
    {
      "cells": [
        "anwesh",
        "anwi@12"
      ],
      "line": 17,
      "id": "product-store-website;login-into-product-store-website;;5"
    },
    {
      "cells": [
        "anweshd",
        "anwi@123"
      ],
      "line": 18,
      "id": "product-store-website;login-into-product-store-website;;6"
    },
    {
      "cells": [
        "danwesh",
        "anwi@1234"
      ],
      "line": 19,
      "id": "product-store-website;login-into-product-store-website;;7"
    },
    {
      "cells": [
        "muni",
        "123"
      ],
      "line": 20,
      "id": "product-store-website;login-into-product-store-website;;8"
    },
    {
      "cells": [
        "munib",
        "1234"
      ],
      "line": 21,
      "id": "product-store-website;login-into-product-store-website;;9"
    },
    {
      "cells": [
        "bmuni",
        "12345"
      ],
      "line": 22,
      "id": "product-store-website;login-into-product-store-website;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"gsaipriya\" and \"sai@12\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 13981330300,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 374037600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gsaipriya",
      "offset": 22
    },
    {
      "val": "sai@12",
      "offset": 38
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8657412500,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 305432800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"saipriyag\" and \"sai@123\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 9373291500,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 305784400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saipriyag",
      "offset": 22
    },
    {
      "val": "sai@123",
      "offset": 38
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8494588600,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 107900700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"gunneri\" and \"1234\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 8140735800,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 181331500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gunneri",
      "offset": 22
    },
    {
      "val": "1234",
      "offset": 36
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8484652100,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 190562500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"anwesh\" and \"anwi@12\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 9415823200,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 235739700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anwesh",
      "offset": 22
    },
    {
      "val": "anwi@12",
      "offset": 35
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8517878900,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 211701000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"anweshd\" and \"anwi@123\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 7817534600,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 127889500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anweshd",
      "offset": 22
    },
    {
      "val": "anwi@123",
      "offset": 36
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8420489500,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 165389300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"danwesh\" and \"anwi@1234\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 8056063900,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 187403300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "danwesh",
      "offset": 22
    },
    {
      "val": "anwi@1234",
      "offset": 36
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8492764000,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 112073700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"muni\" and \"123\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 9501194300,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 195779800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "muni",
      "offset": 22
    },
    {
      "val": "123",
      "offset": 33
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8405431900,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 580926700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"munib\" and \"1234\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 6771426600,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 130220700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "munib",
      "offset": 22
    },
    {
      "val": "1234",
      "offset": 34
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8435079500,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 108350800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"bmuni\" and \"12345\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 7118403800,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 173130800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bmuni",
      "offset": 22
    },
    {
      "val": "12345",
      "offset": 34
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8439062300,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 121795000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Fill contact in Product_Store",
  "description": "",
  "id": "product-store-website;fill-contact-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@TC_02_contact"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Clicking on contact to navigate contact Page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The user filling contactdetails using email as \"saipriya@gmail.com\" and name as \"saipriya\" and message as \"ok\" details",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Clicking on close button",
  "keyword": "Then "
});
formatter.match({
  "location": "contactdetailstep.user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 7137914800,
  "status": "passed"
});
formatter.match({
  "location": "contactdetailstep.clicking_on_contact_to_navigate_contact_Page()"
});
formatter.result({
  "duration": 175415400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saipriya@gmail.com",
      "offset": 48
    },
    {
      "val": "saipriya",
      "offset": 81
    },
    {
      "val": "ok",
      "offset": 107
    }
  ],
  "location": "contactdetailstep.the_user_filling_contactdetails_using_email_as_and_name_as_message_as_details(String,String,String)"
});
formatter.result({
  "duration": 27841699100,
  "status": "passed"
});
formatter.match({
  "location": "contactdetailstep.click_on_close_Button()"
});
formatter.result({
  "duration": 3158203000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Order product in Product_Store",
  "description": "",
  "id": "product-store-website;order-product-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@TC_03_Order"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "To launch the Google chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "To click on product to navigate product Page",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "The user filling the name as \"saipriya\" country as \"India\" city as \"tirupati\" creditcard as \"2458982980\" month as \"02\" year as \"2022\" details",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "To close the product browser button",
  "keyword": "Then "
});
formatter.match({
  "location": "placeanorderstep.to_launch_the_Google_chrome_application()"
});
formatter.result({
  "duration": 9414442000,
  "status": "passed"
});
formatter.match({
  "location": "placeanorderstep.to_click_on_product_to_navigate_product_Page()"
});
formatter.result({
  "duration": 854043400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saipriya",
      "offset": 30
    },
    {
      "val": "India",
      "offset": 52
    },
    {
      "val": "tirupati",
      "offset": 68
    },
    {
      "val": "2458982980",
      "offset": 93
    },
    {
      "val": "02",
      "offset": 115
    },
    {
      "val": "2022",
      "offset": 128
    }
  ],
  "location": "placeanorderstep.the_user_filling_the_name_as_country_as_city_as_creditcard_as_month_as_year_as_details(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 30639427800,
  "status": "passed"
});
formatter.match({
  "location": "placeanorderstep.to_close_the_product_browser_Button()"
});
formatter.result({
  "duration": 3096657900,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Fill singup page in Product_Store",
  "description": "",
  "id": "product-store-website;fill-singup-page-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@TC_04_signup"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "Launching the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Clicking on signup to navigate signup Page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "The user signup using \"saipriya1234@gmail.com\" and \"saipriya@12\" with vaild details",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Clicking on signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signuppstep.launching_the_chrome_application()"
});
formatter.result({
  "duration": 8540651700,
  "status": "passed"
});
formatter.match({
  "location": "Signuppstep.clicking_on_signup_to_navigate_signup_Page()"
});
formatter.result({
  "duration": 144341000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saipriya1234@gmail.com",
      "offset": 23
    },
    {
      "val": "saipriya@12",
      "offset": 52
    }
  ],
  "location": "Signuppstep.the_user_signup_using_and_with_vaild_details(String,String)"
});
formatter.result({
  "duration": 8597837000,
  "status": "passed"
});
formatter.match({
  "location": "Signuppstep.click_on_signup_Button()"
});
formatter.result({
  "duration": 4219230300,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Selecting category",
  "description": "",
  "id": "product-store-website;selecting-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@TC_05_category"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "For launching the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Clicking on category to navigate phone Page",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "The user clicking on category",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Click on close button",
  "keyword": "Then "
});
formatter.match({
  "location": "Categorystep.for_launching_the_chrome_application()"
});
formatter.result({
  "duration": 9211234800,
  "status": "passed"
});
formatter.match({
  "location": "Categorystep.clicking_on_category_to_navigate_phone_Page()"
});
formatter.result({
  "duration": 180252300,
  "status": "passed"
});
formatter.match({
  "location": "Categorystep.the_user_clicking_on_category()"
});
formatter.result({
  "duration": 15814782400,
  "status": "passed"
});
formatter.match({
  "location": "Categorystep.click_on_close_Button()"
});
formatter.result({
  "duration": 3102828800,
  "status": "passed"
});
});