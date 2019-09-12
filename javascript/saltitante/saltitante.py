#!/bin/python

__author__ = "Tamnil Saito Jr."
__copyright__ = "Copyright 2019, Tamnil"
__license__ = "GPL"
__version__ = "0.0.1"
__maintainer__ = "Tamnil Saito Junior"
__email__ = "tamnil@gmail.com"
__status__ = "dev"

def is_jumping(number):

    number_text = str(number)
    have_greater = False
    have_less = False
    jumping_digits = 0

    for idx in range(len(number_text)-1):
        relative_index = int(number_text[idx+1]) - int(number_text[idx])
        if relative_index > 0 :
            have_greater = True
        if relative_index < 0:
            have_less = True

        if have_greater == True and have_less == True:
            return True

    return False


### deprecated used for development propuses - todo: transfer to test file
def get_jumping(value):
    if is_jumping(value):
        return value

    return False

### deprecated used for development propuses - todo: transfer to test file
def generate_numbers(initial, final):
    return list(range(initial,final))

### deprecated used for development propuses - todo: transfer to test file
def get_jump_numbers_list(values):
    value = list(map(lambda x: get_jumping(x),values))
    filtered_values = list(filter(lambda x: x != False , value))
    return filtered_values


def get_jumping_percentage(desired_percentage):
   count = 0
   jumping_numbers_count = 0
   processed_percentage = 0

   while processed_percentage < desired_percentage:
        count += 1
        if is_jumping(count):
            jumping_numbers_count += 1
        processed_percentage = (jumping_numbers_count/count) * 100
        
   return count

def main():
    print(get_jumping_percentage(99))


if __name__ == '__main__':
    main()

