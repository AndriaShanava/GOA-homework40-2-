# 1)შექემენით ფუნქცია რომელსაც გადაეცემა რიცხვებიტ სავსე სია,თქვენი დავალებაა ამ სიიდან ამოშალოთ ლუწი რიცხვები

def sia(list):
    result = []
    for i in list:
        if i % 2 != 0:
            result.append(i)
    return result