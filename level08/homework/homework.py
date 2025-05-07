# 1) სია სახელებით და პირველი და ბოლო ელემენტის ამოღება
names = ["Ana", "Beka", "Giorgi", "Lika", "Nino"]
print(names[0])  
print(names[-1])  

# 2) სია სახელებით და უარყოფითი ინდექსების კომენტარები
names_with_indices = ["Ana", "Beka", "Giorgi", "Lika", "Nino"]


# 3) სია სახელებით და თითოეული ელემენტის ცალ-ცალკე ამოღება
for name in names_with_indices:
    print(name)

# 4) სტრინგის თითოეული ასოს ცალ-ცალკე ამოღება
string_variable = "HelloWorld"
for char in string_variable:
    print(char)

# 5) სიის ელემენტების ამოღება 2-დან 7 ინდექსამდე
names_10 = ["Ana", "Beka", "Giorgi", "Lika", "Nino", "Mari", "Saba", "Tina", "Davit", "Sandro"]
print(names_10[2:8])  

# 6) ბოლო 8 ასოს ამოღება სტრინგიდან
string_konstantinopoli = "konstantinopoli"
print(string_konstantinopoli[-8:])  # ბოლო 8 ასო

# 7) ხილის სახელების ჩანაცვლება ქვეყნის სახელებით
fruits = ["Apple", "Banana", "Cherry", "Date", "Fig"]
countries = ["Georgia", "USA", "France", "Germany", "Italy"]
fruits = countries  # ჩანაცვლება
print(fruits)

# 8) სტრინგის ბოლო ინდექსის შეცვლა
string_example = "example"
# string_example[-1] = "k"  # სტრინგები არიან immutable (უცვლელი), ამიტომ ვერ შევცვლით მათ ინდივიდუალურ სიმბოლოებს

# 9) სტრინგიდან "gela"-ს ამოღება
string_kurdgelia = "kurdgelia"
print(string_kurdgelia[4:8])  # "gela"

# 10) რიცხვების ჯამის პოვნა
numbers = [10, 5, 20, 40]
print(sum(numbers))  # ჯამი