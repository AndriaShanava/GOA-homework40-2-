#)შექმენი ფუნქცია როომელსაც გადაეცემა სტრინგი --> fortoxali,თქვენი დავალებაა დააბრუნოთ თითოეული ასოს ინდექსი სიის სახით (არ გამოიყენოთ len ფუნქცია)

def fruit(orange):
    result = []
    for i in orange:
        result.append(orange.find(i))
    return result
print(fruit("fortoxali"))