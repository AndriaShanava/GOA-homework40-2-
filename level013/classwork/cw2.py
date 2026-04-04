# შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა სია სადაც იქნება სხვადასხვა ტიპის მონაცემი. გაიგეთ ამ სიაში რიცხვების ჯამი

def sum_of_numbers(lst):
    total = 0
    for element in lst:
        if type(element) == int or type(element) == float:
            total += element
        return total
    
print(sum_of_numbers([1, 2, 3.5, "hello", True, 4]))  