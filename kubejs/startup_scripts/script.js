// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('profession_token_engineer', 'basic')
	.displayName('Engineer Profession Token')
	.unstackable()
	.glow(true)
	.rarity('rare')
	.tooltip('A token that unlocks the engineer profession quests.')
	
	event.create('profession_token_mage', 'basic')
	.displayName('Mage Profession Token')
	.unstackable()
	.glow(true)
	.rarity('rare')
	.tooltip('A token that unlocks the mage profession quests.')
	
	event.create('profession_token_hunter', 'basic')
	.displayName('Hunter Profession Token')
	.unstackable()
	.glow(true)
	.rarity('rare')
	.tooltip('A token that unlocks the hunter profession quests.')
	
	event.create('profession_token_farmer', 'basic')
	.displayName('Farmer Profession Token')
	.unstackable()
	.glow(true)
	.rarity('rare')
	.tooltip('A token that unlocks the farmer profession quests.')
	
	event.create('profession_token_blacksmith', 'basic')
	.displayName('Blacksmith Profession Token')
	.unstackable()
	.glow(true)
	.rarity('rare')
	.tooltip('A token that unlocks the blacksmith profession quests.')
	
	event.create('andesite_machine')
	.displayName('Andesite Machine')
	
	event.create('brass_machine')
	.displayName('Brass Machine')
	
	event.create('redmonite_powder')
	.displayName('Redmonite Powder')
	
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	
})