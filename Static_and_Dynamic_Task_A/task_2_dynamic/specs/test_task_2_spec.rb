require('minitest/autorun')
require('minitest/rg')
require('../testing_task_2.rb')
require('../card.rb')

class TestCardGame < Minitest::Test

  def setup
    @card1 = Card.new('Hearts', 1)
    @card2 = Card.new('Spades', 2)
    @card3 = Card.new('Clubs', 3)
    @card4 = Card.new('Diamonds', 4)
    @card_game = CardGame.new()
    @all_cards = [@card1, @card2, @card3, @card4]
  end

  def test_for_ace__true
    result = @card_game.check_for_ace(@card1)
    assert_equal(true, result)
  end

  def test_for_ace__false
    result = @card_game.check_for_ace(@card2)
    assert_equal(false, result)
  end

  def test_for_highest_card
    result = @card_game.highest_card(@card3, @card4)
    assert_equal(4, result)
  end

  def test_for_cards_total
    result = CardGame.cards_total(@all_cards)
    assert_equal("You have a total of 10", result)
  end
end
