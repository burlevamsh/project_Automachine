@Yourlogo
Feature: Yourlogo Website
@TC01_Yourlogo
Scenario:
Login in the Yourlogo
Given the user launch the chrome application
When the user open the Yourlogo Home page 
Then the user login using username and password
Then click on the login button user nagivate to the next page
@TC02_Yourlogo
Scenario:
Login and Search product
Given user launch the chrome application
When the user loggedin to the home page
Then the user search the product
Then click on down arrow and enter key the user get the searching products
@TC03_Yourlogo
Scenario:
Login and Get the profile email
Given launch the chrome application
When the user logged in to the home page
Then the user click the profile and get the profile email