#2)შექმენი ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია,თქვენი დავალებაა დააბრუნოთ ახალი სია სადაც გექნებათ მხოლოდ ლუწი რიცხვები

def ricxvebis_sia(list):
    result = []
    for i in list:
        if i % 2 == 0:  
            result.append(i)
    return result

print(ricxvebis_sia([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))