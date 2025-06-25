#1)შექმენით ფუნქცია რომელიც შეამოწმებს არის თუ არა გადმოცემულ სტრინგში ხმოვნები,
#თუ არის დააბრუნე ეს ხმოვნები ასევე  დაითვალე რამდენი ხმოვანი იყო მოცემულ სტრინგში

def amovachino_xmovnebi(string):
    xmovnebi = "aeiou"  
    result = []  
    for i in string:
        if i in xmovnebi:
            result.append(i)
    raodenoba = len(result)
    return result, raodenoba

#2)მომხმარებელს შემოატანინეთ რაიმე რიცხვი,
#სანამ მომხმარებელი არ შემოიყვანს 10 ზე ნაკლებ რიცხვს გაუმეორეთ რომ თავიდან შემოიტანოს,
#თან არასწორად შემოყვანილი მნიშნველობები ჩაამატეთ სიაში

def raime_ricxvi():
    araswori = []
    while True:
        ricxvi = int(input("შეიყვანე რიცხვი: "))
        if ricxvi < 10:
            print(ricxvi)
            break
        else:
            print("არასწორია, სცადე თავიდან!")
            araswori.append(ricxvi)
    return araswori

#3)შექმენი ფუნქცია,რომელსაც გადაეცემა სია ამ სიაში იქნება მოთავსებული პატარა ასოებით დაწერილი სახელები,
#თქვენი დავალებაა ახალ სიაში დაამატოთ ყველა ელემენტი ოღონდ ისინი უნდა იყოს დიდი ასოებით დაწერილი
def didi_asoebit(sia):
    result = []
    for i in sia:
        result.append(i.upper())
    return result

#4)შექმენი ფუნქცია რომელსაც გადაეცემა სტრინგი,თქვენი დავალებაა ეს სტრინგი შემოატრიალოთ,
#შემდეგ კი ამ დააბრუნოთ შემოტრიალებული  სტრინგს რომ ქონდეს პირველი ასო დიდი

def shemotrialebuli_didit(string):
    shemotrialebuli = string[::-1]
    result = shemotrialebuli.capitalize()
    return result

#5)შექმენით ფუნქცია რომელსაც გადაეცემა სია,ამ სიაში მოთავსებული იქნება როგორც სტრინგები ასევე ინტეჯერები,
#თქვენი დავალებაა გაიგოთ სოაში მყოფი სტრინგების რაოდენობა და ასევე უნდა გაიგოთ სიაში მყოფი ინტეჯერების ჯამი

def stingebi_da_inegerebi(sia):
    str_raodenoba = 0
    int_jami = 0

    for i in sia:
        if type(i) == str:
            str_raodenoba += 1
        elif type(i) == int:
            int_jami += i

    return str_raodenoba, int_jami

#6)შექმენით ფუნქცია რომესლსაც გადაეცემა რიცხვებით სავსე სია,თქვენი დავალებაა გაიგოთ ამ რიცხვების საშუალო არითმეყიკული,
#შემდეგ ამ რიცხვამდე(საშუალო არითმეტიკული),იპოვეთ ყველა ლუწი რიცხვის ჯამი


        
