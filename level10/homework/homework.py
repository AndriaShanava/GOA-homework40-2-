# 1) შექმენით სია, სადაც მოცემული იქნება ყველა მონაცემთა ტიპის ელემენტები და დაამატეთ ელემენტი append ფუნქციის გამოყენებით
data_types_list = [42, 3.14, "Hello", True]
data_types_list.append("New Element")
print(data_types_list)

# მაგალითი 1
example_list1 = [1, 2, 3]
example_list1.append(4)
print(example_list1)

# მაგალითი 2
example_list2 = ["a", "b", "c"]
example_list2.append("d")
print(example_list2)

# 2) დაამატეთ ელემენტები კონკრეტულ ინდექსებზე insert ფუნქციის გამოყენებით
data_types_list = [42, 3.14, "Hello", True]
data_types_list.insert(3, "Inserted at 3")
data_types_list.insert(5, "Inserted at 5")
data_types_list.insert(7, "Inserted at 7")
print(data_types_list)

# მაგალითი 1
example_list1 = [1, 2, 3]
example_list1.insert(1, "Inserted")
print(example_list1)

# მაგალითი 2
example_list2 = ["a", "b", "c"]
example_list2.insert(2, "Inserted")
print(example_list2)

# 3) განსხვავება insert და append ფუნქციებს შორის
# append ამატებს ელემენტს სიის ბოლოში, ხოლო insert ამატებს ელემენტს კონკრეტულ ინდექსზე.

# 4) ამოშალეთ ელემენტები კონკრეტულ ინდექსებზე pop ფუნქციის გამოყენებით
data_types_list = [42, 3.14, "Hello", True]
data_types_list.pop(3)
data_types_list.pop(2)
data_types_list.pop(5)
print(data_types_list)

# მაგალითი 1
example_list1 = [1, 2, 3, 4]
example_list1.pop(1)
print(example_list1)

# მაგალითი 2
example_list2 = ["a", "b", "c", "d"]
example_list2.pop(2)
print(example_list2)

# 5) ამოშალეთ კონკრეტული ელემენტები remove ფუნქციის გამოყენებით
data_types_list = [42, 3.14, "Hello", True]
data_types_list.remove(3.14)
data_types_list.remove("Hello")
data_types_list.remove(True)
print(data_types_list)

# მაგალითი 1
example_list1 = [1, 2, 3, 4]
example_list1.remove(2)
print(example_list1)

# მაგალითი 2
example_list2 = ["a", "b", "c", "d"]
example_list2.remove("c")
print(example_list2)

# 6) განსხვავება pop და remove ფუნქციებს შორის
# pop ამოშლის ელემენტს ინდექსის მიხედვით და აბრუნებს მას, ხოლო remove ამოშლის კონკრეტულ მნიშვნელობას სიიდან.

# 7) სიის გაერთიანება extend ფუნქციის გამოყენებით
string_list = ["apple", "banana", "cherry"]
integer_list = [1, 2, 3]
string_list.extend(integer_list)
print(string_list)

float_list = [1.1, 2.2, 3.3]
string_list.extend(float_list)
print(string_list)

# 8) გაიარეთ Sololearn-ის list ფუნქციების მოდული დამატებითი პრაქტიკისთვის.