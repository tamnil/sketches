#!/bin/python

__author__ = "Tamnil Saito Jr."
__copyright__ = "Copyright 2019, Tamnil"
__license__ = "GPL"
__version__ = "0.0.1"
__maintainer__ = "Tamnil Saito Junior"
__email__ = "tamnil@gmail.com"
__status__ = "dev"

import unittest
import saltitante


class Mytest(unittest.TestCase):


    def test_is_jumping(self):
        test1 = saltitante.is_jumping('123456789')
        test2 = saltitante.is_jumping('4532634543')
        test3 = saltitante.is_jumping('777777777')
        # print (test1,test2)
        self.assertEqual(test1, False)
        self.assertEqual(test2, True)
        self.assertEqual(test3, False)

    def test_get_jumping(self):

        jump1 = saltitante.get_jumping(123423)
        jump2 = saltitante.get_jumping(98712304)
        notjump1 = saltitante.get_jumping(1234)
        notjump2 = saltitante.get_jumping(5555555)
        notjump3 = saltitante.get_jumping(12569)

        self.assertEqual(jump1,123423)
        self.assertEqual(jump2,98712304)
        self.assertEqual(notjump1,False)
        self.assertEqual(notjump2,False)
        self.assertEqual(notjump3,False)

    def test_warzone_very_general_tests(self):

        values = saltitante.generate_numbers(0,1000)
        filtered = saltitante.get_jump_numbers_list(values)
        print(len(filtered))

        self.assertEqual(len(values) > len(filtered), True)
        # assert for informmation where exists 525 jumping numbers below one thousand
        self.assertEqual(len(filtered), 525)


        mytest = saltitante.get_jumping_percentage(90)

        ##  50% of numbers: 538
        fiftypercent = saltitante.get_jumping_percentage(50)
        self.assertEqual(fiftypercent,538)


if __name__ == '__main__':
    unittest.main()

