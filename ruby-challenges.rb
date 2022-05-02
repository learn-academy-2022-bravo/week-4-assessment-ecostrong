# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.


 num1 = 7
# # # Expected output: '7 is odd'
num2 = 42
# # # # Expected output: '42 is even'
num3 = 221
# # Expected output: '221 is odd'

# # method-even_or_odd 
# # parameter - number 
# # conditional statement - evaluation for % .even? or .odd? 



def even_odd(num)
    if num % 2 == 0 
        "#{num} is even"
    else % 2 == 1
        "#{num} is odd"
    end 
end

p even_odd(num1)
p even_odd(num2) 
p even_odd(num3) 

# # # output: 

# "7 is odd"
# "42 is even"
# "221 is odd"


# # -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete


album1 = 'Rubber Soul'
# # # # Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# # # # Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# # # # Expected output: 'bby Rd'

# method - no vowels 
# parameter -string
# use gsub 

  def novowels(string)
    result = string.gsub(/[aeiou]/i, '')
    return result
  end

  puts novowels("Rubber Soul") 
  puts novowels("Sgt Pepper") 
  puts novowels("Abby Road") 

# # # Output: 
# # # Rbbr Sl
# # # Sgt Pppr
# # # bby Rd


# # # -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

 palindrome_tester1 = 'Racecar'
# # Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# # Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# # Expected output: 'Rotator is a palindrome'


def palindrome_tester (string)
    if string == string.reverse
      "#{string} is a palindrome"
    else
      "#{string} is not a palindrome"
    end
  end
  
  p palindrome_tester('racecar')
  p palindrome_tester('LEARN')
  p palindrome_tester('Rotator')

# # # # Output: 
# # # "racecar is a palindrome"
# # # "LEARN is not a palindrome"
# # # "Rotator is not a palindrome"
