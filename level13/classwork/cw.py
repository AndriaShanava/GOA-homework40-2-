#შექმენით ფუნქცია რომელაც არგუმენტად გადაეცემა მომხმარებლის შემოტანილი სიტყვა და ამ სიტყვაში დაითვლის ასო "k'ს რაოდენობას.

def count_k(word):
    count = 0
    for i in word:
        if i == "k":
            count += 1
    return count
print(count_k("kakha"))