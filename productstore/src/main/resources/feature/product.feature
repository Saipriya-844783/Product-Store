@Product_Store
Feature: Product_Store Website

@TC_01_Login
Scenario Outline: Login into Product_Store Website
Given The user launch the Chrome application
When Clicking on login to navigate Login Page
Then The user login using "<username>" and "<password>" with valid and invalid details
Then Clicking on login button

Examples: 

|username	|password|
|gsaipriya	|sai@12 |
|saipriyag	|sai@123|
|gunneri	|1234	|
|anwesh	    |anwi@12|
|anweshd	|anwi@123|
|danwesh	|anwi@1234|
|muni	    |123	|
|munib	    |1234	|
|bmuni  	|12345	|
@TC_02_contact
Scenario: Fill contact in Product_Store
Given User launch the Chrome application
When Clicking on contact to navigate contact Page
Then The user filling contactdetails using email as "saipriya@gmail.com" and name as "saipriya" and message as "ok" details
Then Clicking on close button
@TC_03_Order
Scenario: Order product in Product_Store
Given To launch the Google chrome application
When To click on product to navigate product Page
Then The user filling the name as "saipriya" country as "India" city as "tirupati" creditcard as "2458982980" month as "02" year as "2022" details
Then To close the product browser button
@TC_04_signup
Scenario: Fill singup page in Product_Store
Given Launching the Chrome application
When Clicking on signup to navigate signup Page
Then The user signup using "saipriya1234@gmail.com" and "saipriya@12" with vaild details
Then Clicking on signup button
@TC_05_category
Scenario: Selecting category
Given For launching the Chrome application
When Clicking on category to navigate phone Page
Then The user clicking on category
Then Click on close button




