class MyParentClass:

    def __init__(self, name):
        print("(ParentClass > __init__)")
        self._name = name

    def welcome(self):
        print("(ParentClass > some_method)")
        return f'Hello {self._name}!'


class MyChildClass(MyParentClass):

    def __init__(self, name='Akbar'):
        super().__init__('Mr. ' + name)
        print("(ChildClass > __init__)")

    def welcome(self):
        print("(ChildClass > some_method)")
        return super().welcome()


print('Parent Ins...:')
parent_ins = MyParentClass('Reza')
print('\nParent Welcoming:')
print(parent_ins.welcome())

print('Child Inst...:')
child_ins = MyChildClass()
print('\nChild Welcoming:')
print(child_ins.welcome())
