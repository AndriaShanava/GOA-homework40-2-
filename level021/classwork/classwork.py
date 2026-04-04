#1.მომხმარებელს შემოატანინეთ სიტყვა მანამ სანამ არ შემოიტანს მინიმუმ 6 ნიშნას, სადაც ერთი სიტყვა მაინც იქნება დიდად დაწერილი .
def shemotanili_sityva():
    word = ""
    while len(word) < 6 or word.lower() == word:
        word = input("შეიყვანე სიტყვა (მინიმუმ 6 სიმბოლო და უნდა შეიცავდეს ერთ დიდ ასოს): ")
    return word

print("შეყვანილი სიტყვაა:", shemotanili_sityva())
