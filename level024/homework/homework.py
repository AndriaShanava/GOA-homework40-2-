# 1) სტრინგის გადაყვანა lower-დან upper-ში
def to_upper_case():
    text = input("შეიყვანე სტრინგი: ")
    print(text.upper())

# 2) სიიდან თანხმოვანების ამოღება და სორტირება
def consonants_sorted(names):
    result = []
    xmovnebi = 'aeiou'
    for i in names:
        for letter in i:
            if letter.isalpha() and letter not in xmovnebi:
                result.append(letter.lower())  
    return sorted(result)

# 3) სამი სიის ელემენტებიდან ხმოვნების ამოღება და სორტირება
def extract_vowels(data):
    xmovnebi = 'aeiou'
    result = []
    for i in data:
        for u in i:
            for letter in u:
                if letter in xmovnebi:
                    result.append(letter.lower())
    return sorted(result)

# 4) 0-დან რიცხვამდე დათვლა, 3-ის გამოტოვებით
def datvla_3_rixvamde(n):
    for i in range(1, 10 , 3):
        print(i)
        
