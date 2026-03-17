from models import *

animals = [
    Dog("KZ", "Bit", "Black", "Yorkshir terrier"),
    Cat("US", "Milo", "White", 9)
]

for a in animals:
    print(a)
    a.sound()
    if isinstance(a,Dog):
        a.guard()
    else:
        a.climb()