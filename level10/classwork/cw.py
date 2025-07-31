#3)შექმენით სია სადაც გექნებათ მოთავსებული ყველა მონაცემთა ტიპის ელემენტი,
#თქვენი დავალებაა ამ სიიდან ამოშალოთ მესამე და ბოლო ინდექსზე მდგომი ელემენტები,გამოიყენეთ pop() ფუნქცია
data_types_list = [42, "hello", 3.14, True]
data_types_list.pop(3)  
data_types_list.pop(-1)  
print(data_types_list)

# 4)შექმენით სია --> ["giorgi" , "lasha", "beqa" , "irakli" , 45] თქვენი დავალებაა ამ სიიდან ამოშალოთ "lasha" და ასევე
#ამოშალოთ რიცხვი 45,
#გამოიყენეთ remove() ფუნქცია
names_and_number = ["giorgi", "lasha", "beqa", "irakli", 45]
names_and_number.remove("lasha")
names_and_number.remove(45)
print("Updated list after Task 4:", names_and_number)

#pop() ფუნქცია ამოიღებს ელემენტს ინდექსით, ხოლო remove() ფუნქცია ამოიღებს ელემენტს მნიშვნელობით.