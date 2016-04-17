function load_quote(elm_id) {
  var quotes = [
    {text: "To ensure perfect aim, shoot first and call whatever you hit the target!"},
    {text: "If the enemy is in range, so are you."},
    {text: "Tracers work both ways."},
    {text: "If it's stupid but works, it isn't stupid."},
    {text: "When in doubt empty the magazine."},
    {text: "Any ship can be a minesweeper... once."},
    {text: "Never tell the Platoon Sergeant you have nothing to do."},
    {text: "If you see a bomb technician running, follow him!"},
    {text: "Aim towards the Enemy."},
    {text: "Clever is getting out alive."},
    {text: "The easy way is always mined."},
    {text: "War doesn't determine who's right. War determines who's left."},
    {text: "Anything you do can get you killed, including nothing..."},
    {text: "If your attack is going too well, you’re walking into an ambush!"},
    {text: "Whoever said the pen is mightier than the sword, obviously never encountered automatic weapons."},
    {text: "When the pin is pulled, Mr. Grenade is not our friend."},
    {text: "Never trade luck for skill."},
    {text: "There is no such thing as an atheist in a foxhole."},
    {text: "If it's stupid but works, it isn't stupid."},
    {text: "Never interrupt your enemy when he is making a mistake."},
    {text: "Only the dead will know the end of the war."},
    {text: "The men who really believe in themselves are all in lunatic asylums."},
    {text: "The more you sweat in peace, the less you bleed in war."},
    {text: "We are not retreating, we are advancing in another direction."},
    {text: "When you're short of everything but the enemy, you're in combat."},
    {text: "Who cares if a laser guided 500 lb bomb is accurate to within 9 feet?"},
  ];
  $(elm_id).text(quotes[Math.floor(Math.random() * quotes.length)].text);
}
