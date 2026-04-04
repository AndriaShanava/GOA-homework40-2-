# str - არის ტიპი, რომელიც გამოიყენება ტექსტური მონაცემების შესანახად.
# int - არის ტიპი, რომელიც გამოიყენება მთელი რიცხვების შესანახად.
# float - არის ტიპი, რომელიც გამოიყენება ათწილადი რიცხვების შესანახად.
# boolean - არის ტიპი, რომელიც გამოიყენება ლოგიკური მნიშვნელობების შესანახად (True ან False).

# ცვლადის სახელები არ შეიძლება:
# - დაიწყოს რიცხვით: 1name ❌
# - შეიცავდეს გამოტოვებას: my name ❌
# - ემთხვეოდეს პითონის სპეციალურ/reserved სიტყვებს: for, if, print ❌

# უკეთესი სახელებია:
# - განმარტებითი და მკაფიო: user_name ✅, userAge ✅
# - ქვედატირეებით გამოყოფილი: first_name ✅, total_price ✅

#არსწორი ვერსია

#  ----------------
#      num 1 == 10
#      ----------------
#      academy = Goal Oriented Academy
#      ----------------
#      name = 'Jumbera'
#      name2 = 'mayvala'
#      print(name = Name2)
#      ————————
#      num = (“30”)
#      Print(str(num)+20)

#სწორი ვერსია

num1 = 10
academy = "Goal Oriented Academy"
name = "Jumbera"
name2 = "mayvala"
print(name == name2)
num = 30
print(str(num) + str(20))




# Python-ის მონაცემთა ტიპები
# input() — მომხმარებლისგან მონაცემის მიღება. აბრუნებს string-ს
name = input("შეიყვანე შენი სახელი: ")

# print() — გამოაქვს ეკრანზე ტექსტი ან მონაცემი
print("გამარჯობა,", name)

# int() — გარდაქმნის string-ს მთელ რიცხვად
age = int(input("შეიყვანე ასაკი: "))

# float() — გარდაქმნის string-ს ათწილადად
height = float(input("შეიყვანე სიმაღლე: "))

# str() — გარდაქმნის ნებისმიერ მონაცემს სტრინგად
number = 25
print("ასაკი არის " + str(number))  # str საჭიროია რადგან print-ს სტრინგები სჭირდება


my_name = "Andria"
user_name = input("შეიყვანე შენი სახელი: ")

if user_name == my_name:
    print("ჩვენ გვქვია ერთნაირად!")
else:
    print("გვარი განსხვავდება")


text = input("შეიყვანე რაიმე ტექსტი: ")

print(text * 10)

name = input("შეიყვანე სახელი: ")
age = int(input("შეიყვანე ასაკი: "))
height = float(input("შეიყვანე სიმაღლე მეტრებში: "))

print(f"{name} არის {age} წლის და მისი სიმაღლეა {height} მეტრი.")
