# 2)ფუნქცია, რომელიც მიიღებს რიცხვს და დააბრუნებს "ლუწია" თუ ყველა ციფრი ლუწია,
#"კენტია" თუ ყველა კენტია, ხოლო "შერეულია" თუ ორივე გვხვდება.

def list(sia):
    list1 = []
    even = 0
    odd = 0
    for i in str(sia):
        list1.append(int(sia))

    for u in list1:
        if u % 2 == 0:
            even += 1
        else:
            odd += 1

    if even > 0 and odd == 0:
        return 'ლუწი'
    elif odd > 0 and even == 0:
        return 'კენტი'
    else:
        return 'შერეული'
    