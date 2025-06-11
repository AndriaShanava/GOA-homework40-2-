#1)შექმენით ფუნქცია რომელსაც გადაეცემა სახელები,
#თქვენი დავალებაა ტერმინალში გამოიტანოთ კენტ ინდექსზე მდგომი სახელები და შეინახოთ ახალ სიაში
def kent_indeqsze(names):
    result = []
    for i in range(len(names)):
        if i % 2 == 1:
            print(names[i])
            result.append(names[i])
    return result

#2.ფუნქცია — მხოლოდ დიდი ასოთი დაწყებული სახელების არჩევა
def didi_asoti_dawyebuli(names):
    result = []
    for i in names:
        if i[0].isupper():
            result.append(i)
    return result

#3.ფუნქცია — მხოლოდ მთლიანად დიდი ასოებით დაწერილი სახელების ამოღება
def didi_asoti(names):
    result = []
    for i in names:
        if i.isupper():
            result.append(i)
    return result

#4.ფუნქცია — სტრინგიდან მხოლოდ ხმოვანი ასოების ამოღება და მათი გადაყვანა დიდ ასოებში
def mxolod_xmovani(text):
    vowels = 'aeiou'
    result = ''
    for i in text:
        if i in vowels:
            result += i.upper()
    return result

#5.შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგებით სავსე სია,თქვენი დავალებაა ახალ სიაში დაამატოთ მხოლოდ ის
#სტრინგები რომლებიც იწყებიან დიდ ასოზე და ასევე მათ სიგრძე არის 5 ზე ნაკლები და ასევე ამ სტრინგში არის ერთი ასო მაინც ხმოვანი
def stringrbit_savse_sia(strings):
    result = []
    vowels = 'aeiou'
    for i in strings:
        if len(i) < 5:
            if i[0].isupper():
                xmovani = False
                for s in i:
                    if s in vowels:
                        xmovani = True
                        break
                if xmovani:
                    result.append(i)
    
    return result
data = ["Nia", "dato", "Mari", "tea", "Ana", "Zviadi", "BEKA", "OTTO", "kkk"]
print(stringrbit_savse_sia(data))