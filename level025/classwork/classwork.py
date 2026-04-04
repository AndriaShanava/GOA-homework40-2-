#1.შექმენით სია რომელიც იქნება რიცხვებით სავსე და არეული თანმიმდევრობით. დალაგეთ რიცხვები კლებადობით.

def sia(numbers):
    return sorted(numbers, reverse = True)

print(sia([3, 4, 5, 7, 8, 10, 34, 57]))

#2.შექმენით სია რომელიც იქნება სტრინგებით სავსე და დაალაგეთ სიგრძის მიხედვით შებრუნებულად.
def str_sia(words):
    return sorted(words, key = len, reverse = True)

print(str_sia(["atami", "vashli", "marwyvi", "banani", "alubali", "kitri"]))

#3.შექმენით სია, ამ სიაში უნდა იყოს სტრინგები და ეს სია დაასორტირეთ ასო ა-ს რაოდენობის მიხედვით.
def sia(words):
    count = 0
    for i in words:
        if i == "a":
            count += 1
    return count

LIST = ["andria", "sandro", "irakli", "dato", "gabrieli"]
print(sorted(LIST, key = sia))