# 1) მანქანის სახელის პირველი ასოს დიდად დაწერა
car_name = "toyota"
print(car_name.capitalize())

# დამატებითი მაგალითები
bike_name = "honda"
print(bike_name.capitalize())

plane_name = "boeing"
print(plane_name.capitalize())

# 2) ხილის სახელის ყველა ასოს დიდად დაწერა
fruit_name = "apple"
print(fruit_name.upper())

# დამატებითი მაგალითები
vegetable_name = "carrot"
print(vegetable_name.upper())

berry_name = "strawberry"
print(berry_name.upper())

# 3) ქვეყნის სახელის ყველა ასოს პატარად დაწერა
country_name = "GEORGIA"
print(country_name.lower())

# 4) ქალაქის სახელში კონკრეტული ასოს ინდექსის პოვნა
city_name = "tbilisi"
print(city_name.index("s"))

# დამატებითი მაგალითები
city_name_2 = "batumi"
print(city_name_2.index("t"))

city_name_3 = "kutaisi"
print(city_name_3.index("i"))

# 5) სიაში კონკრეტული ელემენტის ინდექსის პოვნა
items = ["ირაკლი", "ბექა", 50, "ატამი", 40.50, "თვითმფრინავი"]
print(items.index("ატამი"))
print(items.index(50))

# დამატებითი მაგალითები
items_2 = ["apple", "banana", 100, "cherry", 200.5, "grape"]
print(items_2.index("cherry"))
print(items_2.index(100))

items_3 = ["dog", "cat", 300, "bird", 400.75, "fish"]
print(items_3.index("bird"))
print(items_3.index(300))

# 6) სიაში მყოფი სახელების პირველი ასოს დიდად დაწერა
names = ["irakli", "beka", "giorgi"]
capitalized_names = [name.capitalize() for name in names]
print(capitalized_names)

# 7) სიაში მყოფი ქვეყნების სახელების ყველა ასოს დიდად დაწერა
countries = ["georgia", "armenia", "azerbaijan"]
uppercase_countries = [country.upper() for country in countries]
print(uppercase_countries)

# 8) სიაში მყოფი ქვეყნების სახელების ყველა ასოს პატარად დაწერა
countries_upper = ["USA", "CANADA", "MEXICO"]
lowercase_countries = [country.lower() for country in countries_upper]
print(lowercase_countries)