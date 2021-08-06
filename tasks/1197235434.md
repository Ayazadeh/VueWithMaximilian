# Maktab 52 - Django
## Task 3: Cafe MenuItem model

----    

Complete your MenuItem model by adding it fields below:  
1. Name (CharField) 
2. Price (IntegerField)
3. Discount(IntegerField or ForeignKey): null and blank 
4. Image (ImageField): Stores the menu item image
5. category(ForeignKey): related to Category model 
6. create_timestamp(DateTimeField): should be **automatic**. (auto_now_add)
7. modify_timestamp(DateTimeField): should be **automatic**. (auto_now)


Notes:
1. Define `verbose_name`, `help_text` for each field.
2. Implement a compatible `CreateView` class to integrate it with the model. 
3. Implement a `MenuItem.final_price(self)` to calculate and return the price w/ discount.