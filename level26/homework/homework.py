#1)შექმენი სია,რომელსაც გადასცემთ რიცხვების სიას,თქვენი დავალებაა ეს სია დაასორტიროთ ზრდადობის მიხედვით და თან შემოატრიალეთ
def sia(numbers):
    return sorted(numbers, reverse = True)

#2) სახელების ანბანური დალაგება და შემოტრიალება:

def sia(names):
    return sorted(names, reverse = True)

#3) სტრინგები რომელთაც აქვთ სიგრძე < 5 და იწყება დიდი ასოთი → დალაგება სიგრძის მიხედვით და შემოტრიალება:

def sia(data):
    result = []
    for i in data:
        if type(i) == str and len(i) < 5 and i[0].isupper():
            result.append(i)
    return sorted(result, key=len, reverse = True)

#4) კენტ ინდექსებზე მყოფი პატარა ასოების ამოღება:

def sia(names):
    result = []
    for i in names:
        for u in range(len(i)):
            if i % 2 == 1 and i[u].islower():
                result.append(i[u])
    return result

#5) სია სადაც ყველა სახელი დიდი ასოებით:

def didi_asoebit(sia):
    result = []
    for i in sia:
        d = ""
        for j in i:
            d += j.upper()
        result.append(d)
    return result

print(didi_asoebit(["ana", "gio", "luka", "nini"]))


