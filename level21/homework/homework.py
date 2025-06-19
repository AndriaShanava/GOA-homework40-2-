#1) ფუნქცია, რომელიც ამოწმებს სტრინგში არის თუ არა რიცხვი:
def amowmebs_aris_stringi(word):
    for i in word:
        if type(i) == str:
           return True
        else:
            False

#2) ფუნქცია, რომელიც დააბრუნებს შებრუნებულ სიას for ციკლის გამოყენებით:
def shebrunebuli_sia(list):
    reversed_list = []
    for i in range(len(list)-1, -1, -1):
        reversed_list.append(list[i])
    return reversed_list

#3) ფუნქცია, რომელიც ამოწმებს არის თუ არა სტრინგში ერთი მაინც დიდი ასო:
def aris_didi_aso(string):
    for aso in string:
        if aso == aso.upper() and aso.isalpha():
            return True
    return False

#4) ფუნქცია, რომელიც აბრუნებს მომხმარებლის შემოტანილ სიტყვის შებრუნებულ ვარიანტს:
def sheabrunos_sityva(string):
    result = ""
    for i in range(len(string)-1, -1, -1):
        result += string[i]
    return result

#5) სია, საიდანაც გამოაქ სიის ელემენტები მეორე ინდექსიდან ბოლომდე 3-ის გამოტოვებით:
sia = ["a", "b", "c", "d", "e", "f", "g", "h"]
axali_sia = sia[2::3]
print(axali_sia)
