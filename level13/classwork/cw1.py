#შექმენით ფუნქცია რომელსაც არგუმენტად სია, ამ სიაში უნდა იყოს სხვადასხვა ტიპის მონაცემები და დაითვალოს რამდენი სტრინგ ტიპის მონაცემი არის.

def count_strings(data_list):
    count = 0
    for item in data_list:
        if type(item) == str:
            count += 1
    return count
print(count_strings(["hello", 123, "world", 45.67, True, "python"]))