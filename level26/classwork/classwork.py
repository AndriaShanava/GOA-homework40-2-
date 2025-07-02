#1)შექმენი სია,სადაც მოათავსებთ სახელებს,
#თქვენი დავალებაა დაასორტიროთ ეს სია სიაში მტოფი სახელების სიგრძის მიხედვით და შემოატრიალოთ უკუღმა

def str_sia(words):
    return sorted(words, key = len, reverse = True)

print(str_sia(["atami", "vashli", "marwyvi", "banani", "alubali", "kitri"]))

#2)შექმენი ფუნქცია რომელსაც გადაეცემა სია სადაც მოთავსებული იქნება სხვადასხვა მონაცემთა ტიპები,
#შენი დავალებაა რომ ამ სიიდან ამოიღო ინტეჯერებიდ ა მოათავსო ცალკე ახალ სიაში,
#ასევე უნდა მაოიღო სტრინგებიც და ცალკე სიაში,შენი დავალებააა ეს ორი სია დაასორტირო,
#სტრინგების სია დაასორტირე ანბანის მიხედვით და შემოატრიალე,და რიცხვების სია დაასორტირე ზრდადობის მიხედვით

def sia(data):
    str_list = []
    int_list = []

    for i in data:
        if type(i) == str:
            str_list.append(i)
        elif type(i) == int:
            int_list.append(i)

               

    return sorted(str_list, reverse = True), sorted(int_list)

    