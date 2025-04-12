# and-ს უფრო მაღალი პრიორიტეტი აქვს, ვიდრე or-ს
# ანუ პირველ რიგში შესრულდება and, შემდეგ კი or

# მაგალითი:
result = True or True and False
# პირველ რიგში გაშიფრდება True and False -> False
# დარჩება True or False -> შედეგი იქნება True

# მეორე მაგალითი:
result = False or False and True
# False and True -> False
# False or False -> False

# მესამე მაგალითი:
result = True and False or True
# True and False -> False
# False or True -> True
