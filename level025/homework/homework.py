# 1) ანბანის მიხედვით დალაგება
words = ["ბატონი", "კატა", "ვაშლი", "ამონა", "დათა"]
sorted_words = sorted(words)
print(sorted_words)

# 2) რიცხვების სორტირება: ჯერ ორნიშნა, მერე ერთნიშნა (კლებადობით)
def daalage_ricxvebi(sia):
    or_nishna = []
    erti_nishna = []

    for ricxvi in sia:
        if 10 <= ricxvi <= 99:
            or_nishna.append(ricxvi)
        elif 0 <= ricxvi <= 9:
            erti_nishna.append(ricxvi)

    or_nishna.sorted()
    erti_nishna.sorted(reverse=True)

    return or_nishna + erti_nishna



# 3) სტრინგების სორტირება ასო "კ"-ს რაოდენობით
def daalage(sia):
    def raodenoba_k(sityva):
        raodenoba = 0
        for i in sityva:
            if i == "კ":
                raodenoba += 1
        return raodenoba

    sia.sort(key=raodenoba_k)
    return sia


# 4) სტრინგების სიიდან კენტ ინდექსებზე მყოფი სიმბოლოების გაერთიანება
def kenti_indeksebi(sia):
    result = []
    for sityva in sia:
        asoeebi = []
        for i in range(len(sityva)):
            if i % 2 == 1:
                asoeebi.append(sityva[i])
        result.append("".join(asoeebi))
    return result

# 5) ფუნქცია რომელიც წინადადებიდან გაფილტრავს ხმოვანებს
def xmovnebi(sentence):
    vowels = "აეიოუ"
    result = ""
    for i in sentence:
        if i in vowels:
            result += i
    return result
