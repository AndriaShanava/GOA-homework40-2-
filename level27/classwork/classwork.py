#1)შექმენი ფუნქცია სადაც მომხმარებელს შემოაყვანინბ ორ რიცხვს და გაიგე მათი ჯამი
def jami(x,y):
    return x + y

#2)შექმენი ფუქნცი გადაეცი პარამეტრად ორი ცვლადი და მოახდინეთ მათი კონკატინაცია

def konkatinacia(a,b):
    return str(a) + str(b)

#3)შექმენით სია,სადაც შეიყვანთ ინტეჯერის ტიპის მონაცემებს,თქვენი დავალება იქნება გაიგოთ ამ სიაში მყოფი ლუწი რიცხვების ჯამი

def sia(list):
    result = 0
    for i in list:
        if i % 2 == 0:
            result += i
    return result

#4)შექმენით სია სადაც შეიყვანთ განსხვავებული მონაცემთთა ტიპის ელემენტებს,
#თქვენი დავალებაა ინტეჯერები ჩაამატო ერთ ახალ სიაშ და სტრინგები ჩაამატო სხვა ახალ სიაში

def sia(list):
    str_list = []
    int_list = []
    for i in list:
        if type(i) == int:
           int_list += i
        elif type(i) == str:
             str_list += i

#5)შექმენით სია სადაც შეიყვანთ რიცხვებს,თქვენი დავალებაა გაიგოთ ლუწ ინდექსზე მდგომი ელემენტების ჯამი

def sia(list):
    result = 0
    for i in range(0, len(list), 2):
        result += list[i]
    return result

#6)შექმენი სია სადაც შეიყვანთ ელემენტებს,თქვენი დავალებაა ტერმინალში გამოიტანო თითოეული მათგანი გამოიყნე FOR/WHILE LOOP
def for_and_while(list):
#for loop
    for i in list:
        print(i)

#while loop
    i = 0 
    while i < len(list):
        print(list[i])
        i += 1

#7)შექმენი სია სადაც გექნება ელემენტები,შენი დავალებაა ამ სიიდან ამოშალო სტრინგი მონაცემები და დააბრუნო სია სტრინგების გარეშე

def sia(list):
    result = []
    for i in list:
        if type(i) == int:
            result.append(i)
    return result

#8)შექმენი ფუნქცია სადაც მოათავსებთ სტრინგებს პატარა ასოებით,
#შენი დავალებაა ახალ სიაში დაამატო ეს სტრინგები მაგრამ ახალ სიაშ ჩაემატნონ დიდი ასოებით

def didi_asoebit_sia(list):
    result = []
    for i in list:
        result.append(i.upper())
    return result


#10)შექმენი ფუნქცია სადაც მოთავსებული გექნება სტრინგები,
#შენი დავალებაა რომ ეს სტრინგები გადაიყვანო ახალ სიაში მაგრამ მათ პირველი ასო იყოს დიდი ახალ სიაში

def str_sia(list):
    result = []
    for i in list:
        result.append(i.capitalize())
    return result

#11)შექმენი ფუნქცია რომელსაც გადაეცემა სტრინგები,
#შეამოწმე თუ სტრინგის პირველი ასო არის დიდი და მისი სიგრძე ნაკლებია 5 ზე ეს სტრინგები ჩაამატრ ახალ სიაში,
#შემდეგ ამ ახალ სიაში ჩამატებული ელემენტები გაფილტრეთ(sorted) მათი სიგრძის მიხედვით და ეს სია შემოატრიალეთ

def str_sia(list):
    result = []
    for i in list:
        if i[0].isupper and len(i) < 5:
            result.append(i)
    sorted_result = sorted(result, key = len, reverse = True) 
    return sorted_result

#12)შექმენი სია სადაც გექნება სტრინგები და რიცხვები,
#რიცხვებიგადაიტანე ახალ სიაში და დაალაგე ზრდის მიხევდით სტრინგებიც ჩაამატე სხვა ახალ სიაში და ეს სტრინგების სია დააალაგეთ ანბანის მიხევდით

def str_da_int(list):
    int_sia = []
    string_sia = []
    for i in list:
        if type(i) == int:
           int_sia.append(i)
        elif type(i) == str:
            string_sia.append(i)
        
    int_sia.sort(key= len)
    string_sia.sort()
    return int_sia, string_sia


# 13)შექმენი სია სადაც მოთავსებ ელემენტებს,შენი დავალებაა ამ სსიიდან ამოშალო მესამე ინდექსზე მდგომი ელემენტი,ამ სიაშ ჩაამატე სახელი "ირაკლი" ,
# ასევე გაიგე მეხუთე  რომელიმე ელემენტის ინდექსი(შესაბამისი ფუნქციის დახმარებით) ,
# ასევე გაიგე ამ სიის სიგრძე , და ბოლოს სიიდან ამოშალე რომელიმე ელემენტი (შესაბამისი ფუნქციის დახმარებით(სახელის მიხედვით))

def sia(list):
    list.pop(3)
    list.append("irakli")
    list.find(5)
    length = len(list)
    list.remove("andria")
    return list, length

#14)შექმენი ფუნქცია რომელსაც გადაეცემა ერთმთლიანი წინადადება,
#ამ წინადადებაშ სიტყვები გამოყოფილები უნდა იყვნენ სპეისებთ,შენი დავლაებაა ამ სტრინგშ მოთავსებული ყველა სიტყვა გადაიყვანო სიაში(სესაბამისი ფუქნცია)

def winadadeba(string):
    return string.split()

#15)შექმენი ფუნქცია რომელსაც გადაეცემა სია,შენი დავალებაა ეს სია აქციო სტრინგად დად თითოეული ელემენტი დაშორებული იყოს # ამ ნიშნით,
#შემდეგ გადაუარეთ ამ სტრინგს და დაითვალეთ თუ რამდენჯერ გვხვდება # ეს ნიშანი შენს სტრინგში

def sia(list):
    split_winadadeba = list.split()
    joined_str = "#".join(split_winadadeba)
    davitvalot = joined_str.count("#")
    return split_winadadeba, joined_str, davitvalot

#16)შექმენი ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია,შენი დავალებაა ახალ სიაში ჩაამატო კენტი რიცხვები,შემდეგ ამ ახალ სიაში მყოფი რიცხვების საშუალო არითმეტიკული გიაგეთ

#        if i % 2 == 1:
#             kentebi.append(i)

# sashualo_aritmetikuli = sum(kentebi) / len(kentebi)

# return sashualo_aritmetikulidef kenti_sia(lsit):
#     kentebi = []
#     for i in lsit:
 

#17)შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგებით სავსე სია,შენი დავალებაა შეამოწმო თუ რამდენი ცალი დიდი ასო ურევია ყველა სტრინგში მთლიანად

def did_asoti(sia):
    count = 0
    for i in sia:
        for u in i:
            if u.isupper():
                count += 1
    return count

#18)while loop/for loop დაითვალე 40 დან 100 მდე 
#for loop

for i in range(40, 100):
    print(i)

#while loop

i = 40
while i <= 100:
    print(i)
    i += 1

#19)შექმენი ცვლადი სადაც შეინახავ შენ პაროლს,
#შემდეგ მომხმარებელს შემოატანინე პაროლკსანამ მომხმარებელი სწორად არშემოიყვანს პაროლს იქამდე გაუმეორე რომ შემოიყვანოს თავიდან პაროლი

password = "Andria1234"

while True:
    user_input = input("sheiyvane paroli: ")
    if user_input == password:
        print("paroli sworia")
        break
    else:
        print("arasworia, scade tavidan")


#20)შექმენი სია,სადაც მოათავსებთ ელემენტებს,შენი დავალებაა ეს სია გადააქციო სტრინგად,სადაც სიტყვებს გამოყობთ სფეისით,
#შემდეგ გადაუარეთ ამ სტრინგს და შეამოწმეთ თ ამ სტრინგში არის ხმოვნები ეს ხმოვნები ჩაანაცვლეთ $ ამ ნიშნით და ისე დააბრუნეთ საბოლოო სტრინგი

def sia(element):
    xmovnebi = "aeiou"
    winadadeba = " ".join(element)
    result = ""
    for i in winadadeba:
        if i in xmovnebi:
            result += "$"
        else: 
            result += i
    return result

#21)დაწერეთ ფუნქცია, რომელიც for ციკლის გამოყენებით ითვლის მასივში რამდენი ელემენტია 10-ზე მეტი.    

def atze_meti(numbers):
    count = 0 
    for i in numbers:
        if i > 10:
            count += 1
    return count


#22)შექმენით ფუნქცია რომელიც აბრუნებს სტრინგში ხმოვნების რაოდენობას
def count_xmovnebs(text):
    xmovnebi = "aeiou"
    count = 0
    for i in text:
        if i in xmovnebi: 
            count += 1
    return count

#23)შექმენი ფუნქცია რომესლაც გადასცემთ სახელების სიას,
#შენი დავალებაა დაასორტირო ეს სია ანბანის მიხედვით და შეამოწმო თ ამ დასორტირებულ სიაში პირველი ასო არის ხმოვანი დაპრინტე რომ კარგია,სხვა შემთხვევაში დაპრინტე რომ ცუდია

def saxelebis_sia(names):
    xmovnebi = "aeiou"
    sorted_names = sorted(names)
    for i in names:
        if sorted_names in xmovnebi:
            print("kargia")
        else:
            print("cudia")

#24)შექმენი ფუნქცია რომელსაც გადაეცემა ორი სია,შენიდვავლებაა გააერთანო ეს ორი სია ერთმანთიში(გამოიყენე შეაბამისი ფუნქცია)

def ori_sia(list1,list2):
    return list1 + list2

#25)შექმენი ფუნქცია რომელსაც გადაეცემა რიცხვების სია,შენი დავალებაა გაიგო რიცხვების ჯამი რომლებიც დგანან კენტ ინდექსზე და ასევე არიან 20 ზე ნაკლები

def ricxvebis_sia(numbers):
    total = 0 
    for i in range(1, len(numbers), 2):
        if numbers[i] < 20:
            total += numbers[i]
    return total
        