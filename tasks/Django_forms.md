# Maktab 52 - Django
## Task: Django forms

----
Create the `CreateMenuItem` view, using **Django Forms**.  
MenuItem model includes fields like:
- Name: CharField, **MUST BE TITLE** 
- Price: IntegerField, **MUST BE POSITIVE**
- Discount
- Category
- Image
- ...

**Notes:**
- Use Django `Form` class.
- You must save the MenuItem instance into the database.
- You must save the uploaded image in the _MEDIA_ directory.
- You can use generic `FormView`.

