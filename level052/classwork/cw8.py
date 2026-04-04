# 8)ფუნქციამ მიიღოს მთელი რიცხვების სია და დააბრუნოს სია, 
#სადაც ყველა დადებითი რიცხვი გაზრდილია 1–ით, ხოლო ყველა უარყოფითი შემცირებული 1–ით.

def sum(sia):
    result = []
    for i in sia:
        if i > 0:
            result.append(i + 1)
        elif i < 0:
            result.append(i - 1)
        else:
            result.append(i)
    return result
        