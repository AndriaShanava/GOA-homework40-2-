# 2) კომენტარის სახით ახსნები:
# ქეის სენსიტიური (case sensitive) ნიშნავს, რომ სიმბოლოების დიდი და პატარა ასოები განსხვავებულად ითვლება (მაგ: "Name" და "name" სხვადასხვა სიტყვებია).
# string - ტექსტური მონაცემი, მაგალითად: "hello".
# float - ათწილადი რიცხვი, მაგალითად: 3.14.
# boolean - ლოგიკური მნიშვნელობა, მხოლოდ True ან False.
# integer - მთელი რიცხვი, მაგალითად: 5.
# list - ელემენტების მიმდევრობა, მაგალითად: [1, 2, 3] ან ["a", "b", "c"].

# 3) ფუნქცია სახელის შესადარებლად ქეის სენსიტიურობის იგნორირებით
def greet_user(name):
    my_names = ['giorgi', 'giogi', 'gio', 'გიორგი', 'გიო'] 
    if name.lower() in [n.lower() for n in my_names]:
        return f'გამარჯობა {name}!, სასიამოვნოა თქვენი გაცნობა.'
    else:
        return f'გამარჯობა {name}!'

# 4) ფუნქცია, რომელიც სიტყვას გახლიჩავს ასო 'a'-ზე და აბრუნებს სიას
def split_by_a(word):
    return word.split('a')

# 5) ფუნქცია, რომელიც მომხმარებელს შემოატანინებს სახელს სანამ არ დაემთხვევა თქვენს სახელს
def collect_names_until_myname(my_name):
    names = []
    while True:
        name = input("შეიყვანეთ სახელი: ")
        names.append(name)
        if name.lower() == my_name.lower():
            break
    return names, len(names)

# 6) ფუნქცია, რომელიც მომხმარებელს შემოატანინებს სიტყვას და შემდეგ სიტყვებს სანამ არ შემოიტანს 'გაჩერდი!'
def shemotane_sityva(sityva):
    words = []
    while True:
        word = input("შეიყვანეთ სიტყვა: ")
        words.append(word)
        if word == 'გაჩერდი!':
            break
    # n-ზე მდგომი სიტყვის ჩათვლით გამოიტანეთ
    for i in words[:sityva]:
        print(i)