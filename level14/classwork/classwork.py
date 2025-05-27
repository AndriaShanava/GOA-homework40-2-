#1)შექმენი ფუნქცია,რომელსაც გადაეცემა სტრინგი --> aleqsandre , თქვენი დავალებაა დააბრუნოთ კენტ ინდექსზე მდგომი ასოები

def name(stringg):
    result = ""
    for i in range(len(stringg)):
        if i % 2 == 1:  # Check if the index is odd
            result += stringg[i]
    return result

print(name("aleqsandre"))  