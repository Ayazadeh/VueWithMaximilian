# Maktab 52 - Django
## Task: Login (Auth)

----
### A.  Login view
Create a login view into your project -> authenticate & login users.  
It redirects to **Profile view**, if the login is successful, raises error otherwise.     
**Note:** Username & Password values must post to the Login view from the html template.


### B. Profile view
Create a profile view, that shows the user information, 
**if the user is authenticated** and **has `auth.see_profile` permission**, redirect to the **Login page** otherwise.

**Note:** You should create a custom permission `auth.see_profile` initially. 
