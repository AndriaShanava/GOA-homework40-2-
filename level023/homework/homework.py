#1) Python List Functions — კომენტარებით, ახსნებით და მაგალითებით

# append() — სიას ბოლოში ამატებს ელემენტს
my_list = [1, 2, 3]
my_list.append(4)
print(my_list)  # [1, 2, 3, 4]

# extend() — სიას სხვა iterable-ს ელემენტებს ამატებს
my_list = [1, 2, 3]
my_list.extend([4, 5])
print(my_list)  # [1, 2, 3, 4, 5]

# insert() — კონკრეტულ ინდექსზე ამატებს ელემენტს
my_list = [1, 3, 4]
my_list.insert(1, 2)
print(my_list)  # [1, 2, 3, 4]

# remove() — სიიდან შლის კონკრეტულ ელემენტს (პირველი მოძებნილი)
my_list = [1, 2, 3, 2]
my_list.remove(2)
print(my_list)  # [1, 3, 2]

# pop() — შლის და აბრუნებს ბოლო (ან მითითებულ ინდექსზე მყოფ) ელემენტს
my_list = [1, 2, 3]
removed = my_list.pop()
print(removed)  # 3
print(my_list)  # [1, 2]

# index() — აბრუნებს კონკრეტული ელემენტის ინდექსს
my_list = ['a', 'b', 'c']
print(my_list.index('b'))  # 1

# count() — რამდენჯერ გვხვდება კონკრეტული ელემენტი სიაში
my_list = [1, 2, 2, 3]
print(my_list.count(2))  # 2

#2) for / while loop-ის დანიშნულება და მაგალითები (50-100-მდე, 5-ის გამოტოვებით)

# while loop 
i = 50
while i <= 100:
    if i != 5:
        print(i)
    i += 1

# for loop 

for i in range(50, 101):
    if i != 5:
        print(i)


#3) სტრინგის თითოეული ასოს დაბეჭდვა for და while loop-ით

text = "HelloGPT"

# for loop
for char in text:
    print(char)

# while loop
i = 0
while i < len(text):
    print(text[i])
    i += 1

#4) while / for loop — 20-დან 100-მდე & 50-დან 80-მდე 3-ის გამოტოვებით

# 20-დან 100-მდე (for)
for i in range(20, 100):
    print(i)

# 20-დან 100-მდე (while)
i = 20
while i <= 100:
    print(i)
    i += 1

# 50-დან 80-მდე, 3-ის გამოტოვებით (for)
for i in range(50, 80, 3):
        print(i)

# 50-დან 80-მდე, 3-ის გამოტოვებით (while)
i = 50
while i <= 80:
    if i % 3 != 0:
        print(i)
    i += 1

#5)
s = 0
while s != 10:
    n = int(input("Enter num: "))
    s += 1

for i in range(0,10):
    num = int(input("Enter num: "))
