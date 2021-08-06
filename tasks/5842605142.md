# Maktab 52 - Django
## Task: Model Unit Testing

----
In this task we're going to write TestCases for `MenuItem` model:
  
**First**, write proper test methods for:
1. `MenuItem.final_price(self)` method.  
(This method returns the final price of discounted menu item)  
2. `TimestampMixin.is_deleted(self)` method.
   (This method returns **True**, if the model has deleted logically by setting `delete_timestamp`, **False** otherwise.)

**_Write at least 5 test methods._**    

Note: Try to maximize your test coverage by writing more test methods.  
For example, Check out all of these scenarios for `MenuItem.final_price(self)`:
1. Negative discount!
2. Discount greater than price!
3. Empty discount or with amount of zero.
4. Negative price!
5. ...

And for `TimestampMixin.is_deleted(self)` with a value of:
1. `None`
2. `now()`
3. greater than `now()` (In the future!)
4. ...


**Then**, start to implement `MenuItem.final_price(self)` methods!

**It's TDD (Test-Driven Development)**