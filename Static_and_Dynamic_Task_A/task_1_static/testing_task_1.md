### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.







# ALL COMMENTS FOR ERRORS WILL BE ON THE LINE BELOW THE ERROR

require_relative('card.rb')
class CardGame


  def checkforAce(card)
  # 2 ERRORS:
  # 1) should use snake case. separation between words for method names should use an underscore '_'.
  # EX: check_for_ace
  # 2) all characters should be lowercase

    if card.value = 1
    # 1 ERROR:
    # 'if' statement checks equality, '=' assigns value. Should have a double equals '=='.
    # EX: card.value == 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # 2 ERRORS:
  # 1) misspelling of 'def'. EX: def highest_card
  # 2) parameters for method should be separated by comma. EX: (card1, card2)
  if card1.value > card2.value
  # 1 ERROR:
  # 1) 'if' statement should be indented correctly
    return card.name
    # 2 ERRORS:
    # 1) 'card' is not a defined variable, should reference 'card1'. EX: return card1.example
    # 2) class 'card' does not contain a method called name, if checking for highest value card, should return card.value. EX: return card.value
  else
    card2
    # 1 ERROR:
    # 1) missing 'return' statement. EX: return card2
  end
end
end
# 1 ERROR:
# 1) 'end' is extra, not required.


def self.cards_total(cards)
  # 1 ERROR:
  # 1) entire method is not properly indented starting at 'def self.cards_total'
  total
  # 1 ERROR:
  # 1) 'total' is an undefined variable. it should have an assigned value of '0' EX: total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total
    # 2 ERRORS:
    # 1) 'return' statement is within the 'for loop', should be indented properly to be outside 'for loop' and after 'end' statement in the line below
    # 2) 'total' variable is currently an integer and cannot be added to a string. 'total' must be converted
    # EX: return "You have a total of " + total.to_s
  end
end

# 1 ERROR:
# 1) missing 'end' statement for 'class CardGame', not obvious because of incorrect indentation of method 'self.cards_total'


```
