#შექმენით ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია,თქვენი დავალებაა ამ სიიდან ამოშალოთ კენტი რიცხვები და დააბრუნოთ სია კენტი რიცხვების გარეშე

def kenti_ricxvebis_washla(list):
    result =[]
    for i in list:
        if i % 2 != 1:
            result.append(i) 
    return result

print(kenti_ricxvebis_washla([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) 