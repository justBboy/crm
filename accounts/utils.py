from random import randint

def generate_random_ints():
    value = ""
    for i in range(20):
        value += str(randint(0, 10))

    return value