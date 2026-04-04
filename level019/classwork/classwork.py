#1) შექმენით ფუნქცია რომელსაც გადაეცემა მომხმარებლის შემოტანილი რიცხვი. დააბრუნეთ ამ რიცხვის ჩათვლით ყველა ლუწი რიცხვის საშუალო არითმეტიკული
def sashualo_aritmetikuli(number):
    jami = 0
    raodenoba = 0
    for i in range(0, number + 1):
        if i % 2 == 0:
            jami += i
            raodenoba += 1
    if raodenoba == 0:
        return 0
    return jami / raodenoba
ricxvi = int(input("შეიყვანე რიცხვი: "))
print(sashualo_aritmetikuli(ricxvi))
