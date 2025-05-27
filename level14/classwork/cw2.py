#შექმენი ფუნქცია როომელსაც გადაეცემა სახელებით სავსე სია,თქვენი დავალებაა დააბრუნოთ თითოეული ელემენტის ინდექსი(არ გამოიყენოთ len ფუნქცია)

def elementis_index(name):
    result = []
    for i in name:
        result.append(name.index(i))
    return result  

print(elementis_index(["giorgi", "nino", "ana", "davit", "mari"]))  