#შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა მომხმარებლის შემოტანილი სიტყვა და დაითვლის სიგრძეს  len() ფუნქციის გარეშე.

def count_length(word):
    count = 0
    for i in word:
        count += 1
    return count
print(count_length("hello"))  