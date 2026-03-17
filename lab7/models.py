class Animal:
    def __init__(self, country, name,color):
        self.country = country
        self.name = name
        self.color = color
    
    def sound(self):
        print("This is sound")

    def printCountry(self):
        print(self.country)

    def __str__(self):
        return f"Name:{self.name}, Country: {self.country}, Color: {self.color}"

class Dog(Animal):
    anmlType = "Dog"
    def __init__(self,country,name,color,breed):
        self.country = country
        self.name = name
        self.color = color
        self.breed = breed
    
    def sound(self):
        print("Woof")

    def guard(self):
        print(f"{self.name} is guarding the house")

class Cat(Animal):
    anmlType = "Cat"
    def __init__(self,country,name,color, livesLeft):
        self.country = country
        self.name = name
        self.color = color
        self.livesLeft = livesLeft
    
    def sound(self):
        print("Meow")

    def climb(self):
        print(f"{self.name} climbed somewhere high")