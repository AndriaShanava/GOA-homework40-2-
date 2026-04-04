# #1)შექმენით ცვლადი სადაც შეინახავთ რაიმე სტრინგს,
# #გაიგეთ თთოეული ასოს ინდექსი(გამოიყენეთ შესაბამისი ფუნქცია)

# list = "goa best"
# for i in list:
#     print(list.find(i))

# #2)შექმენით სია სადაც მოათავსებ ლეემენტებს,
# #შენი დავალებაა გამოიტანო სიაში მყოფი ელემენტების ინდექსები(გამოიყენეთ შესაბამისი ფუნქცია)
# list1 = [True, False, "gio", 15, 87.3]
# for i in list1:
#     print(list1.index(i))

# #3)შექმენით სია სადაც მოათავსებ 5 ელემენტს,
# #შენი დავალებაა მე-3 ე ინდექსზე ჩაამატო სხვა ელემენტი(გამოიყენე შესაბამისი ფუნქცია)
# sia = ["a", "b", "c", "d", "e"]
# sia.insert(3, "rame")
# print(sia)

# #4)შექმენი სია სადაც გექნება 5 ელემენტი,
# #შენი დავალებაა სიის ბოლოში დაამატო რაიმე ელემენტი(გამოიყენე შესაბამისი ფუნქცია)

# my_list = ["a", "b", "c", "d", "e"]
# my_list.append("ბოლო")
# print(my_list)

# #5) ელემენტის ამოშლა მე-3 ინდექსზე:
# my_list = [10, 20, 30, 40, 50]
# my_list.remove(10)
# print(my_list)

#6)შექმენი ფუნქცია რომელსაც გადაეცემა სია,
#ამ სიაში მოთავსებული უნდა იყოს როგორც სტრინგები ასევე ინტეჯერები,შენი დავალებაა სიიდან ამოშალო მხოლოდ სტრინგის ტიპის ელემენტები,
#რაც შეეხება ინტეჯერებს ჩაამატეთ ახალ სიაში

# def amoishalos_stringebi(list):
#     result = []
#     for i in list:
#         if type(i) == int:
#             result.append(i)
#     return result

# print(amoishalos_stringebi([9, "gio", 8, "sandro", 5]))

# #7)შექმენით ფუნქცია რომელიც ამოშლის სიიდან ლუწ ინდექსზე მდგომ ელემენტებს ,
# #და კენტ ინდექსზე მდგომ ელემენტებს ჩაამატებს ახალ სიაში

# def amoshalos_kent_indeqsze(list):
#     result = []
#     for i in range(len(list)):
#         if i % 2 != 0: 
#             result.append(list[i])
#     return result

# print(7, 7, 4, 3, 9, 1)

# #8)შექმენი ფუნქცია რომელსაც გადაეცემა სია,შენი დავალებაა იპოვო ამ სიიდან ლუწი რიცხვები და ჩაამატო ახალ სიაში,
# #შემდეგ ამ სიიდან უნდა გაიგოთ კენტ ინდექსზე მდგომი რიცხვების კვადრატების ჯამი

# def raime_sia(lst):
#     luwi_ricxvebi = []
#     for i in lst:
#         if i % 2 == 0:
#             luwi_ricxvebi.append(i)
#     kent_indeqsze = 0
#     for u in range(len(luwi_ricxvebi)):
#         if u % 2 != 0:
#             square = luwi_ricxvebi[u] ** 2
#             kent_indeqsze += square
#     return kent_indeqsze

# print(raime_sia([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


#9)შექმენით ფუნქცია,რომელსაც გადაეცემა სტრინგებით სავსე სია,შენი დავალებაა შეამოწმო,
#თუ სტრინგი შეიცავს კენტი რაოდენობის ასობგერას,მაგ შემთხვევაში ჩაამატეთ ახალ სიაში,
#ხოლო თ შეიცავს ლუწი რაოდენობის ასობგერას შენი დავალებაა ესენიც ჩაამატო ახალ სიაშ ოღნდ მათ ასოები იყოს დიდი

def sia(str):
    result = []
    for i in str:
        if len(i) % 2 == 1 :
            result.append(i)        
        else:
            result.append(i.upper())       
    return result

print(sia(["hello", "world", "cat", "dog", "python"]))

#10)შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგებით სავსე სია,შენი დავალებაა გაიგო,
#თუ ეს სიტყვა არის capitalize მაგ შემთხვევაში დაამატა მსსგავსი სტრინგები სხვა სიაში,
#თუ სიტყვა არის upper დაამატე ეს სტრინგი სხვა ახალ სიაში,და თუ ეს სიტყვა
#არის lower მაშინ დაამატე ეს სიტყვები სხვა ახალ სიაში,შემდეგ სამივე სიაში მოცემული ელემენტები 
#დააბრუნეთ ოღონდ სტრინგის სახით და თითოეული
#სტრინგი ერთმანეთსგან დაშორებული იიყოს $ ნიშნით

def sia(words):
    capitalized = []
    uppercase = []
    lowercase = []

    for i in words:
        if i.istitle():  
            capitalized.append(i)
        elif i.isupper():  
            uppercase.append(i)
        elif i.islower():  
            lowercase.append(i)

    capitalized_str = '$'.join(capitalized)
    uppercase_str = '$'.join(uppercase)
    lowercase_str = '$'.join(lowercase)

    return capitalized_str, uppercase_str, lowercase_str